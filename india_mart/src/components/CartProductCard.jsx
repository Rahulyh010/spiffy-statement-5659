import React, { useEffect, useState } from 'react'
import "../Styles/cartcard.css"
import axios from 'axios';

export const CartProductCard = ({_id,title,image,reviews,description,discount,price}) => {

 

    const text="Bagrry's Crunchy Muesli With Almonds, Raisins & Honey(Oat Clusters) - 500gm"
    const firt_t=title.trim().split(" ");
    const first= firt_t[0];
     
  
     
  
    const [display,setDisplay]=useState(false)
    const [display1,setDisplay1]=useState(false)
    const [render,setRender]=useState(false)
   
  
  const style={
    display: display ? "block" : "none",
    cursior:"pointer"
  }
  
  const style1={
    display: display1 ? "block" : "none",
    cursior:"pointer"
  }
  
    const handlemoreText=()=>{
          firt_t.shift();
           setDisplay(!display)
           //setDisplay1(!display1)
    }
    const handlemoreText1=()=>{
     // firt_t.shift();
       //setDisplay(!display)
       setDisplay1(!display1)
  }
  
  const handleDelete=(_id)=>{
    setRender(!render)
    axios.delete(`https://cooperative-bass-toga.cyclic.app/cart/delete/${_id}`)
    .then((res)=>{
      console.log(res)
      
      
     
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
console.log(render)
  },[render])

  return (
    <div className='product-card'>
         <img width="100%" src={image} alt="" />
         <p>  <span id="p-title"> {first} </span><span id="points" onClick={handlemoreText} >...more</span> <span id="more-text" style={style} >{firt_t.join(" ")}</span></p>
         <p>MRP:{`$ ${price}`} </p>
         <p>Rating <span><i class="fa fa-star" aria-hidden="true"></i></span>:{reviews.rate}</p>
         <p>Description:<span id="points" onClick={handlemoreText1} > ...Know More</span><span style={style1}>{description}</span> </p>
         <button id="p-btn1"> <span><i class="icons fas fa-cart-shopping"></i> </span> Added To Cart</button>
         <button id="p-btn2" onClick={()=>handleDelete(_id)} >Remove <span><i class="fa fa-external-link-square" aria-hidden="true"></i></span></button>
    </div>
  )
}
