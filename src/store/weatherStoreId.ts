import { create } from "zustand";
import axiosInstance from "../api/axiosClient";

interface IWeather {
  day: string;
  temperature: number;
  precip: string;
  wind: string;
  weather_day: {
    night: string;
    morning: string;
    afternoon: string;
    evening: string;
  };
}
interface IThemeId {
  id: number;
  city: string;
  address: string;
  week_weather: IWeather[];
}
interface IWeatherIdStore {
  weatherId: IThemeId;
  isLoading: boolean;
  error: boolean | null;
  fetchWeatherId: (id: number) => Promise<void>;
}
const weatherStoreId = create<IWeatherIdStore>((set) => ({
  weatherId: {} as IThemeId,
  isLoading: false,
  error: null,

  fetchWeatherId: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get(`/weather/${id}`);
      set({ weatherId: response.data, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },
}));

export default weatherStoreId;
