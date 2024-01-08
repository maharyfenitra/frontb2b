import { useGenericGraphqlQuery } from "@/lib";
import { Order } from "../types/orders";
import { FindAllOrdersQuery } from "../queries/FIndAllOrdersQuery";

export const useFindAllOrdersQuery = () => {
  return useGenericGraphqlQuery<FindAllOrdersQuery, any>(
    new FindAllOrdersQuery(),
    (data) => null
  );
};

type Orders = {
  findAllOrders: Order[];
};
