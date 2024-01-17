import { GraphqlModelQuery } from "@/lib";
export class FindAllItemsQuery implements GraphqlModelQuery {
  readonly query = `query FindAllItems {
    findAllitems {
      id
      label
      description
      price
      createdAt
      updateAt
    }
  }`;
cacheKey = "findAllItems"
}