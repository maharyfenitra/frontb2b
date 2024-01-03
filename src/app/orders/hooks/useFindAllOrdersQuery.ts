import { useGenericGraphqlQuery } from "@/lib";
import { Order } from "../types/orders";
import { FindAllOrdersQuery } from "../queries/FIndAllOrdersQuery";

export const useFindAllOrdersQuery = () => {
 
    return useGenericGraphqlQuery<FindAllOrdersQuery>(new FindAllOrdersQuery())
};

type Orders = {
    findAllOrders: Order[];
} 

