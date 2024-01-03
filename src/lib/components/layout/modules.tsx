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
    link: "dashboard"
  },
  {
    primary: "Items",
    icon: <CategoryIcon />,
    link: "items"
  },
  {
    primary: "Purchase Orders",
    icon: <ShoppingCartIcon />,
    link: "porders"
  },
  {
    primary: "Reception",
    icon: <ReceiptIcon />,
    link: "receptions"
  },
  {
    primary: "Purchase Invoices",
    icon: <MoneyIcon />,
    link: "pinvoices"
  },
  {
    primary: "Purchase Payment",
    icon: <PaymentsIcon />,
    link: "ppayments"
  },
  {
    primary: "Purchasing accounting",
    icon: <AccountBalanceWalletIcon />,
    link: "paccounting"
  },
  {
    primary: "Sales Orders",
    icon: <SellIcon />,
    link: "sorders"
  },
  {
    primary: "Deliveries",
    icon: <LocalShippingIcon />,
    link: "deliveries"
  },
  {
    primary: "Sales Invoices",
    icon: <RequestPageIcon />,
    link: "sinvoices"
  },
  {
    primary: "Sales regulations",
    icon: <PaymentIcon />,
    link: "spayments"
  },
  {
    primary: "Sales accounting",
    icon: <AccountBalanceIcon />,
    link: "saccounting"
  },
  {
    primary: "Stock",
    icon: <InventoryIcon />,
    link: "stocks"
  },
];

export const configModules: ModulesType[] = [
  {
    primary: "Translations",
    icon: <TranslateIcon />,
    link: "translations"
  },
  {
    primary: "Users",
    icon: <PeopleIcon />,
    link: "users"
  },
  {
    primary: "Currencies",
    icon: <CurrencyExchangeIcon />,
    link: "currencies"
  },
];

type ModulesType = {
  primary: string;
  icon: React.ReactNode;
  link: string;
};
