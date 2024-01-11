import { useState } from "react";

const NavBarFlow = () => {
  const [isOpen, setOpen] = useState(false);

  const openNav = (ev) =>{
    ev.preventDefault() // evita o redirecionamento da tag a
    setOpen(!isOpen)
  }
  return (
    <div className="fixed z-20  h-16 md:w-screen  w-full  flex  PinkRose md:hidden">
      <div className="md:-ml-7 -ml-8 md:w-48">
        <div className="font-bold m-1 ml-9 text-2xl flex flex-row text-white antialiased">
          <a onClick={openNav} href="#/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </a>
            <a href="#"><p className="absolute right-5 text-center text-lg p-2 h-10 mt-2  bg-pink-300 rounded-md text-white">Seja Motorista</p></a>
        </div>
        { isOpen  && (
            <div className=" md:w-full    w-screen ml-8  PinkRose flex flex-col p-2 gap-5">
        <div className="font-bold text-center text-3xl text-white antialiased hover:text-pink-400">
          <a href="#/">Home</a>
        </div>

        <div className="font-bold text-center text-3xl text-white antialiased hover:text-pink-400">
          <a href="#/">Tuor Poços</a>
        </div>

        <div className="font-bold text-center text-3xl text-white antialiased hover:text-pink-400">
          <a href="#/">Publicidade</a>
        </div>

       

        </div>
        )}

      </div>
      <div></div>
    </div>
  );
};

export default NavBarFlow;


