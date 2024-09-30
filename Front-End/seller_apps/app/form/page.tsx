'use client'
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const router = useRouter();

  function handleSubmit(event:any){
    event.preventDefault();
    const newData : Product = {
      product_id: '',
      user_id: event.target.user_id.value,
      product_name: event.target.product_name.value,
      product_price: event.target.product_price.value,
      product_description: event.target.product_description.value,
      created_date: '',
      modified_datetime: '',
    }
    
    axios.post(`http://localhost:5101/product/${event.target.user_id.value}`, newData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log("response: ", response))
    .catch(err => console.log("err: ", err))

    router.push('/product');
  }

  return (
    <div style={{color:"black"}}>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="user_id" value="TEST"/>
        product_name: <input type="text" name="product_name"/><br />
        product_price: <input type="text" name="product_price"/><br />
        product_description: <input type="text" name="product_description"/><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
