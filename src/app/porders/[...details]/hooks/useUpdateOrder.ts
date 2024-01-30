
import { useFinOnePOrderQuery,TVariableOrder } from "@/lib";
import { orderInformationState } from "../states/orderInformationState";
import {  useSetRecoilState} from "recoil";
import { useEffect } from "react";
export const useUpdateOrder = (id: string) =>{
    const setOrderInformation = useSetRecoilState(orderInformationState);
    const { data , isSuccess} =useFinOnePOrderQuery(id);

    useEffect(()=>{
        if(id){
            setOrderInformation({
                    id: data?.id,
                    description: data?.description || "",
                    reference: data?.reference || "",
                    supplierId: data?.supplierId || "",
            })
        }
    }, [isSuccess])
    

    return {}
}