import { useState } from "react";
import { Link } from "react-scroll";
import { MdKeyboardArrowDown, MdArrowDownward } from "react-icons/md";

export default function ButtonScroll(props: any) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Link
      className="group flex justify-center items-center hover:text-yellow transition ease-in-out duration-[.5s] delay-[0]  mt-6 bg-transparent cursor-pointer border-solid border-orange hover:border-yellow border-8 text-orange font-bold text-[1em] uppercase pt-[1.2em] px-[1em] pb-[1em] appearance-none no-common-ligatures leading-[1]"
      to={props.to}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      {props.title}
      {hover ? (
        <MdArrowDownward className="ml-2 text-[20px]" />
      ) : (
        <MdKeyboardArrowDown className="ml-2 text-[20px]" />
      )}
    </Link>
  );
}
