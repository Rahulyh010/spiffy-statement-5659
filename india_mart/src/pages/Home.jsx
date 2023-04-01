import React from "react";
import Swiper from "../components/slider";
import TrendClass from "../components/trendclass";
import "../Styles/home.css";
import data from "../swiperdata.json";
import Navbar from "../components/navbar";
import Premiumbrands from "../components/Premiumbrands";
import { Center, Image } from "@chakra-ui/react";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div id="home" className="page">
        {/* Box Model -1 */}
        <div id="home-top">
          <h1>Tell us your requirement</h1>
          <p>DigiMART is here to help!</p>
          <button id="btn-varification">Get Verified Seller</button>
        </div>
        <div id="cat-header">Top Categories</div>
        {/* Box Model 2 */}
        <div className="home-mid">
          <div className="cat-box">
            <p className="cat-name">Food & Beverages</p>
            <div>
              <Swiper data={data.foodnbev} />
            </div>
          </div>
        </div>
        {/* Box Model 3 */}
        <div className="home-mid">
          <div className="cat-box">
            <p className="cat-name">Apparel, Garments and Clothings</p>
            <div>
              <Swiper data={data.apparelngarm} />
            </div>
          </div>
        </div>
        {/* Box Model 4 */}
        <div className="home-mid">
          <div className="cat-box">
            <p className="cat-name">
              Pharmaceutical Drug, Medicine, Medical Care & Consultation
            </p>
            <div>
              <Swiper data={data.pharmaceutics} />
            </div>
          </div>
        </div>

        {/* Box Model -5 */}
        <div className="home-mid">
          <div className="cat-box">
            <p className="cat-name">
              Industrial Plants & Machinery & Equipments
            </p>
            <div>
              <Swiper data={data.mechinaryAndequipments} />
            </div>
          </div>
        </div>

        <div className="view-all-cst">
          <button>View All Categories</button>
        </div>

        <div className="all-mixed-cst">
          <p className="amzcat-name">Trending Categories</p>
          <TrendClass data={data.trendingCategories} />

          <div>
            <p className="premium-brands">Premium Brands</p>
            <Premiumbrands data={data.premiumBrands} />
          </div>

          <Center>
            <Image
              className="yearhund"
              src="https://m.imimg.com/gifs/img/Founder_360X100.jpg"
              mb={5}
            />
          </Center>
        </div>

        <Center>
          <button className="app-open">
            <i className="fa-solid fa-lock-open" style={{ color: "white" }}></i>{" "}
            Open in App
          </button>
        </Center>
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Home;
