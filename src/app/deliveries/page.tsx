"use client";
import { useFindAllOrdersQuery } from "../porders/hooks/useFindAllOrdersQuery";
const Deliveries = () => {
  useFindAllOrdersQuery();
  return <div>Deliveries</div>;
};

export default Deliveries;
