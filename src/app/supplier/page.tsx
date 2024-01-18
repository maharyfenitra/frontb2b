"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { usePInvoicesDashboard} from "./hooks/usePInvoicesDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const PPayments = () => {
  const { ref, columns, rows } = usePInvoicesDashboard();
  const { push } = useRouter();
  return (
    <div>
      <Header title="Purchase Payments" />
      <TopMenu handleClickCreate={() => push("suppliers/details")} />
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

export default PPayments;
