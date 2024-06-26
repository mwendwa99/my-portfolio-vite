import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollTo = (e) => {
    const element = document.getElementById(e.target.id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
    handleClose();
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon color="action" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem id="whatido" onClick={(e) => scrollTo(e)}>
          What I Do
        </MenuItem>
        <MenuItem id="projects" onClick={(e) => scrollTo(e)}>
          Projects
        </MenuItem>
        <MenuItem id="contact" onClick={(e) => scrollTo(e)}>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
