import "./MountainPassesMain.css";
import { mienBacDeo, mienNamDeo, mienTrungDeo } from "./North";
const MountainPassesMain = () => {
  return (
    <div className="MountainPasses-content">
      <div className="MountainPasses-main">
        <span className="MountainPasses-main-title">Đèo núi ở Việt Nam</span>
        <div className="MountainPasses-list">
          <h4>Tuyến đường miền Bắc</h4>
          <div className="MountainPasses-list-content">
            {mienBacDeo.map((item) => {
              return (
                <div className="MountainPasses-list-north">
                  <span>{item.ma}</span>
                  <span>{item.tenDeo}</span>
                  <span>Mở</span>
                </div>
              );
            })}
          </div>
          <h4>Tuyến đường miền Trung</h4>
          <div className="MountainPasses-list-content">
            {mienTrungDeo.map((item) => {
              return (
                <div className="MountainPasses-list-north">
                  <span>{item.ma}</span>
                  <span>{item.tenDeo}</span>
                  <span>Mở</span>
                </div>
              );
            })}
          </div>
          <h4>Tuyến đường miền Nam</h4>
          <div className="MountainPasses-list-content">
            {mienNamDeo.map((item) => {
              return (
                <div className="MountainPasses-list-north">
                  <span>{item.ma}</span>
                  <span>{item.tenDeo}</span>
                  <span>Mở</span>
                </div>
              );
            })}
          </div>
          <h4>Những tuyến đường khác</h4>
          <div className="MountainPasses-list-content">
            <div className="MountainPasses-list-north">
              <span>ES1</span>
              <span>Đèo Năm Căn</span>
              <span style={{ backgroundColor: "#FFDDD6" }}>
                Đóng cửa vào mùa Đông
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainPassesMain;
