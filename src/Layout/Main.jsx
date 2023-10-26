import { Outlet } from "react-router-dom";
import Navbar from "../SahredComponents/Navbar";
import Footer from "../SahredComponents/Footer";

const Main = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;