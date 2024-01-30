import { GraphqlModelMutation } from "@/lib";
export class UpdateItemMutation implements GraphqlModelMutation {
  readonly mutation = `mutation UpdateItem($updateItemInput: UpdateItemInput!) {
                        updateItem(updateItemInput: $updateItemInput) {
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