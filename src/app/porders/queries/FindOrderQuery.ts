import { GraphqlModelQuery } from "@/lib";
export class FindOrderQuery implements GraphqlModelQuery {
  readonly query = `query FindOrder($id: String!) {
            findOrder(id: $id){
            id
            reference
            description
            }
        }`;
  cacheKey = "findOrder"
  variables?: { id: string };

  constructor(id: string) {
    this.variables = { id };
  }
}
