import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShowWeatherPage from "./pages/ShowWeather/ShowWeatherPage";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/forecast/:city" Component={ShowWeatherPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <ModalMenu />
    </>
  );
}

export default App;
