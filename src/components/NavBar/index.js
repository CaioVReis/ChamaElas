import NavItem, { NavDrive } from "../NavItens";

const Navbar = () => {
  return (
    <div className="fixed z-20  hidden md:w-full  md:block md:h-[30px]">
    <div className="  md:flex PinkRose md:flex-row hidden md:block ">
      <div className="mt-1 ml-5">
        <div className="font-bold   text-2xl text-white antialiased">
          <a href="#/">Chama</a>
        </div>
        <div className="font-bold ml-16 -mt-3 text-2xl text-white antialiased">
          <a href="#/">Elas</a>
        </div>
      </div>
      <div className="flex gap-20 ml-52  ">
        <NavItem href="#home" tittle="Home" />
        <NavItem href="#tuor" tittle="Tuor Poços" />
        <NavItem href="#publicidade" tittle="Publicidade" />
      </div>
      <div className="">
        <NavDrive
          href="https://play.google.com/store/apps/details?id=com.mobapps.driver.chamaelas"
          target="_blank"
          tittle="Seja Uma Motorista"
        />
      </div>
    </div>
    </div>
  );
};

export { Navbar };
