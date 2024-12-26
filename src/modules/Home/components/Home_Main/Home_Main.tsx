import "./Home_Main.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SatelliteIcon from "@mui/icons-material/Satellite";
import { useEffect } from "react";
import weatherStore from "../../../../store/weatherStore";
import { useNavigate } from "react-router-dom";
import weatherStoreId from "../../../../store/weatherStoreId";
const Home_Main = () => {
  const { fetchWeatherId } = weatherStoreId();
  const navagite = useNavigate();
  const today: Date = new Date();
  const weekday: number = today.getDay();
  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const handleClick = async (id: number) => {
    localStorage.setItem("id", id.toString());
    await fetchWeatherId(id);
    await navagite(`/forecast/${id}`);
  };
  const { weather, fetchWeather } = weatherStore();
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);
  return (
    <div className="Home-content">
      <div className="Home-main">
        <span className="header-2">Địa điểm của tôi</span>
        <div className="layout-container">
          <div className="layout-list-header">
            <span>{daysOfWeek[weekday]}</span>
            <span>{daysOfWeek[(weekday + 1) % 7]}</span>
            <span>{daysOfWeek[(weekday + 2) % 7]}</span>
            <span className="layout-list-header--active">
              {daysOfWeek[(weekday + 3) % 7]}
            </span>
          </div>
          <div className="layout-border"></div>
          {weather.length > 0 &&
            weather?.map((item) => {
              return (
                <>
                  <div
                    className="layout-list"
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                  >
                    <span className="layout-list-title">{item?.city}</span>
                    <div className="layout-list-item">
                      {
                        <>
                          <div>
                            <img
                              src={
                                item.week_weather[(weekday + 6) % 7]
                                  ?.weather_image
                              }
                              alt=""
                            />
                            <span>
                              {
                                item.week_weather[(weekday + 6) % 7]
                                  ?.temperature
                              }
                              {"\u00B0C"}
                            </span>
                          </div>
                          <div>
                            <img
                              src={
                                item.week_weather[weekday % 7]?.weather_image
                              }
                              alt=""
                            />
                            <span>
                              {item.week_weather[weekday % 7]?.temperature}
                              {"\u00B0C"}
                            </span>
                          </div>
                          <div>
                            <img
                              src={
                                item.week_weather[(weekday + 1) % 7]
                                  ?.weather_image
                              }
                              alt=""
                            />
                            <span>
                              {
                                item.week_weather[(weekday + 1) % 7]
                                  ?.temperature
                              }
                              {"\u00B0C"}
                            </span>
                          </div>
                          <div className="layout-list-item--active">
                            <img
                              src={
                                item.week_weather[(weekday + 2) % 7]
                                  ?.weather_image
                              }
                              alt=""
                            />
                            <span>
                              {
                                item.week_weather[(weekday + 2) % 7]
                                  ?.temperature
                              }
                              {"\u00B0C"}
                            </span>
                          </div>
                        </>
                      }
                    </div>
                  </div>
                  <div className="layout-border"></div>
                </>
              );
            })}
        </div>
        <div className="Layout-list-button">
          <div className="Layout-list-button-1">
            <AddLocationAltIcon />
            <span>Bản đồ</span>
          </div>
          <div className="Layout-list-button-2">
            <DangerousIcon />
            <span>Cảnh báo nguy hiểm</span>
          </div>
          <div className="Layout-list-button-3">
            <AcUnitIcon />
            <span>độ sâu tuyết</span>
          </div>
          <div className="Layout-list-button-4">
            <SatelliteIcon />
            <span>Đèo núi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Main;
