'use client'
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const [product, setProduct] = useState<Product>();
  const pathParams = usePathname();

  const getProduct = async () => {
    try {
      const productResponse = await axios.get(`http://localhost:5101${pathParams}`);
      setProduct(productResponse.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  function viewData(){
    if(product != null){
      return (
        <div>
          <p>product_id: {product.product_id}</p>
          <p>user_id: {product.user_id}</p>
          <p>product_name: {product.product_name}</p>
          <p>product_price: {product.product_price}</p>
          <p>product_description: {product.product_description}</p>
          <p>created_date: {product.created_date}</p>
          <p>modified_datetime: {product.modified_datetime}</p>
          <hr />
        </div>
      )
    } else{
      return (
        <div>
          <p>Error...</p>
        </div>
      )
    }
  }

  return (
    <div className={'text-black'}>
        {viewData()}
    </div>
  );
}
