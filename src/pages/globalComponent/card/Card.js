import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import program1 from '../../../asset/image/program1.png';
import program2 from '../../../asset/image/program2.png';
import program3 from '../../../asset/image/program3.png';
import program4 from '../../../asset/image/program4.png';



const BasicCard = (props) => {

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
  return( 
    <>
    {
      program.map((val,idx)=>{
        return(
          <Card 
          sx={{
            backgroundImage: val.backgroundImage, 
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
                {props.headline.headline}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => props.navigateTo()}>See Details</Button>
            </CardActions>
          </Card>
        );
      })
    }
  
    </>
  )
}

export default BasicCard;