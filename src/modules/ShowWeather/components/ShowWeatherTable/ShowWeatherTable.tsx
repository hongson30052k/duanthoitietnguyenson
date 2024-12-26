import "./ShowWeatherTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import weatherStoreId from "../../../../store/weatherStoreId";
import ModalHouseStore from "../../../../store/openWeatherModalHouse";
import ModalHouse from "../WeatherModalHouse/WeatherModalHouse";
import weatherHouseStoreId from "../../../../store/weatherHouseId";
const today: Date = new Date();
const weekday: number = today.getDay();
export default function ShowWeatherTable() {
  const { weatherId } = weatherStoreId();
  const { toggleDrawer } = ModalHouseStore();
  const { fetchDay } = weatherHouseStoreId();
  const handleClick = async (day: string) => {
    await fetchDay(day);
    toggleDrawer(true);
  };
  const getWeather = (offset: number) =>
    weatherId?.week_weather?.[(weekday + offset) % 7];

  const rows = Array.from({ length: 7 }, (_, index) => {
    const weather = getWeather(6 - index);
    return {
      day: weather?.day,
      temperature: weather?.temperature,
      wind: weather?.wind,
      precip: weather?.precip,
      weather_day: {
        night: weather?.weather_day?.night,
        morning: weather?.weather_day?.morning,
        afternoon: weather?.weather_day?.afternoon,
        evening: weather?.weather_day?.evening,
      },
    };
  });

  return (
    <div className="Home-content">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Đêm</TableCell>
              <TableCell align="center">Buổi sáng </TableCell>
              <TableCell align="center">Buổi chiều</TableCell>
              <TableCell align="center">Buổi tối</TableCell>
              <TableCell
                align="center"
                sx={{
                  "@media screen and (max-width: 985px)": {
                    display: "none",
                  },
                }}
              >
                Nhiệt độ cao/thấp
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  "@media screen and (max-width: 985px)": {
                    display: "none",
                  },
                }}
              >
                Lượng mưa
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  "@media screen and (max-width: 985px)": {
                    display: "none",
                  },
                }}
              >
                Gió
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.day}
                  onClick={() => handleClick(row.day)}
                  sx={{
                    ":hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                      cursor: "pointer",
                    },
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={row.weather_day?.night}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={row.weather_day?.morning}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={row.weather_day?.afternoon}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={row.weather_day?.evening}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#B21002",
                      fontWeight: 500,
                      fontSize: "16px",
                      "@media screen and (max-width: 985px)": {
                        display: "none",
                      },
                    }}
                  >
                    {row.temperature}° / {row.temperature}°
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#1767D1",
                      "@media screen and (max-width: 985px)": {
                        display: "none",
                      },
                    }}
                  >
                    {row.precip} mm
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      "@media screen and (max-width: 985px)": {
                        display: "none",
                      },
                    }}
                  >
                    {row.wind} m/s
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    <span className="table-link">Mở dự báo hàng giờ</span>
                    <ChevronRightIcon
                      sx={{
                        color: "#1767D1",
                        fontSize: "20px",
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalHouse />
    </div>
  );
}
