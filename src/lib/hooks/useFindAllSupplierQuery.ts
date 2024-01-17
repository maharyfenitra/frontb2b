import { useGenericGraphqlQuery } from "@/lib";
import { FindAllSuppliersQuery } from "../queries/FindAllCustomersQuery";

export const useFindAllSuppliersQuery = () => {
  return useGenericGraphqlQuery<FindAllSuppliersQuery, TData>(
    new FindAllSuppliersQuery(),
    (data) => {
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        data: data?.data?.findAllSuppliers,
      };
    }
  );
};

type TypeSupplier = {
  id: string;
    name: string;
    description: string;
    adress: string;
    city: string;
    area: string;
    stat: string;
    nif: string;
    firstName: string;
    lastName: string;
    mail: string;
}

type TData = {
  isSuccess: boolean;
  isLoading: boolean;
  data:
    | TypeSupplier[]
    | undefined;
};
