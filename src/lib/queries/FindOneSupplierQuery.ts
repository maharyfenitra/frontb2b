import { GraphqlModelQuery } from "@/lib";
export class FindOneSupplierQuery implements GraphqlModelQuery {
  readonly query = `query FindOneSupplier($id: String!) {
    findOneSupplier(id: $id){
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
cacheKey = "findOneSupplier"
constructor(id: string){
    this.variables = {id}
}
}