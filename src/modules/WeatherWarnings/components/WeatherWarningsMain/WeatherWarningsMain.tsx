import TabWarningList from "../TableWarningList/TableWarningList";
import "./WeatherWarningsMain.css";
const WeatherWarningsMain = () => {
  return (
    <div className="WeatherWarnings-content">
      <div className="WeatherWarnings-main">
        <span className="WeatherWarnings-main-title">
          Cảnh báo thời tiết ở Việt Nam
        </span>
        <div className="WeatherWarnings-list">
          <TabWarningList />
        </div>
      </div>
    </div>
  );
};

export default WeatherWarningsMain;
