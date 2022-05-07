import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import { CircularProgress, Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DocumentScannerTwoTone } from "@mui/icons-material";
// assets
import axios from "axios";

const token = import.meta.env.VITE_APP_airtableToken;

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

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    title: (
      <Skeleton
        variant="text"
        width={50}
        animation="pulse"
        sx={{ m: 0, p: 0 }}
      />
    ),
    icon: (
      <CircularProgress
        size={20}
        variant="indeterminate"
        thickness={6}
        sx={{ color: "primary.contrastText", mr: 1 }}
      />
    ),
    attachments: null ? <CircularProgress /> : [],
    version: <Skeleton />,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.airtable.com/v0/appJjjwtxcQuzoQcH/documents/${documentsTable["resume"]}`,
        config
      )
      .then((res) =>
        setData({
          ...res.data.fields,
          icon: <DocumentScannerTwoTone fontSize="medium" sx={{ mr: 1 }} />,
        })
      )
      .catch((error) => console.log(error));
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
        {data.icon}
        <Typography variant="button" sx={{ fontWeight: 700 }}>
          {data.title}
        </Typography>
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
            <embed
              src={data.attachments.map((item) => item.url)}
              height="100%"
              width="100%"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
