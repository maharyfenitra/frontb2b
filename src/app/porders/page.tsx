"use client";
import { useFindAllOrdersQuery } from "./hooks/useFindAllOrdersQuery";
import { useFindOrderQuery } from "./hooks/useFindOrderQuery";
import { Header } from "@/lib";
import { TopMenu } from "@/lib";

const POrders = () => {
    useFindAllOrdersQuery()
    useFindOrderQuery("65802b13ac7bbf3f34182337")
  return <>
    <Header title={"Purchase Order"}/>
    <TopMenu/>
  </>;
};

export default POrders;
