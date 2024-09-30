package portfolio.online.shop.buyer_apps.Models;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.Data;
import portfolio.online.shop.buyer_apps.DTOs.CartDTO;
import portfolio.online.shop.buyer_apps.Keys.CartPrimaryKey;

@Data
@IdClass( CartPrimaryKey.class )
@Table(name="Carts")
@Entity
public class Cart {
    @Id
    @Column(name="product_id")
    private String product_id;

    @Id
    @Column(name="user_id")
    private String user_id;

    @Column(name="order_amount")
    private Integer order_amount;

    @Column(name="created_date")
    private String created_date;

    @Column(name="modified_datetime")
    private String modified_datetime;

    @Autowired
    private static ObjectMapper objectMapper = new ObjectMapper();

    public static Cart convertDtoToObject(CartDTO cartDTO){
        return objectMapper.convertValue(cartDTO, Cart.class);
    }

    public static CartDTO convertObjectToDTO(Cart cart){
        return objectMapper.convertValue(cart, CartDTO.class);
    }
}
