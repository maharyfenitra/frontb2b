import { GraphqlModelQuery } from "@/lib";
export class FindOneItemQuery implements GraphqlModelQuery {
  readonly query = `query FindOneItem($id: String!){
    findOneItem(id: $id){
      id
      label
      description
      price
      code
    }
  }
  `;
variables?: {id: string};
cacheKey = "findOneItem"
constructor(id: string){
    this.variables = {id}
}
}