import { useNavigate } from "react-router-dom";
import "./ContactHeader.css";
const ContactHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="Contact-content">
      <div className="Contact-header">
        <div
          className="Contact-header-left"
          onClick={() => navigate("/contact")}
        >
          <img
            src="https://hjelp.yr.no/hc/theming_assets/01HZPEEBS3GXR3M5X4E07Z5PYG"
            alt=""
          />
          <span
            className="Contact-support"
            onClick={() => navigate("/contact")}
          >
            Thông tin và hỗ trợ
          </span>
        </div>
        <div className="Contact-header-right" onClick={() => navigate("/")}>
          Yr.no
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
