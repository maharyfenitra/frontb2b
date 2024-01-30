import { GraphqlModelQuery } from "@/lib";
export class FindOnePOrderQuery implements GraphqlModelQuery {
  readonly query = `query FindeOnePOrder($id: String!){
    findOneOrder(id: $id){
      id
      reference
      description
      supplierId
      createdAt
      updateAt
      orderDetailsEntity{
        id
        itemId
        label
        qty
        price
      
      }
    }
  }
  `;
variables?: {id: string};
cacheKey = "findOneOrder"
constructor(id: string){
    this.variables = {id}
}
}