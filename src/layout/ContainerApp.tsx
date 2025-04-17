import {Outlet} from "react-router";
import {Container} from '@mui/material';
import Header from "./Header";
import Footer from "./Footer.tsx";

const ContainerApp = () => {
    return (
        <>
            <Header/>
            <Container component="main" sx={{minHeight: '80vh', py: 4}}>
                <Outlet/>
            </Container>
            <Footer/>
        </>
    );
};

export default ContainerApp;