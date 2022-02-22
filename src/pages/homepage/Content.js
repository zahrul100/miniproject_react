import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import image1 from "../../asset/image/image-intro.png";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Content = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <Item>
            <Typography variant="h3">Prepare for a career</Typography>
            <Typography variant="h3">in The Future of Programming</Typography>
            <Typography variant="h6">With Techconnect Academy</Typography>
            <div>
              <Button variant="contained" sx={{backgroundColor:"#521582"}}>Sign Up</Button>
              <Button variant="outlined" sx={{color:"#521582", borderColor :"#521582"}}>Login</Button>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <img
              src={image1}
              style={{ width: "100%", height: "500px" }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
