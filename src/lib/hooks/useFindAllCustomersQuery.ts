import { useGenericGraphqlQuery } from "@/lib";
import { FindAllCustomersQuery } from "../queries/FindAllCustomersQuery";

export const useFindAllCustomersQuery = () => {
  return useGenericGraphqlQuery<FindAllCustomersQuery, TData>(
    new FindAllCustomersQuery(),
    (data) => {
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        data: data?.data?.findAllSuppliers,
      };
    }
  );
};

type TypeCustomer = {
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
    | TypeCustomer[]
    | undefined;
};
