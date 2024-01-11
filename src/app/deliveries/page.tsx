"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { useDeliveriesDashboard} from "./hooks/useDeliveriesDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const Deliveries = () => {
  const { ref, columns, rows } = useDeliveriesDashboard();
  const { push } = useRouter();
  return (
    <div>
      <Header title="Deliveries" />
      <TopMenu handleClickCreate={() => push("deliveries/details")} />
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
