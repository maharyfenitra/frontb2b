import { GraphqlModelMutation } from "@/lib";
export class CreateNewItemMutation implements GraphqlModelMutation {
  readonly mutation = `mutation CreateItem(
                        $code: String!
                        $label: String!
                        $description: String!
                        $price: Float!
                        $userId: String!
                    ) {
                        createItem(
                        createItemInput: {
                            code: $code
                            label: $label
                            description: $description
                            price: $price
                            userId: $userId
                        }
                        ) {
                        id
                        label
                        description
                        price
                        userId
                        status
                        }
                    }
  `;
}