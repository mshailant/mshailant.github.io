"use client";
import { Link } from "react-scroll";

export default function NavbarLink(props: any) {
  return (
    <Link
      className="text-orange block sm:text-center sm:leading-[1.2] w-[5em] sm:whitespace-normal whitespace-nowrap uppercase text-[0.8em] tracking-[0.5px] relative font-bold no-common-ligatures my-0 mx-4 hover:text-yellow  transition ease-out duration-[.3s] delay-[0] cursor-pointer"
      to={props.to}
    >
      {props.title}
    </Link>
  );
}
