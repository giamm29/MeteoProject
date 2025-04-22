import {Outlet} from "react-router";
import {Box, Container} from '@mui/material';
import Header from "./Header";
import Footer from "./Footer.tsx";

const ContainerApp = () => {
    return (
        <div
            style={{background: 'linear-gradient(135deg, rgba(10, 178, 245, 0.9) 0%, rgba(140, 242, 111, 0.9) 100%)'}}>
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
        </div>
    );
};

export default ContainerApp;