export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#Features", tag: "new" },
  { label: "Benefits", href: "#Benefits" },
  { label: "Integrations", href: "#Integrations" },
  { label: "Pricing", href: "#Pricing" },
  {
    label: "Pages",
    href: "#",
    isDropdown: true,
    dropdownItems: [
      { label: "About", href: "/about" },
      { label: "Signup", href: "/signup" },
      { label: "Login", href: "/login" },
    ],
  },
];
