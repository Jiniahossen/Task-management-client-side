import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";

const Routes=createBrowserRouter([
    {
         path:'/',
         element:<Main></Main>,
         children:[
            {
                index:true,
                element:<Home></Home>
            }
         ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<SignIn></SignIn>
    }
])

export default Routes;