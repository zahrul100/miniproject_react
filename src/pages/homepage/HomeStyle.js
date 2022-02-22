import { styled } from '@mui/system';
import background from '../../asset/image/background.jpg'

const MyComponent = styled('div')({
    backgroundImage: `url(${background})`,
    backgroundSize:"contain",
    minHeight:"100vh"
  });

export default MyComponent;