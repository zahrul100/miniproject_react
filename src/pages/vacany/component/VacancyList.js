import {
  CardActions,
  CardContent,
  Card,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import MyComponent from "../../homepage/HomeStyle";
import { useEffect } from "react";
import program1 from "../../../asset/image/program1.png";
import program2 from "../../../asset/image/program2.png";
import program3 from "../../../asset/image/program3.png";
import program4 from "../../../asset/image/program4.png";
import ResponsiveAppBar from "../../globalComponent/navbar/Appbar";
import Footer from "../../globalComponent/footer/Footer";
import PaginationRounded from "../../globalComponent/pagination/Pagination";

const Vacancy = ({ bloc }) => {
  const { list, getListJobInformation, navigate } = bloc();
  useEffect(() => {
    getListJobInformation();
  }, []);

  return (
    <>
      <MyComponent>
        <ResponsiveAppBar />
        <Typography
            textAlign="center"
            sx={{
              typography: { lg: "h3", sm: "h4", xs: "h4" },
              fontWeight: {
                lg: "600",
                md: "600",
                sm: "600",
                xs: "600",
              },
              fontFamily: {
                lg: "Montserrat Alternates",
                md: "Montserrat Alternates",
                sm: "Montserrat Alternates",
                xs: "Montserrat Alternates",
              },
            }}
          >
          Find your dream career in
          <br />
          Techconnect Academy
        </Typography>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {list.map((value, idx) => {
            return (
              <Grid   key={idx} item md={6} sm={12} xs={12} sx={{ marginBottom: "15px" }}>
                <Card
                  sx={{
                    backgroundImage: `url(${value.photo_url})`,
                    height: "300px",
                    width: "250px",
                    borderRadius: "15px",
                    marginX: "10px",
                  }}
                >
                  <CardContent
                    sx={{
                      marginY: "20px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      textAlign="center"
                      color="#FFFF"
                      fontFamily="Montserrat"
                      fontWeight="600"
                    >
                      {value.headline}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{
                        backgroundColor: "#521582",
                        color: "#FFFF",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      onClick={() => navigate(`/vacancy/${value.id}`)}
                    >
                      See Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <PaginationRounded />
        <Footer />
      </MyComponent>
    </>
  );
};
export default Vacancy;
