"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { useCustomersDashboard } from "./hooks/useCustomersDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const Customer = () => {
  const { ref, columns, rows, handleEdit } = useCustomersDashboard();
  
  const { push } = useRouter();
  return (
    <div>
      <Header title="Customers" />
      <TopMenu handleClickCreate={() => push("customers/details")} handleClickEdit={handleEdit}/>
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

export default Customer;
