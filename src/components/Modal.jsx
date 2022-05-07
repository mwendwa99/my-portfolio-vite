import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import { CircularProgress, Grid, Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DocumentScannerTwoTone } from "@mui/icons-material";
// assets
import resume from "../assets/documents/resume.pdf";
import axios from "axios";

const token = "keytCp2fZCHBon4p5";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const documentsTable = {
  resume: "recmTZRJcg1KZEnfE",
};

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    title: <Skeleton />,
    attachments: <CircularProgress />,
    version: <Skeleton />,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.airtable.com/v0/appJjjwtxcQuzoQcH/documents/${documentsTable["resume"]}`,
        config
      )
      .then((res) => setData(res.data));
  }, []);

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
            {/* <embed src={resume} height="100%" width="100%" /> */}
            <embed src={data.attachments} height="100%" width="100%" />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
