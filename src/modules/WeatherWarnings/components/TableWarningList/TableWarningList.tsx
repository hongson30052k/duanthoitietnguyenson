import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Land from "../Land/Land";

export default function TabWarningList() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="inherit"
            centered
            variant="fullWidth"
            sx={{
              backgroundColor: "#F7F4F2",
              width: "600px",
              maxWidth: "100%",
              boxSizing: "border-box",
              margin: "0 auto",
              padding: "4px",
              borderRadius: "10px",
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
          >
            <Tab
              label="Đất"
              value="1"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                width: "300px",
                padding: "2px 30px",
                borderRadius: "10px",
                "&.Mui-selected": { color: "#1767ce", backgroundColor: "#fff" },
                "@media (max-width: 600px)": {
                  width: "50%",
                },
              }}
            />
            <Tab
              label="Biển và bờ biển"
              value="2"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                width: "300px",
                padding: "2px 30px",
                borderRadius: "10px",
                "&.Mui-selected": { color: "#1767ce", backgroundColor: "#fff" },
                "@media (max-width: 600px)": {
                  width: "50%",
                },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Land />
        </TabPanel>
        <TabPanel value="2">Biển và bờ biển</TabPanel>
      </TabContext>
    </Box>
  );
}
