import {
  Person,
  ReceiptLongRounded,
  RequestQuoteRounded,
} from "@mui/icons-material";

export const mainNavList = [
  {
    title: "Bills",
    path: "/bills",
    icon: ReceiptLongRounded,
  },
  {
    title: "Payment",
    path: "/payment",
    icon: RequestQuoteRounded,
  },
];

export const bottomNavList = [
  {
    title: "Profile",
    path: "/profile",
    icon: Person,
  },
];
