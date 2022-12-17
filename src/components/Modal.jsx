import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { DocumentScannerTwoTone } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getCv } from "../redux/slices/contentSlice";

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

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.content.cv);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getCv());
  }, []);

  return (
    <div>
      <Fab
        variant="extended"
        color="secondary"
        size="large"
        sx={{ m: 2, p: 2 }}
        onClick={handleOpen}
      >
        <>
          <DocumentScannerTwoTone fontSize="small" />
          <Typography variant="button" sx={{ fontWeight: 700 }}>
            my Resume
          </Typography>
        </>
      </Fab>
      <Modal
        keepMounted
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <embed
              src={data.url}
              type="text/html"
              height="100%"
              width="100%"
              title={data.title}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
