package studio.arinova.artecommerce.utility;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtility {

    @Value("${jwt.secret.key}")
    private String SECRET_KEY;

    private Key signingKey;
    private final long EXPIRATION_TIME = 1000 * 60 * 60;

    @PostConstruct
    private void init() {
        signingKey = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    public String generateToken(String id, String name, String email) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);

        return Jwts.builder()
                .setSubject(id)
                .claim("name", name)
                .claim("email", email)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(signingKey, SignatureAlgorithm.HS256)
                .compact();
    }

    public Claims extractClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean isTokenValid(String token, String id, String email) {
        Claims claims = extractClaims(token);
        String extractedId = claims.getSubject();
        String extractedEmail = claims.get("email", String.class);
        return extractedId.equals(String.valueOf(id)) &&
                extractedEmail.equals(email) &&
                !isTokenExpired(token);
    }

    public boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    public Date getExpirationDate(String token) {
        return extractClaims(token).getExpiration();
    }
}
