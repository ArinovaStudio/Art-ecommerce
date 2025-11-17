package studio.arinova.artecommerce.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.model.User;
import studio.arinova.artecommerce.repository.UserRepository;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomUserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public CustomUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user  = userRepository.findByEmail(email);
        if (user.isEmpty()) throw new UsernameNotFoundException("No user found");
        return new CustomUserDetails(user.get());
    }
}
