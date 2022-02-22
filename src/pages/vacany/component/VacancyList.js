import { CardActions, CardContent, Card, Typography, Button } from "@mui/material";
import MyComponent from "../../homepage/HomeStyle";
import { useEffect } from "react";
import program1 from '../../../asset/image/program1.png';
import program2 from '../../../asset/image/program2.png';
import program3 from '../../../asset/image/program3.png';
import program4 from '../../../asset/image/program4.png';


const Vacancy = ({ bloc }) => {
  const { list, getListJobInformation, navigate } = bloc();
  const program = [{
    id:1, backgroundImage:`url(${program1})`
  },
  {
    id:2, backgroundImage:`url(${program2})`
  },
  {
    id:3, backgroundImage:`url(${program3})`
  },
  {
    id:4, backgroundImage:`url(${program4})`
  },
  ]
  useEffect(() => {
    getListJobInformation();
  }, []);

  return (
    <>
      <MyComponent>
        <Typography
          variant="h3"
          textAlign="center"
          fontFamily='Montserrat Alternates'
          fontSize="55px"
          fontWeight="550"
          letterSpacing="7px"
          sx={{ color: "#434343" }}
        >
          Find your dream career in
          <br />
          Techconnect Academy
        </Typography>
        {list.map((value, idx)=>{
          
          return(
            <Card
            key={idx}
            sx={{
              backgroundImage: `url(${program4})`,
              height:"300px", 
              width:"250px", 
              borderRadius:"15px",
            }}>
              <CardContent sx={{
                display:"flex", 
                justifyContent:"center", 
                alignItems:"center"
              }}>
                <Typography variant="h5" component="div">
                  {value.headline}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() =>navigate("/vacancy")}>See Details</Button>
              </CardActions>
            </Card>
          )
        }
        )}
      </MyComponent>
    </>
  );
};
export default Vacancy;
