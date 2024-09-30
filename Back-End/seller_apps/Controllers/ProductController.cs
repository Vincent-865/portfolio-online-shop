using Microsoft.EntityFrameworkCore;
using seller_apps.DatabaseConnections;
using seller_apps.DTOs;
using seller_apps.Functions;
using seller_apps.Models;
using Microsoft.AspNetCore.Mvc;

namespace seller_apps.Controllers
{
    [Route("/product")]
    [ApiController]
    public class ProductController(SQLServerConnection sqlServerConnection) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllProducts(){
            var products = await sqlServerConnection.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{productId}")]
        public async Task<IActionResult> GetProductById([FromRoute] string productId){
            var target = await sqlServerConnection.Products.FindAsync(productId);
            return Ok(target);
        }

        [HttpPost("{userId}")]
        public async Task<IActionResult> CreateProduct([FromBody] ProductDTO productDTO, [FromRoute] string userId){
            var newProduct = new Product()
            {
                product_id = GeneralFunctions.GetCustomUUID(8),
                user_id = userId,
                product_name = productDTO.product_name,
                product_price = (decimal) productDTO.product_price,
                product_description = productDTO.product_description,
                created_date = GeneralFunctions.GetCurrentDateTime(),
                modified_datetime = null
            };
            while(true){
                var otherProductWithSameId = await sqlServerConnection.Products.FirstOrDefaultAsync(data => data.product_id == newProduct.product_id);
                if(otherProductWithSameId == null){
                    break;
                } else{
                    newProduct.product_id = GeneralFunctions.GetCustomUUID(8);
                }
            }
            await sqlServerConnection.Products.AddAsync(newProduct);
            await sqlServerConnection.SaveChangesAsync();
            return Ok(newProduct);
        }

        [HttpPut]
        [Route("{productId}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] string productId, [FromBody] ProductDTO productDTO){
            var target = await sqlServerConnection.Products.FirstOrDefaultAsync(data => data.product_id == productId);

            if (target == null){
                return Ok("Not Found");
            }

            target.product_name = productDTO.product_name;
            target.product_price = (decimal) productDTO.product_price;
            target.product_description = productDTO.product_description;
            target.modified_datetime = GeneralFunctions.GetCurrentDateTime();

            await sqlServerConnection.SaveChangesAsync();
            return Ok(target);
        }

        [HttpDelete]
        [Route("{productId}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] string productId){
            var target = await sqlServerConnection.Products.FirstOrDefaultAsync(data => data.product_id == productId);

            if (target == null){
                return Ok("Not Found");
            }

            sqlServerConnection.Products.Remove(target);
            await sqlServerConnection.SaveChangesAsync();
            return Ok(target);
        }
    }
}