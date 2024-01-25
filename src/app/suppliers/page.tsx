"use client";
import { Header, DashboardGrid, TopMenu, } from "@/lib";
import { useSuppliersDashboard} from "./hooks/useSuppliersDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const Suppliers = () => {
  const { ref, columns, rows, handleEdit } = useSuppliersDashboard();
  const { push } = useRouter();

  return (
    <div>
      <Header title="Suppliers" />
      <TopMenu handleClickCreate={() => push("suppliers/details")} handleClickEdit={handleEdit}/>
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

export default Suppliers;
