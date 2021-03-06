export interface IWeatherData {
  isLoading: boolean;
  name: string;
  lat: number;
  lon: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  hourly: {
    dt: number;
    temp: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  }[];
  daily: {
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    humidity: number;
    wind_speed: number;
    wind_deg: number;
    sunrise: number;
    sunset: number;
    pressure: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    uvi: number;
  }[];
}
export interface IWeatherContext {
  weatherData: IWeatherData;
  unit: string;
  location: string;
  setUnit: (newUnit: string) => void;
  getWeatherData: (lon: number, lat: number) => void;
  getLocationName: (lon: number, lat: number) => void;
  todayOrWeek: string;
  setTodayOrWeek: (value: string) => void;
  oldTempRef: {
    current: number;
  };
}
