import { space } from "postcss/lib/list";
import { FaAlignJustify } from "react-icons/fa6";
<<<<<<< HEAD

export function Header (props) {
    return(
        <div className="bg-[#39A900] w-full h-16 flex items-center">
            <FaAlignJustify size={30} className="ml-3 cursor-pointer" />
=======
import { Sidebar } from "./Sidebar";

export function Header (props) {
    return(
        <div className="bg-[#39A900] w-full h-20 flex items-center">
            <Sidebar />
>>>>>>> 7c35674e83a010e22c6fcb1b0cc7e1c9e3fd041f
            <h2 className="text-white text-2xl font-bold justify-between ml-10">
                {props.title}
            </h2>
            <FaAlignJustify size={30} className="flex ml-auto mr-3 cursor-pointer"/>
        </div>
    )
}