import React from 'react'
import UploadImage from '../Component/UploadImage';
import styles from '../Css/AddProduct.module.css'
import axios from 'axios';
import Sidebar from "../Component/Sidebar"

const AddProduct = () => {
  const [productdata, setData] = React.useState({
    id:Date.now(),
    image: "",
    title: "",
    price: "",
    reviews: {
      rate: "",
      count: "",
    },
    discount: "",
    description: "",
  });

  const onInputChange = (e) => {
    let a = e.target.value;
    let b = e.target.name;
    if (e.target.type == "number") {
      a = +a;
    }

    if (b == "reviews") {
      let r = {
        rate: a,
        count: 0,
      };
      setData({ ...productdata, [b]: r });
      return;
    }
    setData({ ...productdata, [b]: a });
  };

  const handleAdd = (event) =>{
    event.preventDefault()
    if (
      productdata.title &&
      productdata.image &&
      productdata.reviews.rate &&
      productdata.price
    ) {
      try {
        axios
        .post(`https://cooperative-bass-toga.cyclic.app/admin/addProduct`,productdata,{
          headers:{
            "Authorization":`${localStorage.getItem("adminID")}`
          }
        });
      } catch (err) {
        alert("Facing some issues please try again");
        return;
      }

      alert("Product Added Successfully");
      window.location.reload();
    } else {
      alert("Fill the data properly");
    }
  }

  return (
    <div>
      <Sidebar/>
      <div className={styles.container}>
        <div className={styles.blurr}>
          <center>
            <p
              // size={{
              //   base: "md",
              //   sm: "lg",
              //   md: "lg",
              //   lg: "lg",
              //   xl: "lg",
              //   "2xl": "xl",
              // }}
              style={{ marginTop: "25px", marginBottom: "20px" }}
            >
              ADD NEW PRODUCT
            </p>
          </center>
          <div className={styles.table}>
            <div className={styles.form}>
              <form onSubmit={handleAdd}>
                <label>Title</label><br/>
                <input name="title" value={productdata.title} type="text" onChange={onInputChange}/><br/>
                <label>Price</label><br/>
                <input name="price" value={productdata.price} type="number" onChange={onInputChange}/><br/>
                <label>Discount</label><br/>
                <input name="discount" value={productdata.discount} type="number" onChange={onInputChange}/><br/>
                <label>Reviews</label><br/>
                <input name="reviews" value={productdata.reviews.rate} type="text" onChange={onInputChange}/><br/>
                <label>Product Description</label><br/>
                <textarea name="description" value={productdata.description} type="text" onChange={onInputChange}/><br/><br/>
                <input type="submit" className={styles.add} value={"Add Product"}/>
              </form>
            </div>
            <div>
              <UploadImage product={productdata}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct