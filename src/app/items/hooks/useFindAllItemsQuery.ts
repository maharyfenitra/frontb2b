import { useGenericGraphqlQuery } from "@/lib";
import { FindAllItemssQuery } from "../queries/FindAllItemsQuery";

export const useFindAllItemsQuery = () => {
  return useGenericGraphqlQuery<FindAllItemssQuery, TData>(
    new FindAllItemssQuery(),
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
        id: string;
        label: string;
        description: string;
      }[]
    | undefined;
};
