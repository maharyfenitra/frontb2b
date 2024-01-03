"use client";
import { useFindAllOrdersQuery } from "../orders/hooks/useFindAllOrdersQuery";
const Deliveries = () => {
  useFindAllOrdersQuery();
  return <div>Deliveries</div>;
};

export default Deliveries;
