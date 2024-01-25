import { GraphqlModelQuery } from "@/lib";
export class FindAllSuppliersQuery implements GraphqlModelQuery {
  readonly query = `query FindAllSuppliers {
    findAllSuppliers {
      id
      firstName
      lastName
      name
      phoneNumber
      mail
      adress
      area
      city
      description
      stat
      nif
      contactMail
      contactPhoneNumber
      contactPost
    }
  }
  `;
cacheKey = "findAllSuppliers"
}