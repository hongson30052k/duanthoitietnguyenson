import "../../modules/Home/components/Home_Header/Home_Header.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import weatherModalStore from "../../store/weatherModalStore";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import weatherStoreId from "../../store/weatherStoreId";
const ModalList = () => {
  const navagite = useNavigate();
  const { fetchWeatherId } = weatherStoreId();
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
  const handleClick = async (id: number) => {
    localStorage.setItem("id", id.toString());
    await fetchWeatherId(id);
    await navagite(`/forecast/${id}`);
    setValueSearch("");
  };
  return (
    <div className="modal-list">
      {isLoading && valueSearch.trim() != "" ? (
        <div className="modal-list-item">
          <CircularProgress size={20} sx={{ margin: "0 auto" }} />
        </div>
      ) : (
        weatherList?.length > 0 &&
        valueSearch.trim() != "" &&
        weatherList?.map((item) => (
          <>
            <div
              className="modal-list-item"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
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
