import { atom } from "recoil";
import { TVariableOrder } from "@/lib";

export const orderDetailsInformationState = atom<TVariableOrder>({
    key: "orderDetailsInformationState",
    default: {
        description: "Description",
        reference: "Reference",
        supplierId: "Id",
        orderDetails: []
    }
})