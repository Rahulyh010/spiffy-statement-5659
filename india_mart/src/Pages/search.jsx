import { Box } from "@chakra-ui/react";
import "../Styles/Search.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Center } from "@chakra-ui/react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const getData = async () => {
    const res = await fetch(
      `https://skinnco-server.onrender.com/api/food?type=${query}`
    );
    let mydata = await res.json();
    setData(mydata);
  };

  return (
    <div className="Search">
      <Box className="seachPage">
        <i onClick={backToHome} className="fa-solid fa-arrow-left"></i>
        <input
          placeholder="Search for A Product/Service"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <i onClick={getData} className="icons fa fa-search"></i>
      </Box>
      <div className="search-result">
        {data &&
          data.map(({ filename, title, price, rating, description }) => {
            return (
              <div className="product-card">
                <img width="100%" src={filename} alt={title} />
                <p style={{ fontWeight: "600" }}>
                  <span id="p-title">Name : {title}</span>
                </p>
                <p>MRP:{`$ ${price}`} </p>
                <p>
                  Rating{" "}
                  <span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  :{rating}
                </p>
                <p>
                  Description:
                  <span>{description}</span>{" "}
                </p>
                <button id="p-btn1">
                  {" "}
                  <span>
                    <i className="icons fas fa-cart-shopping"></i>{" "}
                  </span>{" "}
                  Add To Cart
                </button>
                <button id="p-btn2">
                  Buy{" "}
                  <span>
                    <i
                      className="fa fa-external-link-square"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
