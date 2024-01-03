import { GraphqlModelMutation } from "@/lib";

export class CreateOrderMutation implements GraphqlModelMutation {
  readonly mutation = `mutation CreateOrder(
                            $clientId: String!
                            $providerId: String!
                            $reference: String!
                            $description: String!
                        ) {
                            createOrder(
                            createOrderInput: {
                                clientId: $clientId
                                providerId: $providerId
                                reference: $reference
                                description: $description
                            }
                            ) {
                            id
                            }
                        }`;
}

export type TVariables = {
  clientId: string;
  providerId: string;
  reference: string;
  description: string;
};
