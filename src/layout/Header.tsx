import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

const Header = () => {
    return (
        <AppBar
            position="static"
            sx={{
                background: 'linear-gradient(90deg,rgba(10, 178, 245, 1) 0%, rgba(234, 255, 8, 1) 46%, rgba(140, 242, 111, 1) 100%)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
                color: '#fff' // imposta il colore del testo a bianco
            }}
        >
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Box display="flex" alignItems="center" gap={1}>
                    <IconButton edge="start" aria-label="logo">
                        <WbSunnyRoundedIcon sx={{color: '#FFD54F', fontSize: 52}}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{fontSize: 25, fontWeight: 900, color: '#fff'}}>
                        WeatherNow
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{fontSize: 15, color: 'rgba(9,6,6,0.8)'}}>
                    Find out the weather wherever you are
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
