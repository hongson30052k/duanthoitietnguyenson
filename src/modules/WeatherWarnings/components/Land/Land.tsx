import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./Land.css";
import { LandList } from "./LandList";
const Land = () => {
  return (
    <div className="Land-main">
      <div className="Land-button">
        <FormControl
          sx={{
            m: 1,
            width: 160,
            "@media screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">Tất cả các quận</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Tất cả các quận"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem>Ten</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            minWidth: 230,
            "@media screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">
            Tất cả các mức độ nguy hiểm
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Tất cả các mức độ nguy hiểm"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem>Ten</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            minWidth: 210,
            "@media screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">
            Tất cả các loại sự kiện
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Tất cả các loại sự kiện"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="Land-list">
        <div className="Land-list-left">
          <div className="Land-list-left-title">Đang diễn ra</div>
          {LandList.map((item, index) => {
            return (
              <div key={index}>
                <div className="Land-list-left-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/832px-Warning.svg.png"
                    alt=""
                  />
                  <div className="Land-list-left-item-title">
                    <span>Đang diễn ra: {item.warningtitle}</span>
                    <span>{item.warningcontent}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Land-list-right">
          <div className="container">
            <div className="image-wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Vietnam_location_map.svg/400px-Vietnam_location_map.svg.png"
                alt="Zoomable Image"
                style={{ width: "100%", height: "600px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
