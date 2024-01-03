"use client";
import { useFindAllOrdersQuery } from "../orders/hooks/useFindAllOrdersQuery";

export default function Welcome() {
  console.log("Welcom useGenericGraphqlQuery")
  const {isLoading,data} = useFindAllOrdersQuery();
  
  return <div>{isLoading? "Itsloading" : JSON.stringify(data)}</div>;
}
