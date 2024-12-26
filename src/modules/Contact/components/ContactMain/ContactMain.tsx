import "./ContactMain.css";

const ContactMain = () => {
  return (
    <div className="Contact-container">
      <img
        src="https://hjelp.yr.no/hc/theming_assets/01HZPEEC5Z13KNSDK5V6WVW0PA"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div className="Contact-content">
        <div className="Contact-main">
          <span>Vị trí và biểu tượng thời tiết</span>
          <span>Yr, API và chính sách bảo mật</span>
          <span>Ứng dụng cho IOS và Android</span>
        </div>
        <div className="Contact-list">
          <div>
            <span>Dự báo 21 ngày vào năm</span>
            <div className="Contact-list-border"></div>
          </div>
          <div>
            <span>Bản đồ sét: Hiển thị thời gian thực</span>
            <div className="Contact-list-border"></div>
          </div>
          <div>
            <span>Bản đồ</span>
            <div className="Contact-list-border"></div>
          </div>
          <div>
            <span>Yr, API và chính sách bảo mật</span>
            <div className="Contact-list-border"></div>
          </div>
          <div>
            <span>Ứng dụng cho IOS và Android</span>
            <div className="Contact-list-border"></div>
          </div>
          <div>
            <span>Câu hỏi liên quan đến tên địa điểm</span>
            <div className="Contact-list-border"></div>
          </div>
          <div>
            <span>Câu hỏi thường gặp: Câu hỏi thường gặp</span>
            <div className="Contact-list-border"></div>
          </div>
          <div>
            <span>Chính sách bảo mật</span>
            <div className="Contact-list-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
