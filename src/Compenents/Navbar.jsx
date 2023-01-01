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
    <div className="fixed left-8 mt-5  z-30 w-18 h-18 bg-fuchsia-400 rounded-full border-4 border-black"
    onClick={() => setMenu(!menu)}>
    <FiHome className="text-5xl" />
    </div>
    <div>
        {menu && (

        <div className="fixed bottom-3 left-8 my-36 bg-gradient-to-r from-fuchsia-400 to-pink-300 ... h-fit  px-7 py-7 rounded-md flex flex-col items-center justify-center gap-5 z-20 w-10">
            
            <Link to="/" className="center flex-col bg">
            <FiHome className="text-5xl content-center w-10 " />
            <span className="text-lg font-Shadows text-center text-black">Home</span>
            </Link>

            <Link to="/Abount" className="center flex-col">
            <FiSmile className="text-5xl content-center w-10" />
            <span className="text-lg font-Shadows text-black">About</span>
            </Link>

            <Link to="/Projects" className="Center flex-col">
                <FiTool className="text-5xl content-center w-10" />
                <span className="text-lg font-Shadows text-black">Projects</span>
            </Link>

            <Link to="/Skills" className="center flex-col">
                <FiAward className="text-5xl content-center w-10" />
                <span className="text-lg font-Shadows text-black">Skills</span>
            </Link>

            </div>

        )
        }
            </div>

            </>


    );
};


export default Navbar