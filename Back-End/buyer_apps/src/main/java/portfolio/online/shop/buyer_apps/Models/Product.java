package portfolio.online.shop.buyer_apps.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="Products")
@Entity
public class Product {
    @Id
    @Column(name="product_id")
    private String product_id;

    @Column(name="user_id")
    private String user_id;

    @Column(name="product_name")
    private String product_name;

    @Column(name="product_price")
    private Double product_price;

    @Column(name="product_description")
    private String product_description;

    @Column(name="created_date")
    private String created_date;

    @Column(name="modified_datetime")
    private String modified_datetime;
}
