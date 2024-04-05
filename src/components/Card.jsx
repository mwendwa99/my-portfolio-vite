import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { urlFor } from "../../client";
import { OpenWith } from "@mui/icons-material";

export default function ImgMediaCard({ image, title, description, theme }) {
  return (
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
        alt={title}
        height="150"
        image={urlFor(image).url()}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
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
          onClick={() => alert("feature currently under development")}
        >
          <OpenWith fontSize="small" />
        </Fab>
      </CardActions>
    </Card>
  );
}
