import  NavItem, { NavDrive }  from "../NavItens"


const Navbar = () =>{
    return(
    
    
    <div className="fixed z-20 h-16 md:w-screen md:flex hidden md:block PinkRose">
        <div className="ml-5 md:w-48">
          <div className="font-bold m-1 -ml-3 text-2xl text-white antialiased"><a href="#/">Chama</a></div>
           <div className="font-bold ml-12 -mt-4 text-2xl text-white antialiased"><a href="#/">Elas</a></div>
        </div>
        <div className="md:flex  md:gap-24 hidden md:block">
        <NavItem  href="#home" tittle="Home" />
        <NavItem href="#tuor" tittle="Tuor Poços"/>
        <NavItem href="#publicidade" tittle="Publicidade"/>
        
        </div>
        <div className="flex  ml-32">
        <NavDrive href="https://play.google.com/store/apps/details?id=com.mobapps.driver.chamaelas" target="_blank" tittle="Seja Uma Motorista"/>
        </div>
    </div>


    )
    

}

export{
    Navbar
}