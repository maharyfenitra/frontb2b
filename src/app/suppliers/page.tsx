"use client";
import { Header, DashboardGrid, TopMenu, } from "@/lib";
import { useItemsDashboard} from "./hooks/useItemsDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const PPayments = () => {
  const { ref, columns, rows } = useItemsDashboard();
  const { push } = useRouter();

  return (
    <div>
      <Header title="Suppliers" />
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
