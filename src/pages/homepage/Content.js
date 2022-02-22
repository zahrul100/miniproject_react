import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardContent, Typography, Card } from "@mui/material";
import image1 from "../../asset/image/image-intro.png";
import Button from "@mui/material/Button";
import image2 from "../../asset/image/homepage2.png";
import program1 from "../../asset/image/program1.png";
import program2 from "../../asset/image/program2.png";
import program3 from "../../asset/image/program3.png";
import program4 from "../../asset/image/program4.png";

const Content = () => {
  return (
    <Box>
      <Grid container sx={{paddingTop:"10px"}}>
        <Grid items md={5} sm={12} xs={12}  >
          <Typography
            variant="h3"
            fontFamily="Montserrat Alternates"
            fontWeight="600"
            textAlign="left"
          >
            Prepare for a career in The Future of Programming
          </Typography>
          <Typography
            variant="h6"
            fontFamily="Montserrat Alternates"
            paddingTop="10px"
            textAlign="center"
          >
            With Techconnect Academy
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#521582", marginRight: "20px" }}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#521582", borderColor: "#521582" }}
            >
              Login
            </Button>
          </Box>
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <img src={image1} alt="image1" style={{maxWidth:"745px"}} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} sm={12} xs={12}>
          <img src={image2} alt="image2" />
        </Grid>

        <Grid items md={6} sm={12} xs={12}>
          <Typography
            variant="h3"
            fontFamily="Montserrat Alternates"
            fontWeight="600"
            letterSpacing="5px"
            textAlign="center"
          >
            Techconnect Academy
          </Typography>
          <br />
          <Typography fontFamily="Montserrat Alternates" textAlign="center">
            is a place of diserve community that <br /> encourages students to
            think globally and citizens that crave <br />
            for a better future, for themselves, society, community through
            digital <br /> and technology education
          </Typography>
          <Box textAlign="right" marginRight="20px" marginTop="10px">
            <Button variant="contained" sx={{ backgroundColor: "#521582" }}>
              See Details
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="h3"
        fontFamily="Montserrat Alternates"
        fontWeight="500"
        letterSpacing="5px"
        color="#343434"
        textAlign="center"
        paddingTop="10px"
      >
        Program We Offer at <br /> Techconnect Academy
      </Typography>

      <Grid container paddingX="10px" marginTop="30px">
        <Grid item md={3} sm={12} xs={12} sx={{marginBottom:"10px"}}>
          <Card
            sx={{
              borderRadius: "15px",
              width: "250px",
              height: "300px",
              backgroundImage: `url(${program1})`,
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="flex-end">
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="600"
                  color="#FFFF"
                  textAlign="center"
                >
                  Vocational Program
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{marginBottom:"10px"}}>
          <Card
            sx={{
              borderRadius: "15px",
              width: "250px",
              height: "300px",
              backgroundImage: `url(${program2})`,
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="flex-end">
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="600"
                  color="#FFFF"
                  textAlign="center"
                >
                  Fresh Graduate Program
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{marginBottom:"10px"}}>
          <Card
            sx={{
              borderRadius: "15px",
              width: "250px",
              height: "300px",
              backgroundImage: `url(${program3})`,
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="flex-end">
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="600"
                  color="#FFFF"
                  textAlign="center"
                >
                  IT <br/> Professional Program
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{marginBottom:"10px"}}>
          <Card
            sx={{
              borderRadius: "15px",
              width: "250px",
              height: "300px",
              backgroundImage: `url(${program4})`,
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="flex-end">
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="600"
                  color="#FFFF"
                  textAlign="center"
                >
                  IT Development Program
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
