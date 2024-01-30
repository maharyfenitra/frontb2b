import { GraphqlModelMutation } from "@/lib";
export class CreateNewOrderMutation implements GraphqlModelMutation {
  readonly mutation = `mutation CreateOrder(
                                $reference: String!
                                $description: String!
                                $supplierId: String!
                            ) {
                                createOrder(
                                createOrderInput: {
                                    reference: $reference
                                    description: $description
                                    supplierId: $supplierId
                                }
                                ) {
                                id
                                }
                            }
  `;
}