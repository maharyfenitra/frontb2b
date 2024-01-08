import { useGenericGraphqlQuery } from "@/lib";
import { FindOrderQuery } from "../queries/FindOrderQuery";

export const useFindOrderQuery = (id: string) => {
  return useGenericGraphqlQuery<FindOrderQuery, any>(
    new FindOrderQuery(id), (data) => null
  );
};
