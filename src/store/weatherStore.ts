import { create } from "zustand";
import axiosInstance from "../api/axiosClient";

interface IWeather {
  day: string;
  weather_image: string;
  trang_thai: string;
  temperature: number;
}
interface ITheme {
  city: string;
  week_weather: IWeather[];
}
interface IWeatherStore {
  weather: ITheme[];
  isLoading: boolean;
  error: boolean | null;
  fetchWeather: () => Promise<void>;
}
const weatherStore = create<IWeatherStore>((set) => ({
  weather: [],
  isLoading: false,
  error: null,

  fetchWeather: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/weather");
      set({ weather: response.data, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },
}));

export default weatherStore;
