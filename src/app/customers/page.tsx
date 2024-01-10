"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { useCustomersDashboard } from "./hooks/useCustomersDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const Currencies = () => {
  const { ref, columns, rows } = useCustomersDashboard();
  const { push } = useRouter();
  return (
    <div>
      <Header title="Customers" />
      <TopMenu handleClickCreate={() => push("customers/details")} />
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

export default Currencies;
