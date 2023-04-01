import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CartProductCard } from '../components/CartProductCard';
import "../Styles/cartpage.css"
import { CartLoading } from './cartLoding';
import Navbar from '../components/navbar';

export const CartPage = () => {

  const [data,setData]=useState([]);
  const [total,setTotal]=useState(0)
const [loading,setLoading]=useState(true)

const getData=()=>{
  axios.get(`http://localhost:8080/cart`,{
    headers:{
      Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI2YjdiMzBmZjY2MTE4MDM3MDg4Y2UiLCJpYXQiOjE2ODAyNTkwMDl9.FsT4LsCZ1LoULmQ3jzHocKLS09B-2m8HVOJXGhk9ZhE"
    }
  })
  .then((res)=>{
    console.log(res)
    setData(res.data)
    let n=0
  res.data.map((e)=>{
    
     n=n+e.price;
  })
  setTotal(n)

setLoading(false)
  })
  .catch((err)=>{
    console.log(err)
    setLoading(true)
  })
}

  useEffect(()=>{
  getData()

  

  console.log(total)


  },[total])
    

  return loading ? <CartLoading/> : (
    <div>
      <Navbar/>

<div id="know-cart">
  <h2>Know More About Cart Page <span>....</span> </h2>
</div>

      <h1 id="cart-h1"> Items Added To Cart: <span>{data.length}</span> </h1>
      <h1 id="cart-h2" >Total Amount To be Paid: <span>{total}</span> </h1>
    <div className='cart-main' >

{
  data.map((e)=>{
    return (<CartProductCard key={e._id} {...e}/>)
  })
}


    </div>


    </div>
  )
}
