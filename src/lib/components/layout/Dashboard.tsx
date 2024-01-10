"use client";
import { modules, configModules } from "./modules";
import { Grid, Paper, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "next/link";

export const MainPage = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ margin: 4 }}>
        {modules.map((modules, index) => {
          return (
            <Grid item xs={12} md={8} lg={4} key={index}>
              <Link href={modules.link}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                  }}
                >
                  {modules.primary}
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Grid container spacing={3} sx={{ margin: 4 }}>
        {configModules.map((modules, index) => {
          return (
            <Grid item xs={12} md={8} lg={4} key={index}>
              <Link href={modules.link}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                  }}
                >
                  {modules.primary}
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
