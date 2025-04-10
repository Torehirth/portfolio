import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SoMeLinks from "./SoMeLinks";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <NavLinks
        links={[
          { name: "Projects", href: "#" },
          { name: "Skills", href: "#" },
          { name: "About", href: "#" },
          { name: "Experience", href: "#" },
          { name: "Contact", href: "#" },
        ]}
      />
      <SoMeLinks />
      <ThemeToggle />
    </header>
  );
};
export default Header;
