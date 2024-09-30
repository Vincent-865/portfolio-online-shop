package portfolio.online.shop.buyer_apps.Keys;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class CartPrimaryKey implements Serializable{
    private String product_id;
    private String user_id;
}
