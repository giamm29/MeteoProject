import {WeatherData} from "../../types/types";
import * as React from "react";
import {Box, Card, CardContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';


type WeatherCardProps = {
    data: WeatherData
}

const WeatherCard: React.FC<WeatherCardProps> = ({data}) => {
    const {location, current} = data;

    const icon = current?.condition?.icon;

    return (
        <Card sx={{maxWidth: 400, mx: 'auto', mt: 4, borderRadius: 4, boxShadow: 3}}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Meteo a {location?.name}, {location?.country}
                </Typography>

                <Box display="flex" alignItems="center" gap={2}>
                    <img src={icon} alt={current?.condition?.text} width={64} height={64}/>
                    <Typography variant="h4" color="primary">
                        {current?.temp_c}°C
                    </Typography>
                </Box>

                <Typography variant="subtitle1" color="text.secondary">
                    {current?.condition?.text}
                </Typography>

                <Grid container spacing={2} sx={{mt: 2}}>
                    <Grid size={6}>
                        <Typography variant="body2">Perceived : {current?.feelslike_c}°C</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography variant="body2">Humidity: {current?.humidity}%</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography variant="body2">Wind: {current?.wind_kph} km/h</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default WeatherCard;