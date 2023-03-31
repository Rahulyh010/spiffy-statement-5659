import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const styles = {
  outerstyle: {
    width: "95%",
    height: "30vh",
    margin: "2rem auto",
    background: "white",
    display: "flex",
    flexDirection: "column",
  },
  head: {
    borderBottom: "1px solid #00a699",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.4rem 1rem",
  },
  spanStyle: {
    padding: "5px 10px",
    borderRadius: "50px",
    color: "white",
    background: "#00a699",
    cursor: "pointer",
  },
  typestyle: {
    color: "#00a699",
    fontSize: "18px",
    fontWeight: "500",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: "auto",
  },
  bottomdiv: {
    width: "77%",
    margin: "auto",
    textAlign: "left",
  },
  imgs: {
    width: "8%",
    margin: "auto",
  },
  pstyle: {
    color: "black",
    borderBottom: "1px solid #0001",
    marginBottom: "10px",
  },
};

const Slider = ({ data }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {data &&
        data.map(({ type, image, var1, var2, var3, var4 }, i) => {
          return (
            <SwiperSlide key={i + 1}>
              <div style={styles.outerstyle}>
                <div style={styles.head}>
                  <p style={styles.typestyle}>{type}</p>
                  <span style={styles.spanStyle}>Get Quotes</span>
                </div>

                <div style={styles.bottom}>
                  <img src={image} alt="food" style={styles.imgs} />
                  <div style={styles.bottomdiv}>
                    <p style={styles.pstyle}>{var1}</p>
                    <p style={styles.pstyle}>{var2}</p>
                    <p style={styles.pstyle}>{var3}</p>
                    <p style={styles.pstyle}>{var4}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
