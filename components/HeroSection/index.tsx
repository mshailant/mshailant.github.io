import ButtonScroll from "../ButtonScroll";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center sm:h-[calc(100vh-5rem)]  h-[100vh] sm:m-0 ml-24 pt-0 pb-0 pl-8 pr-8 items-center">
      <div className="w-[calc(100%-2rem)] ml-[1em] mr-[1em] max-w-[1000px] absolute pt-[8px] pb-[8px] pr-[24px] pl-[24px] items-center flex-col z-[3]">
        <h2 className="text-lblue text-[3.9em] sm:text-[2.25em] md:text-[3em] tracking-[-6px] md:tracking-[-3px] m-0">
          Hola 👋, mi nombre es Martin Hailant
        </h2>
        <p className="text-[1.3em] sm:text-[1.15em] text-orange tracking-[-0.5px] leading-5 mt-[0.5em] mb-[0.5em] ml-0 mr-0 uppercase no-common-ligatures">
          Bienvenido a mi portfolio y CV online
        </p>
        <p className="text-lblue">
          Soy Desarrollador Web Full Stack, trabaje como desarrollador android y
          estudie Licenciatura en Informatica de Lo que eh realizado el
          desarrollo web fue lo que mas me atrapo y lo que dia a dia voy
          mejorando.
        </p>
        <div className="mt-8 flex flex-col items-center">
          <ButtonScroll to="works" title="My Works" />
        </div>
      </div>
    </div>
  );
}
