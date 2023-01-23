import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import FeatureCourses from "../pages/FeatureCourses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[ {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/courses',
            element: <Courses/>
        },
        {
            path: '/course-feature',
            element: <FeatureCourses/>
        },
         {
            path: '/signup',
            element: <SignUp/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },

        ]
        
    }
   
])

export default router


