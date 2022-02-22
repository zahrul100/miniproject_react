
import * as React from 'react';
import ButtonAppBar from '../globalComponent/navbar/Appbar';
import Content from './Content';
import MyComponent from './HomeStyle';




const Homepage = () =>{
    return(
       <MyComponent>
         <ButtonAppBar />
         <Content />
       </MyComponent>
    )
}

export default Homepage;