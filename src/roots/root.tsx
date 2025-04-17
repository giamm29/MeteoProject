import Home from "../container/pages/Home.tsx";
import ContainerApp from "../layout/ContainerApp.tsx";

export const appRoutes = [
    {
        path: "/",
        element: <ContainerApp/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
];

