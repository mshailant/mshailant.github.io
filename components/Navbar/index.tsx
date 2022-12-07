import NavbarLink from "../NavbarLink";

const menu = [
  { title: "Contact Me", to: "contact" },
  { title: "About Me", to: "about" },
  { title: "My Works", to: "works" },
];

export default function Navbar() {
  return (
    <nav className="bg-dblue sm:top-auto sm:bottom-0 sm:w-[100%] sm:h-20 sm:flex sm:items-center sm:border-r-[0px] sm:border-t sm:border-t-lblue/[.2] sm:justify-center fixed h-full w-24 border-solid border-r border-r-lblue/[.2] top-0 left-0 pt-0 pb-0 z-30">
      <div className="sm:transform-none sm:m-0 origin-[50%_100%_0px] -rotate-90 relative mt-60">
        <ul className="sm:relative sm:transform-none sm:top-auto sm:right-auto sm:flex-row-reverse p-0 m-0 list-none absolute flex right-0 top-[50%] items-center translate-y-[-50%]">
          {menu.map((menu, i) => (
            <li
              key={i}
              className="flex items-center sm:after:content-none after:content-['-'] sm:last:after:content-none last:after:content-[''] after:m-0 after:text-lblue after:my-0 after:mx-[1em] sm:before:content-['-'] sm:last:before:content-none sm:before:m-0 sm:before:text-lblue sm:before:my-0 sm:before:mx-[1em]"
            >
              <NavbarLink to={menu.to} title={menu.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
