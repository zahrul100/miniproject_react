import {
  CardActions,
  CardContent,
  Card,
  Typography,
  Button,
} from "@mui/material";
import MyComponent from "../../homepage/HomeStyle";
import { useEffect } from "react";
import program1 from "../../../asset/image/program1.png";
import program2 from "../../../asset/image/program2.png";
import program3 from "../../../asset/image/program3.png";
import program4 from "../../../asset/image/program4.png";
import Box from "@mui/material/Box";
import ResponsiveAppBar from '../../globalComponent/navbar/Appbar';
import Footer from "../../globalComponent/footer/Footer";
import PaginationRounded from "../../globalComponent/pagination/Pagination";

const Vacancy = ({ bloc }) => {
  const { list, getListJobInformation, navigate } = bloc();
  const program = [
    {
      id: 1,
      backgroundImage: `url(${program1})`,
    },
    {
      id: 2,
      backgroundImage: `url(${program2})`,
    },
    {
      id: 3,
      backgroundImage: `url(${program3})`,
    },
    {
      id: 4,
      backgroundImage: `url(${program4})`,
    },
  ];
  useEffect(() => {
    getListJobInformation();
  }, []);

  return (
    <>
      <MyComponent>
        <ResponsiveAppBar />
        <Typography
          variant="h3"
          textAlign="center"
          fontFamily="Montserrat Alternates"
          fontSize="55px"
          fontWeight="550"
          letterSpacing="7px"
          sx={{ color: "#434343" }}
          paddingY="40px"
        >
          Find your dream career in
          <br />
          Techconnect Academy
        </Typography>
        <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
        {list.map((value, idx) => {
          return (
              <Card
                key={idx}
                sx={{
                  backgroundImage: `url(${program4})`,
                  height: "300px",
                  width: "250px",
                  borderRadius: "15px",
                  marginX:"10px"
                }}
              >
                <CardContent
                  sx={{
                    marginY:"20px"
                  }}
                >
                  <Typography variant="h5" component="div" textAlign="center" color="#FFFF" fontFamily="Montserrat" fontWeight="600">
                    {value.headline}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" textAlign="center" 
                  sx={{backgroundColor:"#521582", color:"#FFFF", fontFamily:"Montserrat", fontSize:"16px", marginLeft:"20px"}}
                  onClick={() => navigate(`/vacancy/${value.id}`)}>
                    See Details
                  </Button>
                </CardActions>
              </Card>
            
          );
        })}
        </Box>
        <PaginationRounded />
        <Footer />
      </MyComponent>
    </>
  );
};
export default Vacancy;
