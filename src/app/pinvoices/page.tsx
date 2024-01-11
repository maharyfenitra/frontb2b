"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { usePInvoicesDashboard} from "./hooks/usePInvoicesDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const PInvoices = () => {
  const { ref, columns, rows } = usePInvoicesDashboard();
  const { push } = useRouter();
  return (
    <div>
      <Header title="Purchase Invoices" />
      <TopMenu handleClickCreate={() => push("pinvoices/details")} />
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

export default PInvoices;
