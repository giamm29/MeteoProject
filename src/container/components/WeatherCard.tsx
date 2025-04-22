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
    const formatLocalTime = (datetime: string) => {
        const [datePart, timePart] = datetime.split(" ");
        const [year, month, day] = datePart.split("-");
        const date = new Date(`${year}-${month}-${day}T${timePart}`);

        return new Intl.DateTimeFormat("en-EN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date);
    };

    const formattedLocalTime = location?.localtime ? formatLocalTime(location.localtime) : "Unknow";

    return (
        <Card sx={{maxWidth: 400, mx: 'auto', mt: 4, borderRadius: 4, boxShadow: 3}}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Weather in {location?.name}, {location?.country}
                </Typography>

                <Typography variant="body2" sx={{my: 3}} color="text.secondary" gutterBottom>
                    🕒 Local time: {formattedLocalTime}
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