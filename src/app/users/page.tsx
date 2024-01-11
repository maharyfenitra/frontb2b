"use client";
import { Header, DashboardGrid, TopMenu } from "@/lib";
import { useUsersDashboard} from "./hooks/useUsersDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useRouter } from "next/navigation";

const Users = () => {
  const { ref, columns, rows } = useUsersDashboard();
  const { push } = useRouter();
  return (
    <div>
      <Header title="Users" />
      <TopMenu handleClickCreate={() => push("users/details")} />
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

export default Users;
