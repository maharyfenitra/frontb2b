import { atom } from "recoil";
import { TVariableOrder } from "@/lib";

export const orderInformationState = atom<TVariableOrder>({
    key: "orderInformationState",
    default: {
        description: "Description",
        reference: "Reference",
        supplierId: "Id",
    }
})