
import Icon from "../icons"

const Cards = ({ tittle, disc, svg }) => {
    return (
        <div className="flex-shrink md:w-full w-auto mx-4 md:mx-0" data-wow-duration="1s" >


            <div className="py-8 px-12  h-[235px] rounded-lg bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">

                <div className="inline-block text-gray-900 mb-4">


                    <Icon icon={svg} />


                </div>

                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{tittle}</h3>

                <p className="color-card-text">{disc}</p>

            </div>



        </div>

    )
}



export {
    Cards,
}