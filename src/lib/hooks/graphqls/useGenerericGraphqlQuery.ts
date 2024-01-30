import { useFetch } from "../useFetch";
import { useQuery } from "@tanstack/react-query";
import { GraphqlModelQuery } from "../../types";
import { UseQueryResult } from "@tanstack/react-query";

export const useGenericGraphqlQuery = <T extends GraphqlModelQuery, TData>(
  graphqlQuery: T,
  callBack: (data: UseQueryResult<any, Error>) => TData,
  enabledFetching: boolean = true
) => {
  const { fetchData } = useFetch(graphqlQuery.query);
  const query = useQuery({
    enabled: enabledFetching,
    queryKey: [graphqlQuery.cacheKey],
    queryFn: () =>
      fetchData(graphqlQuery?.variables)
        .then((data) => data?.data)
        .catch((error) => console.error(error.message)),
  });

  return callBack(query);
};
