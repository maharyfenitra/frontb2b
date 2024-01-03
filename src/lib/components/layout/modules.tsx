import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import TranslateIcon from "@mui/icons-material/Translate";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RequestPageIcon from '@mui/icons-material/RequestPage';
import SellIcon from '@mui/icons-material/Sell';
import MoneyIcon from '@mui/icons-material/Money';

export const modules: ModulesType[] = [
  {
    primary: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    primary: "Items",
    icon: <CategoryIcon />,
  },
  {
    primary: "Purchase Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    primary: "Reception",
    icon: <ReceiptIcon />,
  },
  {
    primary: "Purchase Invoices",
    icon: <MoneyIcon />,
  },
  {
    primary: "Purchase Payment",
    icon: <PaymentsIcon />,
  },
  {
    primary: "Purchasing accounting",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    primary: "Sales Orders",
    icon: <SellIcon />,
  },
  {
    primary: "Deliveries",
    icon: <LocalShippingIcon />,
  },
  {
    primary: "Sales Invoices",
    icon: <RequestPageIcon />,
  },
  {
    primary: "Sales regulations",
    icon: <PaymentIcon />,
  },
  {
    primary: "Sales accounting",
    icon: <AccountBalanceIcon />,
  },
  {
    primary: "Stock",
    icon: <InventoryIcon />,
  },
];

export const configModules: ModulesType[] = [
  {
    primary: "Translation",
    icon: <TranslateIcon />,
  },
  {
    primary: "Users",
    icon: <PeopleIcon />,
  },
  {
    primary: "Currencies",
    icon: <CurrencyExchangeIcon />,
  },
];

type ModulesType = {
  primary: string;
  icon: React.ReactNode;
};
