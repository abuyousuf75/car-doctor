import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authantications/Login";
import SignUp from "../Pages/Authantications/SignUp";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<h2>Error</h2>,
      children : [
        {
            path : '/',
            element :<Home></Home>
        },
        {
            path : '/login',
            element :<Login></Login>
        },
        {
            path : '/signup',
            element :<SignUp></SignUp>
        },
      ]
    },
  ]);

  export default router;