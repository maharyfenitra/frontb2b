import { GraphqlModelMutation } from "@/lib";

export class CreateItemMutation implements GraphqlModelMutation {
  readonly mutation = `mutation CreateItem($label: String!, $description: String!, $userId: String!) {
        createItem(
          createItemInput: {
            label: $label
            description: $description
            userId: $userId
          }
        ) {
          id
          label
          description
          createdAt
          updateAt
        }
      }`;
  variables?: TVariable;

}

export type TVariable = {
  label: string;
  description: string;
  userId: string;
};
