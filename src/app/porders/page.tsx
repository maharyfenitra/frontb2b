"use client";
import { useFindAllOrdersQuery } from "./hooks/useFindAllOrdersQuery";
import { useFindOrderQuery } from "./hooks/useFindOrderQuery";

const POrders = () => {
    useFindAllOrdersQuery()
    useFindOrderQuery("65802b13ac7bbf3f34182337")
  return <>
    
  </>;
};

export default POrders;
