"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { usePOrdersDashboard} from "./hooks/usePOrdersDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const POrders = () => {
  const { ref, columns, rows, handleEdit } = usePOrdersDashboard();
  const path = usePathname();
  console.log(path)
  const { push } = useRouter();
  return (
    <div>
      <Header title="Purchase Orders" />
      <TopMenu handleClickCreate={() => push("porders/details")} handleClickEdit={handleEdit}/>
      <DashboardGrid
        ref={
          ref as unknown as
            | React.Ref<React.MutableRefObject<GridApiCommunity>>
            | undefined
        }
        columns={columns}
        rows={rows}
      />
    </div>
  );
};

export default POrders;
