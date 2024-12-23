import "./Footer.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  return (
    <div className="Home-content">
      <div className="Footer">
        <div className="Footer-left">
          <span className="Footer-title">Yr là một dịch vụ từ</span>
          <div className="Footer-logo">
            <img
              src="https://seeklogo.com/images/N/NRK-logo-153A075AD9-seeklogo.com.png"
              alt=""
            />
            <span>@2024 Yr. All Rights</span>
          </div>
          <div className="Footer-info">
            <span>Biên tập : Nguyễn Hồng Sơn</span>
            <span>Biên tập viên chịu trách nhiệm : Nguyễn Hồng Sơn </span>
            <span>Chịu trách nhiệm về khí tượng : Nguyễn Hồng Sơn</span>
          </div>
          <span className="Footer-copyright">
            Bản quyền © NRK và Viện Khí tượng 2007–2024
          </span>
        </div>
        <div className="Footer-right">
          <div className="Footer-list">
            <div className="Footer-icon">
              <SportsSoccerIcon />
              <span> thông tin & hỗ trợ</span>
            </div>
            <div className="Footer-icon">
              <DriveFileRenameOutlineIcon />
              <span>Liên hệ với chúng tôi</span>
            </div>
            <div className="Footer-icon">
              <LanguageIcon />
              <span>Chọn ngôn ngữ</span>
            </div>
          </div>
          <div className="Footer-line">
            <div className="Footer-icon">
              <h3 className="Footer-icon-title">Giới thiệu về năm</h3>
              <span>Sự riêng tư</span>
              <span>Cookie thông tin</span>
              <span>Đối tác hợp tác</span>
            </div>
            <div className="Footer-icon">
              <h3 className="Footer-icon-title">Mạng xã hội</h3>
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Instagram</span>
            </div>
            <div className="Footer-icon">
              <h3 className="Footer-icon-title">Ứng dụng</h3>
              <span>Ứng dụng dành cho iOS</span>
              <span>Ứng dụng dành cho Android</span>
            </div>
            <div className="Footer-icon">
              <h3 className="Footer-icon-title">Các dịch vụ khác</h3>
              <span>Dịch vụ dành cho nhà phát triển</span>
              <span>Nhiệt độ tắm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
