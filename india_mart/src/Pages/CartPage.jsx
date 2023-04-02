import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CartProductCard } from '../components/CartProductCard';
import "../Styles/cartpage.css"
import { CartLoading } from './cartLoding';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

export const CartPage = () => {

  const [data,setData]=useState([]);
  const [total,setTotal]=useState(0)
const [loading,setLoading]=useState(true)

const getData=()=>{
  axios.get(`https://cooperative-bass-toga.cyclic.app/cart`,{
    headers:{
      Authorization:`${localStorage.getItem("token")}`
    }
  })
  .then((res)=>{
    console.log(res)
    console.log(localStorage.getItem("token"))
    setData(res.data)
    let n=0
  res.data.map((e)=>{
    
     n=n+e.price;
  })
  setTotal(n)

setLoading(false)
  })
  .catch((err)=>{
    console.log(err.response.data.err)
    setLoading(true)
  })
}

  useEffect(()=>{
  getData()

  

  console.log(total)


  },[total])
    

  return loading ? <div> <div style={{display:"flex",alignItems:"center",backgroundColor:"orange"}} ><img src="https://w7.pngwing.com/pngs/821/338/png-transparent-warning-sign-computer-icons-warning-icon-angle-triangle-warning-sign-thumbnail.png" alt="" width="5%" />
   <h1>You have Not signedUp ,If you already have a account please login</h1></div>  <CartLoading/></div>  : (
    <div id="cart-main1" >
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
<Link to="/checkout"> <button id="cart-btn1"> <span><i class="icons fas fa-cart-shopping"></i> </span> Checkout</button></Link>
   
    </div>
  )
}
