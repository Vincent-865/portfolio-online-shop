package portfolio.online.shop.buyer_apps.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import portfolio.online.shop.buyer_apps.Models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, String>{}