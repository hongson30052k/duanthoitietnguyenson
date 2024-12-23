import "./Home_Button.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Home_Button = () => {
  return (
    <div className="Home-content">
      <h2 className="header-2">Các dịch vụ khác của Viện Khí tượng</h2>
      <div className="Home-Button">
        <div className="Home-Button-list">
          <a href="">Bản đồ dự báo của nhà khí tượng học</a>
          <OpenInNewIcon />
        </div>
        <div className="Home-Button-list">
          <a href="">Văn bản cảnh báo diện tích đất</a>
          <OpenInNewIcon />
        </div>
        <div className="Home-Button-list">
          <a href="">Hình ảnh vệ tinh</a>
          <OpenInNewIcon />
        </div>
      </div>
    </div>
  );
};

export default Home_Button;
