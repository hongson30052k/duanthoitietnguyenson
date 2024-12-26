import "./Home_Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ModalStore from "../../../../store/openModalMenuStore";
import ModalList from "../../../../components/ModalList/ModalList";
import weatherModalStore from "../../../../store/weatherModalStore";
import { useNavigate } from "react-router-dom";
const Home_Header = () => {
  const { toggleDrawer } = ModalStore();
  const { setValueSearch } = weatherModalStore();
  const navagite = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(event.target.value);
  };
  return (
    <div className="Home-content">
      <div className="served-by">
        <span>Một dịch vụ từ Viện Khí tượng và NRK</span>
      </div>
      <div className="Home-Header">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navagite("/");
          }}
        >
          <img
            alt=""
            className="logo-img"
            src="https://birkeland.uib.no/wp-content/uploads/2021/01/nrk-logo.jpg"
          />
        </div>
        <div className="page-header">
          <div className="search-bar">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Tìm kiếm"
            />
            <i>
              <ManageSearchIcon style={{ width: "30px", height: "30px" }} />
            </i>
            <ModalList />
          </div>
          <div
            className="page-header__toolbar"
            onClick={() => toggleDrawer(true)}
          >
            <a className="page-header__search-button">
              <MenuIcon className="search-icon" />
            </a>
            <span className="button__content-text">Menu</span>
          </div>
          <MenuIcon className="menu-icon" onClick={() => toggleDrawer(true)} />
        </div>
      </div>
    </div>
  );
};

export default Home_Header;
