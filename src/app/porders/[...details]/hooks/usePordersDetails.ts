
import { useParams } from "next/navigation";
import { useCreatePorder } from "./useCreatePorder";
import { useUpdateOrder } from "./useUpdateOrder";
export const usePordersDetails = () =>{
    const params = useParams();
    const id = params?.details[1];
    const {createNewOrder} = useCreatePorder();
    const {} = useUpdateOrder(id as string);

    const handleClickSave = () =>{
        
        createNewOrder();
    }

    return {
        handleClickSave
    }
}