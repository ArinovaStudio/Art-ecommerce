    package studio.arinova.artecommerce.security;

    import com.fasterxml.jackson.databind.ObjectMapper;
    import jakarta.servlet.FilterChain;
    import jakarta.servlet.ServletException;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    import lombok.RequiredArgsConstructor;
    import lombok.extern.slf4j.Slf4j;
    import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
    import org.springframework.security.core.Authentication;
    import org.springframework.security.core.context.SecurityContextHolder;
    import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
    import org.springframework.stereotype.Component;
    import org.springframework.web.filter.OncePerRequestFilter;
    import studio.arinova.artecommerce.utility.JwtUtility;

    import java.io.IOException;
    import java.util.Map;

    @Component
    @RequiredArgsConstructor
    @Slf4j
    public class JwtAuthenticationFilter extends OncePerRequestFilter {

        private final JwtUtility jwtUtility;
        private final CustomUserDetailsServiceImpl customUserDetailsImpl;

        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

            log.info("JSON Web Token is filtering..");
            final String authHeader = request.getHeader("Authorization");
            final String jwt;
            final String email;
            final Long id;

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }

            try {

                jwt = authHeader.substring(7);
                id = Long.valueOf(jwtUtility.extractClaims(jwt).getSubject());
                email = jwtUtility.extractClaims(jwt).get("email", String.class);


                if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {

                    CustomUserDetails userDetails = customUserDetailsImpl.loadUserByUsername(email);

                    if (jwtUtility.isTokenValid(jwt, id, email)) {
                        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );

                        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                    }
                }

                Authentication temp = SecurityContextHolder.getContext().getAuthentication();

                filterChain.doFilter(request, response);
            } catch (Exception ex) {
                ObjectMapper objectMapper = new ObjectMapper();
                log.error("JWT filter error: {} ", ex.getMessage());
                response.setContentType("application/json");
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write(objectMapper.writeValueAsString(Map.of("response", "Unauthorized: Error Processing Token")));
            }
        }
    }