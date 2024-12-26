import { create } from "zustand";
import axiosInstance from "../api/axiosClient";

interface IWeatherHouse {
  time: string;
  weather: string;
  temperature: string;
  rainfall: string;
  windSpeed: string;
  windDescription: string;
  windPeriod: string;
}
interface IWeatherHouseIdStore {
  day: string;
  weatherHouseId: IWeatherHouse[];
  isLoading: boolean;
  error: boolean | null;
  fetchDay: (day: string) => Promise<void>;
  fetchWeatherHouseId: () => Promise<void>;
}
const weatherHouseStoreId = create<IWeatherHouseIdStore>((set) => ({
  day: "",
  weatherHouseId: [],
  isLoading: false,
  error: null,
  fetchDay: async (day: string) => {
    set({ day });
  },
  fetchWeatherHouseId: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get(`/weatherHouse`);
      set({ weatherHouseId: response.data, isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },
}));

export default weatherHouseStoreId;
