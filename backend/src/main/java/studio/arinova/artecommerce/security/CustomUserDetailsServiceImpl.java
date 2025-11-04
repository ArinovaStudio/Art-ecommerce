package studio.arinova.artecommerce.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.enums.UserType;
import studio.arinova.artecommerce.model.Customer;
import studio.arinova.artecommerce.model.Seller;
import studio.arinova.artecommerce.repository.CustomerRepositoryImpl;
import studio.arinova.artecommerce.repository.SellerRepositoryImpl;
import studio.arinova.artecommerce.utility.GeneralUtility;

import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomUserDetailsServiceImpl implements UserDetailsService {

    private final CustomerRepositoryImpl customerRepository;
    private final SellerRepositoryImpl sellerRepository;

    @Override
    public CustomUserDetails loadUserByUsername(String emailAndRole) throws UsernameNotFoundException {
        Map<String, String> splittedEmailAndRoleData = GeneralUtility.splitEmailAndRole(emailAndRole);
        String email =splittedEmailAndRoleData.get("email");
        UserType role = UserType.valueOf(splittedEmailAndRoleData.get("role"));

        switch(role) {
            case CUSTOMER -> {
                Customer customer = customerRepository.findByEmail(email);
                if (customer == null) throw new RuntimeException("No customer found of the email.");
                return new CustomUserDetails(customer);
            }
            case SELLER -> {
                Seller seller = sellerRepository.findByEmail(email);
                if (seller == null) throw new RuntimeException("No seller found of the email");
                return new CustomUserDetails(seller);
            }
            default -> {
                log.info("No role exists: {}", role.name());
                return new CustomUserDetails(null);
            }
        }
    }
}
