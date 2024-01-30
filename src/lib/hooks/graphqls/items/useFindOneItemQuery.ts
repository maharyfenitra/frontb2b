import { useGenericGraphqlQuery } from "@/lib";
import { FindOneItemQuery } from "../../../queries/FindOneItemQuery";
import { TVariableItem } from "@/lib";

export const useFindOneItemQuery = (id: string) => {
  return useGenericGraphqlQuery<FindOneItemQuery, TData>(
    new FindOneItemQuery(id),
    (data) => {
      
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        invalidate: data.refetch, 
        data: data?.data?.findOneItem,
      };
    }
  );
};

type TData = {
  isSuccess: boolean;
  isLoading: boolean;
  data: TVariableItem;
  invalidate: () => void;
};
