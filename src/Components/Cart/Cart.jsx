import React, { useState } from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import cartIcon from "../../static/images/cart.svg";
import { Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

const CartHeader = styled("div")({
  maxHeight: "10vh",
  background: "#000",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  cursor: "pointer",
});

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const list = () => (
    <Box
      sx={{ width: "40vw", height: "100%", background: "#c9ccd1" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <CartHeader>
        <Typography variant="h6">My Cart 0 Items</Typography>
        <CloseOutlined color="#fff" onClick={toggleDrawer} />
      </CartHeader>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <>
        <Button fullWidth onClick={toggleDrawer}>
          <img src={cartIcon} alt="cart_icon" width={40} height={40} />
          {0} Items
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={isOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          {list()}
        </SwipeableDrawer>
      </>
    </div>
  );
};

export default Cart;
