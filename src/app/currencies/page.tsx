"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { useCurrenciesDashboard } from "./hooks/useCurrenciesDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const Currencies = () => {
  const { ref, columns, rows } = useCurrenciesDashboard();
  const { push } = useRouter();
  return (
    <div>
      <Header title="Currencies" />
      <TopMenu handleClickCreate={() => push("currencies/details")} />
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
