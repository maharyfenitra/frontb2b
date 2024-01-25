import { GraphqlModelMutation } from "@/lib";
export class UpdateSupplierMutation implements GraphqlModelMutation {
  readonly mutation = `mutation UpdateSupplier($updateSupplierInput: UpdateSupplierInput!){
                            updateSupplier(updateSupplierInput: $updateSupplierInput) {
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