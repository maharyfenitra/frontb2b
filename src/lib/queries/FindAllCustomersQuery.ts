import { GraphqlModelQuery } from "@/lib";
export class FindAllSuppliersQuery implements GraphqlModelQuery {
  readonly query = `query FindAllSuppiers {
    findAllSuppliers {
      id
      firstName
      lastName
      name
      mail
      adress
      area
      city
      description
      stat
      nif
    }
  }
  `;
cacheKey = "findAllSuppliers"
}