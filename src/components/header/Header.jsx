import HamburgerMenu from "./HamburgerMenu";
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
      <div className="flex gap-4">
        <ThemeToggle />
        <HamburgerMenu />
      </div>
    </header>
  );
};
export default Header;
