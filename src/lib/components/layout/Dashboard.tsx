"use client";
import { modules, configModules } from "./modules";
import { Grid, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

export const MainPage = () => {
  return (
    <>
    <Grid container spacing={3} sx={{margin: 4}}>
      {modules.map((modules, index) => {
        return (<Grid item xs={12} md={8} lg={4} key={index}>
                    <Paper
                        sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 100,
                        }}
                    >
                        --
                    </Paper>
                </Grid>);
      })}
    </Grid>
    <Divider sx={{ my: 1 }} />
    <Grid container spacing={3} sx={{margin: 4}}>
      {modules.map((modules, index) => {
        return (<Grid item xs={12} md={8} lg={4} key={index}>
                    <Paper
                        sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 100,
                        }}
                    >
                        --
                    </Paper>
                </Grid>);
      })}
    </Grid>
    
    </>
  );
};
