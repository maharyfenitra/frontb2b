import { useRouter } from "next/navigation";

export const useTopMenuAction = () => {
  const { push } = useRouter();
  const createItemEvent = (e: React.MouseEvent) => {
    push("/items/details");
    console.log("click")
  };

  return { createItemEvent };
};
