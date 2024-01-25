import { useGenericGraphqlQuery } from "@/lib";
import { FindOneSupplierQuery } from "../queries/FindOneSupplierQuery";
import { TVariableSupplier } from "@/lib";

export const useFindOneSupplierQuery = (id: string) => {
  return useGenericGraphqlQuery<FindOneSupplierQuery, TData>(
    new FindOneSupplierQuery(id),
    (data) => {
      
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        invalidate: data.refetch, 
        data: data?.data?.findOneSupplier,
      };
    }
  );
};

type TData = {
  isSuccess: boolean;
  isLoading: boolean;
  data: TVariableSupplier;
  invalidate: () => void;
};
