import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Register from "../../Pages/LoginAndRegister/Register/Register";


const routes = createBrowserRouter([{
    path: '/', element: <Main />, children: [
        { path: '/', element: <Courses /> },
        { path: '/courses', element: <Courses /> },
        { path: '/faq', element: <FAQ /> },
        { path: '/blog', element: <Blog /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
    ]
}])

export default routes;