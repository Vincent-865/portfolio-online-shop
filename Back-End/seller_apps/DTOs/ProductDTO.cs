using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace seller_apps.DTOs
{
    public class ProductDTO
    {
        public string product_name {get; set;} = String.Empty;
        public double product_price {get; set;}
        public string product_description {get; set;} = String.Empty;
    }
}