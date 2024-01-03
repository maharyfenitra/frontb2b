import { useGenericGraphqlQuery } from "@/lib";
import { FindOrderQuery } from "../queries/FindOrderQuery";

export const useFindOrderQuery = (id: string) => {
  return useGenericGraphqlQuery<FindOrderQuery>(
    new FindOrderQuery(id)
  );
};
