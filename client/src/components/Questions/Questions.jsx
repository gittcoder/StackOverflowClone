import React from "react"
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import { Link } from "react-router-dom";
import '../../App.css'
const Questions=()=>
{
    return(
        <div className="home-container-1">
               <LeftSidebar/>
               <div className="home-container-2">
                <HomeMainbar/>
                <RightSidebar/>

                </div>

                <Link to ="/AskQuestion"></Link>

        </div>
        )
}
export default Questions