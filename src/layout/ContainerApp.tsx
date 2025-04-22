import {Outlet} from "react-router";
import {Box, Container} from '@mui/material';
import Header from "./Header";
import Footer from "./Footer.tsx";

const ContainerApp = () => {
    return (
        <>
            <Header/>
            <Container
                component="main"
                sx={{
                    flexGrow: 1,
                    minHeight: "calc(100vh - 120px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <Outlet/>
                </Box>
            </Container>
            <Footer/>
        </>
    );
};

export default ContainerApp;