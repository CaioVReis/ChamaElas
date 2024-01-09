import Icon from "../icons"



const Stores=()=>{
    return(

         <div>
           <div className=" md:ml-10 md:flex  flex mt-10 md:size-96 gap-5 ml-4  size-96 ">
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