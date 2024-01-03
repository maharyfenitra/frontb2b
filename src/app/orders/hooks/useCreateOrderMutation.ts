import { useGenericGraphqlMutation } from "@/lib";
import { CreateOrderMutation , TVariables} from "../mutations/CreateOrderMutation";

export const useCreateOrderMutation = () => {
  return useGenericGraphqlMutation<CreateOrderMutation, TVariables>(
    new CreateOrderMutation()
  );
};
