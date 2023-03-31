import React from "react";

const TrendClass = ({ data }) => {
  return (
    <div id="trending">
      {data &&
        data.map((el) => {
          return (
            <div className="trend-class">
              <img src={el.image} alt={el.name} />
              <p>{el.name}</p>
              <button>{el.text}</button>
            </div>
          );
        })}
    </div>
  );
};

export default TrendClass;
