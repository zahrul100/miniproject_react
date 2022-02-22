import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../../../asset/icon/logo.svg";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <Grid item md={8} sm={12} xs={12}>
          <Grid container>
            <Grid item md={2}>
              <img
                src={logo}
                alt="tca-logo"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid md={5}>
              <Typography
                component="div"
                textAlign="left"
                fontFamily="Montserrat"
                fontWeight="400"
                marginLeft="20px"
              >
                Jl. Jend Sudirman no.Kav 21 RT 10/ RW 1
                <br />
                Kuningan, Karet, Kecamatan Setiabudi
                <br />
                Kota Jakarta Selatan, DKI Jakarta 12920, Indonesia
                <br />
                (021) 5018 6888
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Typography
            component="div"
            textAlign="left"
            fontFamily="Montserrat"
            fontWeight="600"
            marginLeft="20px"
          >
            CONNECT WITH US
          </Typography>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
