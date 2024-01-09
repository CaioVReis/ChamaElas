const NavItem = ({href,tittle}) =>{
    return(
        <a href={href} className=" text-lg  mt-4 mb-4 hover:bg-pink-300 rounded-md p-1 text-white">{tittle}</a> 
    )
}

const NavDrive = ({href,tittle})=>{
    return(
        <div className=" text-2xl text-center mb-3 ml-80 p-1 mt-3 bg-pink-300 rounded-md text-white">
            <a href={href} target="_blank" className="font-bold tracking-tight hover:underline">{tittle}</a>
            </div>
    )
}

export default NavItem


export {
    NavDrive
}