import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";

const Premiumbrands = ({ data }) => {
  console.log(data);
  return (
    <div className="premiums">
      {data &&
        data.map((el, i) => {
          return (
            <Center>
              <Box>
                <Image key={i + 1} src={el.image} width={200} />
              </Box>
            </Center>
          );
        })}
    </div>
  );
};

export default Premiumbrands;
