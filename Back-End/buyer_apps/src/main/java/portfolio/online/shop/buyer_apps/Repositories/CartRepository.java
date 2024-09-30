package portfolio.online.shop.buyer_apps.Repositories;

import org.springframework.stereotype.Repository;

import portfolio.online.shop.buyer_apps.Keys.CartPrimaryKey;
import portfolio.online.shop.buyer_apps.Models.Cart;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface CartRepository extends JpaRepository<Cart, CartPrimaryKey>{
    public static final String FIND_CART_BY_USER_ID = "SELECT c FROM Cart c WHERE c.user_id = :user_id";
    @Query(value=FIND_CART_BY_USER_ID)
    public List<Cart> findCartByUser(@Param("user_id") String userId);

    public static final String FIND_CART_BY_USER_ID_AND_PRODUCT_ID = "SELECT c FROM Cart c WHERE c.user_id = :user_id AND c.product_id = :product_id";
    @Query(value=FIND_CART_BY_USER_ID_AND_PRODUCT_ID)
    public Cart findCartByUserAndProduct(@Param("user_id") String userId, @Param("product_id") String productId);
}