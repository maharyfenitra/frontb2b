import { GraphqlModelMutation } from "@/lib";
export class CreateNewOrderMutation implements GraphqlModelMutation {
  readonly mutation = `query FindAllSuppiers {
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