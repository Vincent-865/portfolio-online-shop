package portfolio.online.shop.buyer_apps.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="Users")
@Entity
public class User {
    @Id
    @Column(name="user_id")
    private String user_id;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @Column(name="created_date")
    private String created_date;

    @Column(name="modified_datetime")
    private String modified_datetime;

    @Column(name="is_blacklisted")
    private String is_blacklisted;

    @Column(name="user_type")
    private String user_type;
}