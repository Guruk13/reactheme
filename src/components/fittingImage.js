
import styled from '../theme/index';
//https://www.webfx.com/blog/web-design/responsive-background-image/
//@todo merge into Mainstyles  with a prop url 
import huervosam from '../res/huervosam.jpg'


export const SFittingImage = styled.div`
max-width:100;
max-height:100;
background-image: url(${huervosam});
/* Background image is centered vertically and horizontally at all times */
background-position: center center;

/* Background image doesn't tile */
background-repeat: no-repeat;

/* Background image is fixed in the viewport so that it doesn't move when 
   the content's height is greater than the image's height */
background-attachment: fixed;

/* This is what makes the background image rescale based
   on the container's size */
background-size: cover;

/* Set a background color that will be displayed
   while the background image is loading */
background-color: #464646;
`;