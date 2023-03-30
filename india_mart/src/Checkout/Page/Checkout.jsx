import { Stack } from "@chakra-ui/react";
import React from "react";
import CheckoutDetails from "../Components/CheckoutDetails";

const Checkout = () => {
  return (
    <>
      <Stack direction={["column", "column", "row"]}>
        <CheckoutDetails />
      </Stack>
    </>
  );
};

export default Checkout;
