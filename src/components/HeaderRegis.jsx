import { FaAlignJustify } from "react-icons/fa6";
<<<<<<< HEAD

export function HeaderRegis (props) {
    return(
        <div className="bg-[#39A900] w-full h-16 flex items-center">
            <button className='bg-white text-black rounded-lg p-2 font-bold ml-8 w-24' type="button"> Volver </button>
=======
import { Link } from "react-router-dom";

export function HeaderRegis (props) {
    return(
        <div className="bg-[#39A900] w-full h-20 flex items-center">
            <button className='bg-white text-black rounded-lg p-2 font-bold ml-8 w-24' type="button"> <Link to={`/resultados`}> Volver </Link> </button>
>>>>>>> 7c35674e83a010e22c6fcb1b0cc7e1c9e3fd041f
            <h2 className="text-white text-2xl font-bold ml-auto mr-8">
                {props.title}
            </h2>
        </div>
    )
}