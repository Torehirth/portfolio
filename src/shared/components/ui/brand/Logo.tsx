import { NavLink } from "react-router";
import lightModeLogo from "../../../assets/logo/dark-logo.svg";
import darkModeLogo from "../../../assets/logo/light-logo.svg";

interface LogoProps {
  variant: "lightMode" | "darkMode";
  to?: string;
}

export const Logo = ({ variant, to = "/" }: LogoProps) => {
  const variants = {
    lightMode: lightModeLogo,
    darkMode: darkModeLogo,
  };

  return (
    <NavLink to={to} className="px-4 py-2">
      <img src={variants[variant]} alt="Tore Hirth's initials as logo" className="h-10 w-10" />
    </NavLink>
  );
};
