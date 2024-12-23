import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ModalStore from "../../store/openModalMenuStore";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export default function TemporaryDrawer() {
  const { open, toggleDrawer } = ModalStore();
  const DrawerList = (
    <>
      <CloseIcon
        onClick={() => toggleDrawer(false)}
        sx={{
          padding: "5px",
          cursor: "pointer",
          mt: 1,
          mb: 3,
          mr: 2,
          position: "absolute",
          right: 0,
          top: 0,
          "&:hover": {
            padding: "5px",
            backgroundColor: "#F7F4F2",
            borderRadius: "5px",
          },
        }}
      />
      <Box
        sx={{ width: 400, mt: 7, ml: 2, mr: 4 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
      >
        <List>
          {[
            "Bản đồ",
            "Cảnh báo nguy hiểm",
            "Nhiệt độ ẩm",
            "Độ sâu tuyết",
            "Đèo núi",
            "Liên hệ",
          ].map((text, index) => (
            <>
              <Divider />
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      padding: "8px",
                      fontSize: "16px",
                    }}
                    key={index}
                  >
                    {text}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </>
          ))}
          <Divider />
        </List>
        <Typography sx={{ display: "flex", alignItems: "end", mt: 8 }}>
          <Typography sx={{ mt: 2, ml: 2, fontSize: "14px", fontWeight: 500 }}>
            Yr là một dịch vụ từ
          </Typography>
          <Typography sx={{ mt: 2, ml: 2 }}>
            <img
              src="https://seeklogo.com/images/N/NRK-logo-153A075AD9-seeklogo.com.png"
              alt=""
              style={{
                width: "54px",
                height: "34px",
              }}
            />
          </Typography>
          <Typography
            sx={{ mt: 2, ml: 2, fontSize: "14px", fontWeight: "bold" }}
          >
            @2024 Yr. All Rights
          </Typography>
        </Typography>
      </Box>
    </>
  );

  return (
    <div>
      <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}