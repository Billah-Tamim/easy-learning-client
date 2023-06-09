import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/account/login/Login";
import Register from "../../pages/account/register/Register";
import Courses from "../../pages/courses/courses/Courses";
import Faq from "../../pages/faq/Faq";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Home from "../../pages/home/Home";
import Conditions from "../../pages/account/Conditions/Conditions";
import Details from "../../pages/courses/details/Details";
import PrivateRouter from "../private/PrivateRouter";

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
                path:'/courses/:id',
                element:<Courses></Courses>,
                loader: ({params})=> fetch(`https://easy-learning-server-ten.vercel.app/courses/${params.id}`)
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: ()=> fetch(`https://easy-learning-server-ten.vercel.app/courses`)
            },
            {
                path:'/course/:id',
                element:<PrivateRouter><Details></Details></PrivateRouter>,
                loader: ({params}) => fetch(`https://easy-learning-server-ten.vercel.app/course/${params.id}`)
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