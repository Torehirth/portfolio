const NavLinks = ({ links }) => {
  return (
    <nav aria-label="Primary links">
      <ul className="hidden md:flex items-center gap-4 text-xl dark:text-primaryWhite">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="relative inline-block px-2 py-1 text-primaryBlack dark:text-primaryWhite group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 h-px w-0 bg-secondaryRed group-hover:w-full group-active:bg-accentGrey transition-all duration-500 ease-in-out"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavLinks;
