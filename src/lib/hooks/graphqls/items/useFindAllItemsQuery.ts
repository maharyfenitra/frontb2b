import { useGenericGraphqlQuery } from "@/lib";
import { FindAllItemsQuery } from "../../../queries/FindAllItemsQuery";

export const useFindAllItemsQuery = () => {
  return useGenericGraphqlQuery<FindAllItemsQuery, TData>(
    new FindAllItemsQuery(),
    (data) => {
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        data: data?.data?.findAllitems,
      };
    }
  );
};

export type TData = {
  isSuccess: boolean;
  isLoading: boolean;
  data:
    | {
        id?: string;
        label: string;
        description?: string;
      }[]
    | undefined;
};
