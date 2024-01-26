import { GraphqlModelQuery } from "@/lib";
export class FindOneItemQuery implements GraphqlModelQuery {
  readonly query = `query FindOneCustomer($id: String!) {
    findOneCustomer(id: $id){
      id
      firstName
      lastName
      firstName
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
  }
  `;
variables?: {id: string};
cacheKey = "findOneCustomer"
constructor(id: string){
    this.variables = {id}
}
}