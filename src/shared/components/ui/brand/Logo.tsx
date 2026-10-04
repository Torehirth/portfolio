import { Link } from "react-router";
import lightModeLogo from "../../../assets/logo/dark-logo.svg";
import darkModeLogo from "../../../assets/logo/light-logo.svg";

interface LogoProps {
  variant: "lightMode" | "darkMode";
  to?: string;
  size?: "sm" | "md" | "lg" | "xl";
  mobileSize?: "sm" | "md" | "lg" | "xl";
}

export const Logo = ({ variant, to = "/", size = "md", mobileSize = "sm" }: LogoProps) => {
  const variants = {
    lightMode: lightModeLogo,
    darkMode: darkModeLogo,
  };

  const sizes = {
    sm: "h-7 w-7",
    md: "h-10 w-10",
    lg: "h-13 w-13",
    xl: "h-16 w-16",
  };

  return (
    <Link to={to} className="px-4 py-2">
      <img
        src={variants[variant]}
        alt="Tore Hirth's initials as logo"
        className={`h-${sizes[mobileSize]} w-${sizes[mobileSize]} md:h-${sizes[size]} w-${sizes[size]}`}
      />
    </Link>
  );
};
