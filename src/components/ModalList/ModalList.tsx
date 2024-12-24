import "../../modules/Home/components/Home_Header/Home_Header.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import weatherModalStore from "../../store/weatherModalStore";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
const ModalList = () => {
  const {
    fetchWeatherModal,
    weatherList,
    valueSearch,
    isLoading,
    setValueSearch,
  } = weatherModalStore();
  useEffect(() => {
    fetchWeatherModal(valueSearch);
  }, [fetchWeatherModal, valueSearch, setValueSearch]);
  console.log(weatherList);
  console.log(valueSearch);
  return (
    <div className="modal-list">
      {isLoading && valueSearch.trim() != "" ? (
        <div className="modal-list-item">
          <CircularProgress size={20} sx={{ margin: "0 auto" }} />
        </div>
      ) : (
        weatherList?.length > 0 &&
        valueSearch.trim() != "" &&
        weatherList?.map((item, index) => (
          <>
            <div className="modal-list-item" key={index}>
              <AddLocationAltIcon />
              <span>{item.city}</span>
            </div>
            <div className="modal-list-item-border"></div>
          </>
        ))
      )}
    </div>
  );
};

export default ModalList;
