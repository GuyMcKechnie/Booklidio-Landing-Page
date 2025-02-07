import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";

export const footerDefaults = [
  {
    title: "For You",
    links: [
      { title: "FAQ", url: "/faq" },
      // { title: "Trading Process", url: "/trading-process" },
      // { title: "Shipping Information", url: "/shipping-information" },
      // { title: "Orders", url: "/orders" },
      // { title: "Account", url: "/account" },
    ],
  },
  {
    title: "About Us",
    links: [
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "Terms of Service", url: "/terms-of-service" },
      { title: "Returns Policy", url: "/returns-policy" },
      // { title: "Cookies Settings", url: "/cookies-settings" },
      // { title: "Our Company", url: "/about-us" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        title: "Facebook",
        url: "/https://www.facebook.com/Booklidio",
        icon: <BiLogoFacebookCircle className="size-6" />,
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/booklidio/",
        icon: <BiLogoInstagram className="size-6" />,
      },
    ],
  },
];
