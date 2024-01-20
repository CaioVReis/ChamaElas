import NavItem, { NavDrive } from "../NavItens";

const Navbar = () => {
  return (
    <div className="fixed z-20 PinkRose hidden md:w-full  md:block ">
    <div className=" md:flex container md:flex-row hidden md:justify-between">
      <div className="mt-[6px]">
        <div className="font-bold   text-2xl text-white antialiased">
          <a href="#/">Chama</a>
        </div>
        <div className="font-bold text-2xl text-white antialiased text-right -mt-3 ml-16">
          <a href="#/">Elas</a>
        </div>
      </div>
      <div className="flex gap-20 ">
        {/* <NavItem href="#home" tittle="Home" />
        <NavItem href="#tuor" tittle="Tuor Poços" />
        <NavItem href="#publicidade" tittle="Publicidade" /> */}
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
