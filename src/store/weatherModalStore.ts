import { create } from "zustand";
import axiosInstance from "../api/axiosClient";
interface IWeather {
  city: string;
}

interface IWeatherModalStore {
  valueSearch: string;
  setValueSearch: (value: string) => void;
  weatherList: IWeather[];
  isLoading: boolean;
  error: boolean | null;
  fetchWeatherModal: (valueSearch: string) => Promise<void>;
}
const weatherModalStore = create<IWeatherModalStore>((set) => ({
  valueSearch: "",
  setValueSearch: (value: string) => set({ valueSearch: value }),
  weatherList: [],
  isLoading: false,
  error: null,

  fetchWeatherModal: async (valueSearch: string) => {
    set({ isLoading: true, error: null });
    if (valueSearch.trim() === "") return;
    try {
      const response = await axiosInstance.get(
        `/weather?city_like=${valueSearch}`
      );
      set({ weatherList: response.data, isLoading: false });
    } catch {
      set({ error: true });
    }
  },
}));

export default weatherModalStore;
