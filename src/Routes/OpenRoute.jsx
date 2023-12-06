import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Page/Shared/Home/Home";
import NewsLayout from "../Layout/NewsLayout/NewsLayout";

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
    }
])

export default router;