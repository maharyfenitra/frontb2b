import { useFetch } from "./useFetch";
import { useQuery } from "@tanstack/react-query";
import { GraphqlModelQuery } from "../types";

export const useGenericGraphqlQuery = <T extends GraphqlModelQuery>(graphqlQuery: T) => {
  const { fetchData } = useFetch(graphqlQuery.query);
  const query = useQuery({
    queryKey: [graphqlQuery.cacheKey],
    queryFn: () =>
      fetchData(graphqlQuery?.variables)
        .then((data) => data?.data)
        .catch((error) => console.error(error.message)),
  });

  return { ...query, data: query.data };
};
