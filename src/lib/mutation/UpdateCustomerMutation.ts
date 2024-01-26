import { GraphqlModelMutation } from "@/lib";
export class UpdateCustomerMutation implements GraphqlModelMutation {
  readonly mutation = `mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!){
                            updateCustomer(updateCustomerInput: $updateCustomerInput) {
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
                            
                            }
                        }
                    `;
}