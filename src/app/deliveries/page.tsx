"use client";
import { Header } from "@/lib";
import { useFindAllOrdersQuery } from "../porders/hooks/useFindAllOrdersQuery";
const Deliveries = () => {
  useFindAllOrdersQuery();
  return <div><Header title="Deliveries"/></div>;
};

export default Deliveries;
