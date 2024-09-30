package portfolio.online.shop.buyer_apps.DTOs;

public record CartDTO(
    String product_id,
    String user_id,
    Integer order_amount,
    String created_date,
    String modified_datetime
) {}

/*
{
    "product_id": "",
    "user_id": "",
    "order_amount": ,
    "created_date": "",
    "modified_datetime": ""
}
*/