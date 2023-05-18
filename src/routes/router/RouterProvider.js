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
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: ()=> fetch(`http://localhost:5000/courses`)
            },
            {
                path:'/course/:id',
                element:<Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
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