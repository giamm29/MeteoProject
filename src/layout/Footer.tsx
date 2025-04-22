import {Box, Typography} from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                background: 'linear-gradient(90deg, rgba(10, 178, 245, 1) 0%, rgba(140, 242, 111, 1) 100%)',
                color: '#fff',
                textAlign: 'center',
                py: 2,
                mt: 'auto',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
                height: '50px'
            }}
        >
            <Typography variant="body2" sx={{fontWeight: 300, color: '#f3f3f3'}}>
                © {new Date().getFullYear()} MeteoNow • Powered by 🌦️ Gianmarco Costa
            </Typography>
        </Box>
    );
};

export default Footer;