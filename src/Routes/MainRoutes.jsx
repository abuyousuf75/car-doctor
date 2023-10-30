import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authantications/Login";
import SignUp from "../Pages/Authantications/SignUp";
import Services from "../Pages/Services/Services";
import ServicesDetals from "../Pages/Home/HomePages/ServicesDetals";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";



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
        {
            path : '/orders',
            element :<PrivateRoute> <Orders></Orders></PrivateRoute>
        },
       
        {
            path : '/services',
            element :<Services></Services>
        },
        {
            path : '/checkout/:id',
            element :<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)

        },
        {
          path : '/services/:id',
          element :<ServicesDetals></ServicesDetals>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      ]
    },
  ]);

  export default router;