package portfolio.online.shop.buyer_apps.Controllers;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;
import portfolio.online.shop.buyer_apps.DTOs.CartDTO;
import portfolio.online.shop.buyer_apps.Keys.CartPrimaryKey;
import portfolio.online.shop.buyer_apps.Models.Cart;
import portfolio.online.shop.buyer_apps.Repositories.CartRepository;
import portfolio.online.shop.buyer_apps.Repositories.ProductRepository;
import portfolio.online.shop.buyer_apps.Repositories.UserRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
@Data
@Service
public class CartController {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/{userId}")
    public List<CartDTO> findAllCarts(@PathVariable String userId){
        List<Cart> carts = cartRepository.findCartByUser(userId);
        return carts.stream().map(cart -> Cart.convertObjectToDTO(cart)).collect(Collectors.toList());
    }

    @PostMapping("/")
    public String createCart(@RequestBody CartDTO cartDTO){
        Cart newCart = Cart.convertDtoToObject(cartDTO);

        try {
            userRepository.findById(newCart.getUser_id()).get();
        } catch (Exception e) {
            System.out.println(e.toString());
            return "USER NOT FOUND";
        }

        try {
            productRepository.findById(newCart.getProduct_id()).get();
        } catch (Exception e) {
            System.out.println(e.toString());
            return "PRODUCT NOT FOUND";
        }

        Cart oldCart = cartRepository.findCartByUserAndProduct(newCart.getUser_id(), newCart.getProduct_id());
        if(oldCart != null){
            return "ALREADY EXIST!";
        }

        newCart.setCreated_date(LocalDateTime.now().toString());
        newCart.setModified_datetime(null);
        cartRepository.save(newCart);
        return "INSERT SUCCESS";
    }

    @PutMapping("/")
    public String update(@RequestBody CartDTO cartDTO){
        Cart target = Cart.convertDtoToObject(cartDTO);

        CartPrimaryKey cartPrimaryKey = new CartPrimaryKey();
        cartPrimaryKey.setProduct_id(target.getProduct_id());
        cartPrimaryKey.setUser_id(target.getUser_id());
        Cart oldCart = cartRepository.findById(cartPrimaryKey).get();

        target.setCreated_date(oldCart.getCreated_date());
        target.setModified_datetime(LocalDateTime.now().toString());
        cartRepository.save(target);
        return "UPDATE SUCCESS";
    }

    @DeleteMapping("/{userId}/{productId}")
    public String delete(@PathVariable String userId, @PathVariable String productId){
        CartPrimaryKey cartPrimaryKey = new CartPrimaryKey();
        cartPrimaryKey.setProduct_id(productId);
        cartPrimaryKey.setUser_id(userId);
        cartRepository.deleteById(cartPrimaryKey);
        return "DELETE SUCCESS";
    }
}
