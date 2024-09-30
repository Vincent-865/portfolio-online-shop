'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IProduct {
  created_date: string,
  modified_datetime: string,
  product_description: string,
  product_id: string,
  product_name: string,
  product_price: number,
  user_id: string
}

export default function Portfolio() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const router = useRouter();

  const getProducts = async () => {
    try {
      const productResponse = await axios.get('http://localhost:5101/product');
      setProducts(productResponse.data);
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
          <p>created_date: {product.created_date}</p>
          <p>modified_datetime: {product.modified_datetime}</p>
          <p>product_description: {product.product_description}</p>
          <p>product_id: {product.product_id}</p>
          <p>product_name: {product.product_name}</p>
          <p>product_price: {product.product_price}</p>
          <p>user_id: {product.user_id}</p>
          <hr />
        </div>
      )
    })
  }

  async function handleSubmit(event:any){
    event.preventDefault();
    const newData : IProduct = {
      created_date: '',
      modified_datetime: '',
      product_description: event.target.product_description.value,
      product_id: '',
      product_name: event.target.product_name.value,
      product_price: event.target.product_price.value,
      user_id: ''
    }
    
    console.log("newData: ", newData)
    axios.post(`http://localhost:5101/product/TEST`, newData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log("response: ", response))
    .catch(err => console.log("err: ", err))

    // setProducts([...products, newData]);
    await getProducts();
    router.refresh(); //only works for component server-render type
  }

  function handleDelete(event:any){
    event.preventDefault();
    axios.delete(`http://localhost:5101/product/` + event.target.product_id.value)
    .then(response => console.log("response: ", response))
    .catch(err => console.log("err: ", err))

    setProducts(products.filter((product) => product.product_id != event.target.product_id.value));
  }
  
  return (
    <div style={{color:"black"}}>
      <form onSubmit={handleSubmit}>
        product_description: <input type="text" name="product_description"/><br />
        product_name: <input type="text" name="product_name"/><br />
        product_price: <input type="text" name="product_price"/><br />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleDelete}>
        product_id: <input type="text" name="product_id"/><br />
        <button type="submit">Submit</button>
      </form>
      {viewData()}
    </div>
  );
}
