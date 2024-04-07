import { useState, useEffect } from "react";
import {
  Typography,
  Modal,
  Fade,
  Box,
  Fab,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
import { urlFor } from "../../client";
import { OpenWith, Close, OpenInNew } from "@mui/icons-material";
import { PortableText } from "@portabletext/react";
import Carousel from "./Carousel";

export default function ImgMediaCard({ project, theme }) {
  const [open, setOpen] = useState(false);
  const [modalHeight, setModalHeight] = useState("90%");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Dynamically adjust modal height based on content
    const modalContent = document.getElementById("modal-content");
    if (modalContent) {
      const contentHeight = modalContent.scrollHeight;
      if (contentHeight > window.innerHeight * 0.9) {
        setModalHeight("90%");
      } else {
        setModalHeight(`${contentHeight}px`);
      }
    }
  }, [open, project]);

  return (
    <>
      <Modal
        keepMounted
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            id="modal-content"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "90%", md: "60%" },
              height: modalHeight,
              overflowY: "auto", // Enable vertical scrolling
              "&::-webkit-scrollbar": {
                width: "10px", // Width of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor:
                  theme.palette.mode === "light" ? "#00776c" : "#fafafa", // Color of the thumb
                borderRadius: "5px", // Border radius of the thumb
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor:
                  theme.palette.mode === "light" ? "#f0f0f0" : "#333", // Color of the track
              },
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 1,
              borderRadius: 2,
            }}
          >
            <Fab
              variant="extended"
              color="secondary"
              size="small"
              sx={{
                position: "absolute",
                boxShadow: "none",
                right: 0,
                top: 0,
                margin: 2,
                backgroundColor:
                  theme.palette.mode === "light" ? "#fafafa" : "#00776c",
              }}
              onClick={handleClose}
            >
              <Close fontSize="small" />
            </Fab>
            <Carousel
              theme={theme}
              images={project?.images}
              title={project?.title}
            />
            <Box
              className="d-flex"
              component="a"
              onClick={() => window.open(project?.link, "_blank")}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  color: theme.palette.mode === "light" ? "#00776c" : "#fafafa",
                }}
              >
                {project?.title}
              </Typography>
              <Fab
                variant="extended"
                color="secondary"
                size="small"
                sx={{
                  boxShadow: "none",
                  marginLeft: 2,
                }}
              >
                <OpenInNew fontSize="small" />
              </Fab>
            </Box>
            <PortableText value={project?.summary} />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Stack: {Object.values(project?.stack).join(", ")}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Year: {new Date(project?.year).getFullYear()}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "inline-block",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          alt={project?.title}
          height="150"
          image={urlFor(project?.images[0]).url()}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project?.title}
          </Typography>
          <Typography variant="body2">{project?.description}</Typography>
        </CardContent>
        <CardActions style={{ position: "absolute", bottom: 0, right: 0 }}>
          <Fab
            variant="extended"
            color="secondary"
            size="small"
            sx={{
              boxShadow: "none",
              border:
                theme.palette.mode === "light"
                  ? `1px solid #00776c`
                  : `1px solid #fafafa`,
              borderRadius: 2,
              width: 50,
            }}
            onClick={handleOpen}
          >
            <OpenWith fontSize="small" />
          </Fab>
        </CardActions>
      </Card>
    </>
  );
}
