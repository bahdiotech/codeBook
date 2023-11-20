import React from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hook";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";

export const OrderPage = () => {
  useTitle("Order Summary")
    const {state} = useLocation()
  return (
    <main>
        {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
}
