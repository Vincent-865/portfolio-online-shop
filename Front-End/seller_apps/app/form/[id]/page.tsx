'use client'
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateForm() {
    const router = useRouter();
    const pathParam = usePathname();
    const [product, setProduct] = useState<Product>();
    const [productName, setProductName] = useState<string>();
    const [productPrice, setProductPrice] = useState<string>();
    const [productDescription, setProductDescription] = useState<string>();

    useEffect(()=>{
        getProduct();
    });

    const getProduct = async () => {
        try {
            const productResponse = await axios.get(`http://localhost:5101/product/${pathParam.substring(6, pathParam.length)}`);
            setProduct(productResponse.data);
            setProductName(product?.product_name);
            setProductPrice(product?.product_price.toString());
            setProductDescription(product?.product_description);
        } catch (error) {
            console.log("Error: ", error, pathParam.substring(6, pathParam.length));
        }
    }

    function handleSubmit(event:any){
      event.preventDefault();
      const newData : Product = {
        product_id: '',
        user_id: '',
        product_name: event.target.product_name.value,
        product_price: event.target.product_price.value,
        product_description: event.target.product_description.value,
        created_date: '',
        modified_datetime: '',
      }
      
      axios.put(`http://localhost:5101/product/${event.target.product_id.value}`, newData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => console.log("response: ", response))
      .catch(err => console.log("err: ", err))
  
      router.push(`/product/${event.target.product_id.value}`);
    }
    
    const check = (event:any) => {
        setProductName(event.target.value);
    }
  
    return (
      <div style={{color:"black"}}>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="product_id" value={product?.product_id}/>
          product_name: <input type="text" name="product_name" defaultValue={productName} onChange={check}/><br />
          product_price: <input type="text" name="product_price" defaultValue={productPrice} onChange={e => setProductPrice(e.target.value)}/><br />
          product_description: <input type="text" name="product_description" defaultValue={productDescription} onChange={e => setProductDescription(e.target.value)}/><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  