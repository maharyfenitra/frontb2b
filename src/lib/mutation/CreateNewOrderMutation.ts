import { GraphqlModelMutation } from "@/lib";
export class CreateNewOrderMutation implements GraphqlModelMutation {
  readonly mutation = `mutation CreateOrder(
                        $supplierId: String!
                        $reference: String!
                        $description: String!
                        $orderDetailsInput: [OrderDetailsInput!]!
                    ) {
                        createOrder(
                        createOrderInput: {
                            supplierId: $supplierId
                            reference: $reference
                            description: $description
                            orderDetailsInput: $orderDetailsInput
                        }
                        ) {
                        id
                        reference
                        description
                        orderDetailsEntity{id}
                        }
                    }
  `;
}