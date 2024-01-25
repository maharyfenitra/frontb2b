import { GraphqlModelMutation } from "@/lib";
export class CreateNewCustomerMutation implements GraphqlModelMutation {
  readonly mutation = `mutation CreateCustomer(
                            $name: String!
                            $firstName: String
                            $lastName: String
                            $mail: String
                            $adress: String!
                            $city: String
                            $area: String
                            $stat: String
                            $nif: String
                            $phoneNumber: String
                            $description: String!
                            $contactMail: String
                            $contactPhoneNumber: String
                            $contactPost: String
                        ) {
                            createCustomer(
                            createCustomerInput: {
                                firstName: $firstName
                                lastName: $lastName
                                name: $name
                                mail: $mail
                                adress: $adress
                                city: $city
                                area: $area
                                stat: $stat
                                nif: $nif
                                phoneNumber: $phoneNumber
                                description: $description
                                contactMail: $contactMail
                                contactPhoneNumber: $contactPhoneNumber
                                contactPost: $contactPost
                            }
                            ) {
                            id
                            firstName
                            lastName
                            name
                            mail
                            adress
                            city
                            area
                            stat
                            nif
                            phoneNumber
                            description
                            contactMail
                            contactPhoneNumber
                            contactPost
                            }
                        }
  `;
}