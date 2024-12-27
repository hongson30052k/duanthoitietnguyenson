import "./WaterTemperaturesMain.css";
const WaterTemperaturesMain = () => {
  return (
    <div className="WaterTemperatures-content">
      <div className="WaterTemperatures-main">
        <div className="WaterTemperatures-main-title">
          <h6>Độ ẩm ở Việt Nam</h6>
          <div>
            <span>i</span>
          </div>
        </div>
        <h2>Các Vùng</h2>
        <div className="WaterTemperatures-region">
          <div className="WaterTemperatures-region-list">
            <span>1. Vùng Tây Bắc </span>
            <span>2. Vùng Đông Bắc</span>
            <span>3. Vùng Đồng Bằng Sông Hồng</span>
            <span>4. Vùng Bắc Trung Bộ</span>
            <span>5. Vùng Nam Trung Bộ</span>
            <span>6. Vùng Tây Nguyên</span>
            <span>7. Vùng Đông Nam Bộ</span>
            <span>8. Vùng Đồng Bằng Sông Cửu Long</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTemperaturesMain;
