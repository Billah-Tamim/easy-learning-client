import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/account/login/Login";
import Register from "../../pages/account/register/Register";
import Courses from "../../pages/courses/courses/Courses";
import Faq from "../../pages/faq/Faq";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Home from "../../pages/home/Home";
import Conditions from "../../pages/account/Conditions/Conditions";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/conditions',
                element:<Conditions></Conditions>
            }
        ]
    }
]);