import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DocumentScannerTwoTone } from "@mui/icons-material";
// assets
import resume from "../assets/documents/resume.pdf";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

export default function TransitionsModal({ title, icon }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Fab
        variant="extended"
        color="secondary"
        size="large"
        sx={{ m: 2, p: 2 }}
        onClick={handleOpen}
      >
        {/* <DocumentScannerTwoTone fontSize="medium" sx={{ mr: 1 }} /> */}
        {icon}
        {title}
      </Fab>
      <Modal
        keepMounted
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <embed src={resume} height="100%" width="100%" />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
