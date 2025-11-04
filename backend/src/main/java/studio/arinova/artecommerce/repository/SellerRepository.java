package studio.arinova.artecommerce.repository;

import studio.arinova.artecommerce.model.Seller;

public interface SellerRepository {

    public Seller findByEmail(String email);

}
