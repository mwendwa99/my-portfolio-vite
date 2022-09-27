import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import { CircularProgress, Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DocumentScannerTwoTone } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getCv } from "../redux/slices/contentSlice";
import { isEmpty } from "../utils/appMethods";
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
  const dispatch = useDispatch();
  const cv = useSelector((state) => state.content.cv);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const isEmpty = (object) => {
    for (var property in object) {
      if (object.hasOwnProperty(property)) return false;
    }
    return true;
  };

  useEffect(() => {
    const data = dispatch(getCv());
    setData(() => cv);
    data === "undefined" || isEmpty(data)
      ? setLoading(true)
      : setLoading(false);
  }, []);

  console.log("data", data);
  console.log("empty", isEmpty(data));
  console.log("loading", loading);

  return (
    <div>
      <Fab
        variant="extended"
        color="secondary"
        size="large"
        sx={{ m: 2, p: 2 }}
        onClick={handleOpen}
      >
        {loading ? (
          <>
            <CircularProgress
              size={20}
              variant="indeterminate"
              thickness={6}
              sx={{ color: "primary.contrastText", mr: 1 }}
            />
            <Skeleton
              variant="text"
              width={50}
              animation="pulse"
              sx={{ m: 0, p: 0 }}
            />
          </>
        ) : (
          <>
            <DocumentScannerTwoTone fontSize="small" />
            <Typography variant="button" sx={{ fontWeight: 700 }}>
              my Resume
            </Typography>
          </>
        )}
        <Typography variant="button" sx={{ fontWeight: 700 }}>
          {/* {data.title} */}
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
            {/* <iframe
              src={cv["cv"].url}
              type="text/html"
              height="100%"
              width="100%"
              title={cv["cv"].title}
            >
              sOME THES
            </iframe> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
