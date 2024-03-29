import { GraphqlModelQuery } from "@/lib";
export class FindAllCustomersQuery implements GraphqlModelQuery {
  readonly query = `query FindAllCustomer {
    findAllCustomers{
      id
      firstName
      lastName
      name
      mail
      phoneNumber
      description
      adress
      city
      area
      stat
      nif
      contactMail
      contactPhoneNumber
      contactPost
    }
  }`;

cacheKey = "findAllCustomers"
}