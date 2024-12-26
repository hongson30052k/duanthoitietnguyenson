import { useEffect } from "react";
import "./ShowWeatherTitle.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import weatherStoreId from "../../../../store/weatherStoreId";

const ShowWeatherTitle = () => {
  const id = localStorage.getItem("id");
  const { fetchWeatherId, weatherId } = weatherStoreId();
  console.log(weatherId);
  useEffect(() => {
    fetchWeatherId(Number(id));
  }, [id, fetchWeatherId]);
  return (
    <div className="Home-content">
      <div className="ShowWeatherTitle">
        <div className="ShowWeatherTitle-content">
          <div className="ShowWeatherTitle-content-title">
            <span className="ShowWeatherTitle-title">{weatherId?.city}</span>
            <StarOutlineIcon />
          </div>
          <span className="ShowWeatherTitle-content-address">
            {weatherId?.address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowWeatherTitle;
