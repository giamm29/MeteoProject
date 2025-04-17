import Main from "../layout/Main.tsx";
import Home from "../container/pages/Home.tsx";

export const appRoutes = [
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
];

