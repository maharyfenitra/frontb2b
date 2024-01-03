"use client";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { modules, configModules } from "./modules";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    {modules.map((module, index) => {
      return (
        <Link href={module.link} key={index}>
          <ListItemButton>
            <ListItemIcon>{module.icon}</ListItemIcon>
            <ListItemText primary={module.primary} />
          </ListItemButton>
        </Link>
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
        <Link href={module.link} key={index}>
          <ListItemButton>
            <ListItemIcon>{module.icon}</ListItemIcon>
            <ListItemText primary={module.primary} />
          </ListItemButton>
        </Link>
      );
    })}
  </React.Fragment>
);
