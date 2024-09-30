'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const productResponse = await axios.get('http://localhost:5101/product');
      setProducts(productResponse.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const deleteProduct = async (id:string) => {
    try {
      await axios.delete(`http://localhost:5101/product/${id}`);
      setProducts(products.filter((product) => product.product_id != id));
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  function viewData(){
    return products.map((product) => {
      return (
        <div key={product.product_id.toString()}>
          <p>product_id: {product.product_id}</p>
          <p>user_id: {product.user_id}</p>
          <p>product_name: {product.product_name}</p>
          <p>product_price: {product.product_price}</p>
          <p>created_date: {product.created_date}</p>
          <p>modified_datetime: {product.modified_datetime}</p>
          <hr />
          <Link href={`/product/${product.product_id}`}>Detail</Link>
          <Link href={`/form/${product.product_id}`}>Update</Link>
          <button onClick={() => {deleteProduct(product.product_id)}}>Delete</button>
        </div>
      )
    })
  }

  return (
    <div className={'text-black'}>
        {viewData()}
        <Link href={`/form`}>Create New</Link>
    </div>
  );
}
