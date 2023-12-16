import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Page/Shared/Home/Home";
import NewsLayout from "../Layout/NewsLayout/NewsLayout";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/news/:id",
        element: <NewsLayout></NewsLayout>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])

export default router;