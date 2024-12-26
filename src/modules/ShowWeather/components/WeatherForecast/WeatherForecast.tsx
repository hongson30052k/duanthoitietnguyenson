import "./WeatherForecast.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AirIcon from "@mui/icons-material/Air";
import weatherStoreId from "../../../../store/weatherStoreId";
const today: Date = new Date();
const weekday: number = today.getDay();
console.log(weekday);
const WeatherForecast = () => {
  const { weatherId } = weatherStoreId();
  return (
    <div className="WeatherForecast-container">
      <div className="Home-content">
        <div className="WeatherForecast-top">
          <div className="WeatherForecast-item">
            <div className="WeatherForecast-item-title">
              <AccessTimeIcon />
              <span>Nhiệt độ hiện tại</span>
            </div>
            <div className="WeatherForecast-item-content">
              <img src="" alt="" />
              <div className="WeatherForecast-item-temperature-value">
                <div className="WeatherForecast-item-temperature-value-nows">
                  <ThermostatAutoIcon
                    style={{ width: "30px", height: "40px" }}
                  />
                  <span className="WeatherForecast-item-temperature-value-now">
                    {weatherId?.week_weather?.[(weekday + 6) % 7].temperature}°
                  </span>
                </div>
                <div className="WeatherForecast-item-temperature-value-fell">
                  <span className="WeatherForecast-item-feel-like">
                    fell like
                  </span>
                  <span>
                    {weatherId?.week_weather?.[(weekday + 6) % 7].temperature}°
                  </span>
                </div>
              </div>
              <div className="WeatherForecast-item-elevation">
                <BeachAccessIcon />
                <span>
                  {weatherId?.week_weather?.[(weekday + 6) % 7].precip} mm
                </span>
              </div>
              <div className="WeatherForecast-item-wind">
                <AirIcon />
                <span>
                  {weatherId?.week_weather?.[(weekday + 6) % 7].wind} m/s
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="WeatherForecast-bottom"></div>
      </div>
    </div>
  );
};

export default WeatherForecast;
