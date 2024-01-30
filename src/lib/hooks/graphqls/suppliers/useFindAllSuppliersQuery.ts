import { useGenericGraphqlQuery } from "@/lib";
import { FindAllSuppliersQuery } from "../../../queries/FindAllSuppliersQuery";

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

export type TypeSupplier = {
  id?: string;
  firstName: string;
  lastName: string;
  name: string;
  phoneNumber: string;
  mail: string;
  adress: string;
  area: string;
  city: string;
  description: string;
  stat: string;
  nif: string;
  contactMail: string;
  contactPhoneNumber: string;
  contactPost: string;
}

type TData = {
  isSuccess: boolean;
  isLoading: boolean;
  data:
    | TypeSupplier[]
    | undefined;
};
