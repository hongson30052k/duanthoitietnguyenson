import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalHouseStore from "../../../../store/openWeatherModalHouse";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import weatherHouseStoreId from "../../../../store/weatherHouseId";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  maxHeight: "80vh",
  overflow: "auto",
  p: 4,
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export default function ModalHouse() {
  const { open, toggleDrawer } = ModalHouseStore();
  const { fetchWeatherHouseId, weatherHouseId, day } = weatherHouseStoreId();
  const rows = weatherHouseId.map((item) => ({
    time: item?.time,
    weather: item?.weather,
    temperature: item?.temperature,
    rainfall: item?.rainfall,
    windSpeed: item?.windSpeed,
    windDescription: item?.windDescription,
    windPeriod: item?.windPeriod,
  }));

  useEffect(() => {
    fetchWeatherHouseId();
  }, [fetchWeatherHouseId]);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => toggleDrawer(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <Typography variant="h6" fontSize={18} fontWeight={600}>
                  {day}
                </Typography>
                <TableRow>
                  <TableCell sx={{ color: "#969696" }}>Thời gian</TableCell>
                  <TableCell align="right" sx={{ color: "#969696" }}>
                    Thời tiết
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#969696" }}>
                    Nhiệt độ
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#969696" }}>
                    Lượng mưa. mm
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#969696" }}>
                    Tốc độ gió m/s
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#969696" }}>
                    Mô tả gió
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.time}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.time}
                    </TableCell>
                    <TableCell align="right">
                      <img
                        src={row.weather}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#B21002", fontSize: "16px" }}
                    >
                      {row.temperature}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#1767D4", fontSize: "16px" }}
                    >
                      {row.rainfall}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontSize: "16px", lineHeight: "20px" }}
                    >
                      <span style={{ fontSize: "16px", lineHeight: "30px" }}>
                        {row.windSpeed}
                      </span>
                      <SouthEastIcon />
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: "16px" }}>
                      {row.windPeriod}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}
