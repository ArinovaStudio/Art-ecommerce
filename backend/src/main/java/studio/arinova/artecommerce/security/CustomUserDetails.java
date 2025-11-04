package studio.arinova.artecommerce.security;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import studio.arinova.artecommerce.enums.UserType;
import studio.arinova.artecommerce.model.Customer;
import studio.arinova.artecommerce.model.Seller;

import java.util.Collection;
import java.util.List;

@Data
public class CustomUserDetails implements UserDetails {

    private final String name;
    private final String email;
    private final String password;
    private final UserType userType;

    public CustomUserDetails(Object object) {
        if (object instanceof Customer customer) {
            this.name = customer.getName();
            this.email = customer.getEmail();
            this.password = customer.getPassword();
            this.userType = UserType.CUSTOMER;
        } else if (object instanceof Seller seller) {
            this.name = seller.getName();
            this.email = seller.getEmail();
            this.password = seller.getPassword();
            this.userType = UserType.SELLER;
        } else {
            this.name = null;
            this.email = null;
            this.password = null;
            this.userType = null;
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + this.userType.name()));
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email; // Using email as username.
    }
}
