import { useGenericGraphqlQuery } from "@/lib";
import { FindOnePOrderQuery } from "@/lib/queries/FindOnePOrderQuery";

export const useFinOnePOrderQuery = (id: string) => {
  return useGenericGraphqlQuery<FindOnePOrderQuery, TDataOneOrder>(
    new FindOnePOrderQuery(id),
    (data) => {
      return {
        isSuccess: data.isSuccess,
        isLoading: data.isLoading,
        data: data?.data?.findOneOrder,
      };
    }
  );
};

export type TDataOneOrder = {
  isSuccess: boolean;
  isLoading: boolean;
  data:
    | {
        id?: string;
        supplierId: string;
        reference: string;
        description: string;
        orderDetailsEntity: {
          id?: string;
          itemId: string;
          label: string;
          qty: number;
          price: number;
        }[];
      }
    | undefined;
};
