import { GraphqlModelQuery } from "@/lib";
export class FindAllItemssQuery implements GraphqlModelQuery {
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