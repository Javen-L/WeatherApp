export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

type Main = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number
}

type Weather = {
    main: string,
    description: string,
    icon: string
}

export type WeatherData = {
    name: string,
    main: Main,
    weather: Weather[]
}