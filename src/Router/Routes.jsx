import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Layouts/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import AllTask from "../Pages/Dashboard/AllTask/AllTask";

const Routes=createBrowserRouter([
    {
         path:'/',
         element:<Main></Main>,
         children:[
            {
                index:true,
                element:<Home></Home>
            },
         ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/add-task',
                element:<AddTask></AddTask>
            },
            {
                path:'/dashboard/all-task',
                element:<AllTask></AllTask>
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