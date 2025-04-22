import WeatherCard from "../components/WeatherCard";
import {Box, Button, Container, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useGetWeatherQuery} from "../../api/rootApi.ts";
import {useState} from "react";


const Home = () => {
    const [city, setCity] = useState("Rome")
    const [citySearch, setCitySearch] = useState("")
    const {data, isSuccess} = useGetWeatherQuery(citySearch)
    console.log(data)

    const handleClickButton = () => {
        setCitySearch(city)
    }

    return (
        <Box>
            <Container component="main"
                       sx={{display: 'flex', flexDirection: 'row', justifyContent: 'spaceBetween'}}>
                <TextField id="outlined-basic" label="City" variant="outlined" sx={{mr: 2}}
                           onChange={(e) => setCity(e.target.value)}/>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon/>}
                    onClick={handleClickButton}
                >
                    Cerca
                </Button>
            </Container>
            {isSuccess && <WeatherCard data={data ?? {}}/>}

        </Box>
    );
};

export default Home;