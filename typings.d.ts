export interface CurrentForecastData {
    dt: number
    main: {
        temp: number
        temp_min: number
        temp_max: number
    }
    name: string
    sys: {
        country: string
    }
    weather: {
        description: string
        main: string
    }[];
    wind: {
        speed: number
    }
}