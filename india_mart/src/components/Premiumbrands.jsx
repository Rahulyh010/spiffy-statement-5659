import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";

const Premiumbrands = ({ data }) => {
  return (
    <div className="premiums">
      {data &&
        data.map((el, i) => {
          return (
            <Center key={i + 1}>
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
