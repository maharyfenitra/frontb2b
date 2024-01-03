"use client";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CategoryIcon from "@mui/icons-material/Category";
import { modules, configModules } from "./modules";

export const mainListItems = (
  <React.Fragment>
    {modules.map((module, index) => {
      return (
        <ListItemButton key={index}>
          <ListItemIcon>
            {module.icon}
          </ListItemIcon>
          <ListItemText primary={module.primary} />
        </ListItemButton>
      );
    })}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Configuration
    </ListSubheader>
    {configModules.map((module, index) => {
      return (
        <ListItemButton key={index}>
          <ListItemIcon>
            {module.icon}
          </ListItemIcon>
          <ListItemText primary={module.primary} />
        </ListItemButton>
      );
    })}
  </React.Fragment>
);
