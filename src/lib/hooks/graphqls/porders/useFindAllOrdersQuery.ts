import { useGenericGraphqlQuery } from "@/lib";
import { FindAllOrdersQuery } from "../../../queries/FindAllAllOrdersQuery";

export const useFindAllOrdersQuery = () => {
  return useGenericGraphqlQuery<FindAllOrdersQuery, TDataOrder>(
    new FindAllOrdersQuery(),
    (data) => {
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        data: data?.data?.findAllOrders,
      };
    }
  );
};

export type TDataOrder = {
  isSuccess: boolean;
  isLoading: boolean;
  data:
    | {
        id?: string;
        supplierId: string;
        reference: string;
        description: string;
      }[]
    | undefined;
};
