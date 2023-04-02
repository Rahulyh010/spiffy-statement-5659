import React from "react";
import { Center } from "@chakra-ui/react";

const TrendClass = ({ data }) => {
  return (
    <div id="trending">
      {data &&
        data.map((el, i) => {
          return (
            <Center key={i + 1 * 8}>
              <div key={i + 1} className="trend-class">
                <img src={el.image} alt={el.name} />
                <p>{el.name}</p>
                <button>{el.text}</button>
              </div>
            </Center>
          );
        })}
    </div>
  );
};

export default TrendClass;
