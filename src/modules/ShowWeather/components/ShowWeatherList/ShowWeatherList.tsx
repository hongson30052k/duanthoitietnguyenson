import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import ShowWeatherTable from "../ShowWeatherTable/ShowWeatherTable";

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
      {value === index && (
        <Box
          sx={{
            background:
              "linear-gradient(180deg, rgba(219,234,255,1) 0%, rgba(253,253,254,1) 83%)",
            ml: -18,
            mr: -18,
            pl: 18,
            pr: 18,
            "@media screen and (max-width: 1669px)": {
              ml: -16,
              mr: -16,
              pl: 16,
              pr: 16,
            },
            "@media screen and (max-width: 1440px)": {
              ml: -13,
              mr: -13,
              pl: 14,
              pr: 14,
            },
            "@media screen and (max-width: 1322px)": {
              ml: -1,
              mr: -1,
              pl: 0,
              pr: 0,
            },
            "@media screen and (max-width: 1024px)": {
              ml: 0,
              mr: 0,
              pl: 0,
              pr: 0,
            },
            "@media screen and (max-width: 768px)": {
              ml: 0,
              mr: 0,
              pl: 0,
              pr: 0,
            },
          }}
        >
          {children}
        </Box>
      )}
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
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className="Home-content">
            <Tabs
              value={value}
              onChange={handleChange}
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
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </>
  );
}
