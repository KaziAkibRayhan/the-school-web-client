import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import CoursePurchase from "../../Pages/Courses/CoursePurchase/CoursePurchase";
import Courses from "../../Pages/Courses/Courses/Courses";
import CoursesCategory from "../../Pages/CoursesCategory/CoursesCategory";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Register from "../../Pages/LoginAndRegister/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Courses />,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/courses-category/:id',
                element: <CoursesCategory></CoursesCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses-category/${params.id}`)
            },
            {
                path: '/courses/purchase/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/purchase/${params.id}`),
                element: <PrivateRoute><CoursePurchase /></PrivateRoute>
            },
            { path: '/faq', element: <FAQ /> },
            { path: '/blog', element: <Blog /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    }])

export default routes;