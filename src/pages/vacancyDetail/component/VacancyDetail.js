import { useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MyComponent from "../../homepage/HomeStyle";

const JobInformationDetail = ({ bloc }) => {
  const { programDetail, navigate, getProgrambyId } = bloc();

  useEffect(() => {
    getProgrambyId();
  }, []);
  console.log("detail",programDetail);

  return (
    <>
    <MyComponent>
    {
      programDetail && (
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
       
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate("/vacancy")}>
            Back
          </Button>
          <Button size="small">
            Apply
          </Button>
        </CardActions>
      </Card>
      )
    }
    </MyComponent>
     
    </>
  );
};

export default JobInformationDetail;
