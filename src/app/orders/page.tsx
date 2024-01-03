"use client";
import { useFindAllOrdersQuery } from "./hooks/useFindAllOrdersQuery";
import { useFindOrderQuery } from "./hooks/useFindOrderQuery";
import  { TopMenu} from "@/lib"

const Orders = () => {
    useFindAllOrdersQuery()
    useFindOrderQuery("65802b13ac7bbf3f34182337")
  return <>
    
  </>;
};

export default Orders;
