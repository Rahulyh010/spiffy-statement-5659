import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { ProductCard } from '../components/productCard'
import { SideBarProd } from '../components/SideBarProd'
import "../Styles/productpage.css"

export const ProductsPage = () => {

    const [data,setdata]=useState([])

    const getdata=()=>{
        axios.get("http://localhost:8080/admin",{
            headers:{
                Authorization:"rahul1234"
            }
        })
        .then((res)=>{
          //  console.log(res.data)
            setdata(res.data)
        })
        .catch((res)=>{
            console.log(res)
        })
    }

    useEffect(()=>{
        getdata()
    },[])

  return (
    <div className='main-prod-page'>
        <Navbar/>
<SideBarProd/>

<div className="prod-page">

{data.map((e)=>{
            return (<ProductCard key={e._id}  {...e}/>)
        })}
</div>

    </div>
  )
}
