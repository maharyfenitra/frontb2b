"use client";
import { useCreateOrderMutation } from "../hooks/useCreateOrderMutation";

const Order = () => {
  const { mutate } = useCreateOrderMutation();
  

  return (
    <div>
      <button onClick={() => mutate({
      clientId: "657afc6418f168242f388b3c",
      providerId: "657afd904b7e243c30b1d26a",
      reference: "Test 31 DES 23",
      description: "Description",
    })}>Click</button>
    </div>
  );
};

export default Order;
