import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="h-16 flex justify-around items-center border-1 border-gray-200 w-full">
            <div>
                <p className="text-sm md:text-xl font-bold">BlogVerse</p>
            </div>
            <div>
                <Link to="/" className="text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-800">Home</Link>
            </div>
            <div className="items-center flex gap-5">
                <div>
                    <Link to="/Login" className="text-gray-700 font-semibold">Sign In</Link>
                </div>
                <div>
                    <Link to="/SignUp" className=" bg-blue-700 font-semibold text-white px-4 py-2 rounded-lg">Sign Up</Link>
                </div>
            </div>


        </div>
    )
}
export default Nav;