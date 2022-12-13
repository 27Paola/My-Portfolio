import {React, useState} from "react";
import { FiHome } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [menu, setMenu] = useState(false)

    return (
    <>
    <div className="fixed left-10  z-30 w-fit h-fit bg-purple-300 rounded-full border-4 border-indigo-500/50 "
    onClick={() => setMenu(!menu)}>
    <FiHome className="text-5xl" />
    </div>

    <div>
        {menu && (

        <div className="fixed bottom-1 left-5 bg-black h-fit pb-20 px-5 py-5 rounded-md flex flex-col items-center justify-center gap-5 z-20 w-10">
            
            <Link to="/" className="center flex-col">
            <FiHome className="text-5xl content-center w-10 " />
            <span className="text-sm font-Love text-center text-violet-600">Home</span>
            </Link>

            <Link to="/Abount" className="center flex-col">
            <FiSmile className="text-5xl content-center w-10" />
            <span className="text-sm font-Love text-violet-600">About</span>
            </Link>

            <Link to="/Projects" className="Center flex-col">
                <FiTool className="text-5xl" />
                <span className="text-5xl">Projects</span>
            </Link>

            <Link to="/Skills" className="center flex-col">
                <FiAward className="text-5xl" />
                <span className="text-5xl">Skills</span>
            </Link>

            </div>

        )
        }
            </div>

            </>


    );
};


export default Navbar