export type WeatherData = {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string; // URL immagine che mi fornisce api
        };
        feelslike_c: number;
        humidity: number;
        wind_kph: number;
    };
}