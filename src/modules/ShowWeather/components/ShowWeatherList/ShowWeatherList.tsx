import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import ShowWeatherTable from "../ShowWeatherTable/ShowWeatherTable";
import NeighboringAreas from "../NeighboringAreas/NeighboringAreas";
import TableDetail from "../TableDetail/TableDetail";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ShowWeatherList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className="Home-content">
            <Tabs
              value={value}
              onChange={(event, newValue) => handleChange(event, newValue)}
              aria-label="basic tabs example"
              textColor="inherit"
            >
              <Tab
                label="Dự báo"
                {...a11yProps(0)}
                style={{ fontWeight: "bold", fontSize: "16px" }}
              />
              <Tab
                label="Các vùng lân cận"
                {...a11yProps(1)}
                style={{ fontWeight: "bold", fontSize: "16px" }}
              />
              <Tab
                label="Chi tiết"
                {...a11yProps(2)}
                style={{ fontWeight: "bold", fontSize: "16px" }}
              />
            </Tabs>
          </div>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <WeatherForecast />
          <ShowWeatherTable />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NeighboringAreas />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TableDetail />
        </CustomTabPanel>
      </Box>
    </>
  );
}
