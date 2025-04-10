const NavLinks = ({ links }) => {
  return (
    <nav aria-label="Primary links">
      <ul className="hidden md:flex items-center gap-4 text-xl dark:text-primaryWhite">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavLinks;
