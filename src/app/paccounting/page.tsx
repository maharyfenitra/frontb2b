"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { usePAccountingDashboard} from "./hooks/usePAccountingDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const Deliveries = () => {
  const { ref, columns, rows } = usePAccountingDashboard();
  const { push } = useRouter();
  return (
    <div>
      <Header title="Purchase Accounting" />
      <TopMenu handleClickCreate={() => push("paccounting/details")} />
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

export default Deliveries;
