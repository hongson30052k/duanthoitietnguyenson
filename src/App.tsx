import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShowWeatherPage from "./pages/ShowWeather/ShowWeatherPage";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import ContactPage from "./pages/Contact/ContactPage";
import WeatherWarningsPage from "./pages/WeatherWarnings/WeatherWarningsPage";
import WaterTemperaturesPage from "./pages/WaterTemperatures/WaterTemperaturesPage";
import MountainPassesPage from "./pages/MountainPasses/MountainPassesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/forecast/:city" Component={ShowWeatherPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/weather-warnings" Component={WeatherWarningsPage} />
        <Route path="/water-temperatures" Component={WaterTemperaturesPage} />
        <Route path="/mountain-passes" Component={MountainPassesPage} />
      </Routes>
      <ModalMenu />
    </>
  );
}

export default App;
