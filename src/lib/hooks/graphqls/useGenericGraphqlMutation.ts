import { useFetch } from "../useFetch";
import { useMutation } from "@tanstack/react-query";
import { GraphqlModelMutation } from "../../types";

export const useGenericGraphqlMutation = <T extends GraphqlModelMutation, TVariables>(graphqlMutation: T) => {
    const { fetchData } = useFetch(graphqlMutation.mutation);
  const mutation = useMutation({
    
    mutationFn: (variables: TVariables) =>
      fetchData(variables)
        .then((data) => data?.data)
        .catch((error) => console.error(error.message)),
  });

  return { ...mutation, data: mutation.data };
}