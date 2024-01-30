import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCreateOrderMutation } from "@/lib";
import { orderInformationState } from "../states/orderInformationState";
import { useRecoilValue} from "recoil"

export const useCreatePorder = () => {
    const orderInformation = useRecoilValue(orderInformationState);
  const { push } = useRouter();
  const {
    mutate,
    isSuccess: isCreationSuccess,
    data: createdOrder,
  } = useCreateOrderMutation();

  useEffect(() => {
    if (isCreationSuccess) {
      push(`/porders/details/${createdOrder.createOrder.id}`);
    }
  }, [isCreationSuccess]);

  const createNewOrder = () =>{
    mutate(orderInformation)
  }

  return { createNewOrder, isCreationSuccess };
};

