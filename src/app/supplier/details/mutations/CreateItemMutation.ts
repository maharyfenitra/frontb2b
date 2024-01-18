import { GraphqlModelMutation } from "@/lib";

export class CreateItemMutation implements GraphqlModelMutation {
  readonly mutation = `mutation CreateItem($label: String!, $description: String!, $userId: String!, $price: Float!) {
    createItem(
      createItemInput: {
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
      createdAt
      updateAt
    }
  }
  `;
  variables?: TVariable;

}

export type TVariable = {
  label: string;
  description: string;
  userId: string;
  price: number
};
