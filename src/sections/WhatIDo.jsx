import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWhatIDo } from "../redux/slices/contentSlice";
import { Container, Box, Grid, Typography, Skeleton } from "@mui/material";

export default function WhatIDo() {
  const dispatch = useDispatch();
  const whatido = useSelector((state) => state.content.whatido);

  useEffect(() => {
    dispatch(getWhatIDo());
  }, []);

  const isEmpty = (object) => {
    if (Object.keys(object).length === 0) {
      return true;
    } else if (whatido.data.length > 0) {
      return false;
    }
  };
  return (
    <Container id="whatido" maxWidth="md">
      <Box my={4} py={2}>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isEmpty(whatido) === false ? (
            whatido.data.map((item, index) => (
              <Grid key={index} item xs={6} sm={4} md={4}>
                <img src={item.image} height={100} width="100%" alt="skills" />
                <Typography
                  variant="h6"
                  gutterBottom
                  align="center"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                  component="h1"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  align="center"
                  component="p"
                >
                  {item.description}
                </Typography>
              </Grid>
            ))
          ) : (
            <Skeleton
              variant="text"
              width={100}
              animation="pulse"
              sx={{ m: 0, p: 0 }}
            />
          )}
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700 }}
              align="left"
            >
              Frontend
            </Typography>
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="html"
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="css"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              alt="javascript"
            />
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="react"
            />
            <img
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt="redux"
            />
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="next"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700 }}
              align="left"
            >
              Backend
            </Typography>
            <img
              src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
              alt="express"
            />
            <img
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              alt="node"
            />
            <img
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              alt="mysql"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="mongodb"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="postgresql"
            />
            <img
              src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
              alt="python"
            />
            <img
              src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
              alt="django"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
