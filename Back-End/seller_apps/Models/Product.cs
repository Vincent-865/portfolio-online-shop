using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using seller_apps.DTOs;

namespace seller_apps.Models
{
    [Table("Products")]
    public class Product
    {
        [Key]
        public string product_id {get; set;} = String.Empty;
        public string user_id {get; set;} = String.Empty;
        public string product_name {get; set;} = String.Empty;
        public decimal product_price {get; set;}
        public string? product_description {get; set;}
        public DateTime created_date {get; set;}
        public DateTime? modified_datetime {get; set;}

        // public static Product ConvertDtoToObject(ProductDTO productDTO){
        //     return new()
        //     {
        //         product_name = productDTO.product_name,
        //         product_price = productDTO.product_price,
        //         product_description = productDTO.product_description
        //     };
        // }
    }
}