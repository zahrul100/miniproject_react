
import * as React from 'react';
import Footer from '../globalComponent/footer/Footer';
import ResponsiveAppBar from '../globalComponent/navbar/Appbar';
import Content from './Content';
import MyComponent from './HomeStyle';




const Homepage = () =>{
    return(
       <MyComponent>
         <ResponsiveAppBar />
         <Content />
         <Footer />
       </MyComponent>
    )
}

export default Homepage;