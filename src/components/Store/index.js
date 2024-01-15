import Icon from "../icons"



const Stores=()=>{
    return(

         <div>
           <div className=" md:flex md:justify-start flex md:mt-10 md:gap-5 mt-6 mb-3 md:mb-0 mx-4 md:mx-0 gap-2">
                <a href="https://apps.apple.com/br/app/chama-elas-passageira/id6450562015" target="_blank" tittle="AppleStore"  >
                    <Icon icon="AppleStore"/>
                </a>

                <a className="-mt-2" href="https://play.google.com/store/apps/details?id=com.mobapps.client.chamaelas&hl=pt&gl=US" target="_blank" tittle="PlayStore" >
                    <Icon icon="PlayStore" />
               </a>
            </div>
         </div>
                
    )
}


export{
    Stores
}