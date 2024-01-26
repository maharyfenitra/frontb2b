import { useGenericGraphqlQuery } from "@/lib";
import { FindOneSupplierQuery } from "../queries/FindOneSupplierQuery";
import { TVariableSupplier } from "@/lib";

export const useFindOneSupplierQuery = (id: string) => {
  const getData = (data: any) => {
    return {
      isSuccess: data.isSuccess,
      isLoading: data.isLoading,
      invalidate: data.refetch,
      data: data?.data?.findOneSupplier,
    };
  };
  return useGenericGraphqlQuery<FindOneSupplierQuery, TData>(
    new FindOneSupplierQuery(id),
    getData
  );
};

type TData = {
  isSuccess: boolean;
  isLoading: boolean;
  data: TVariableSupplier;
  invalidate: () => void;
};
