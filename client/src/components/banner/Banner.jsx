
import { styled, Box, Typography } from '@mui/material';

// const Image = styled(img)`
//     width: 100%;
//     background-image:url(./bannerpicture.jpg);
//     height: 50vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #000000;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
         <img src={ require('./bannerpicture.jpg')} style={{
          width:'100%'
         }}>

         </img>
    )
}

export default Banner;