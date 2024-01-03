import { GraphqlModelQuery } from "@/lib";
export class FindAllOrdersQuery implements GraphqlModelQuery {
  readonly query = `query FindAllOrders{
        findAllOrders{
        id
        reference
        description
    }
}`;
cacheKey = "findAllOrders"
}
