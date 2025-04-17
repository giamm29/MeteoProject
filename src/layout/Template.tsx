import {appRoutes} from "../roots/root.tsx";
import {useRoutes} from "react-router"

const Template = () => {
    return useRoutes(appRoutes)
}

export default Template
