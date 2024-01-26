import { useGenericGraphqlQuery } from "@/lib";
import { FindOneCustomerQuery } from "../queries/FindOneCustomerQuery";
import { TVariableCustomer } from "@/lib";

export const useFindOneCustomerQuery = (id: string) => {
  return useGenericGraphqlQuery<FindOneCustomerQuery, TData>(
    new FindOneCustomerQuery(id),
    (data) => {
      
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        invalidate: data.refetch, 
        data: data?.data?.findOneCustomer,
      };
    }
  );
};

type TData = {
  isSuccess: boolean;
  isLoading: boolean;
  data: TVariableCustomer;
  invalidate: () => void;
};
