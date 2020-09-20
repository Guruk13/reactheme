
import styled from '../theme/index';
//https://www.webfx.com/blog/web-design/responsive-background-image/


export const SFittingImage = styled.div`
flex-grow : 1 ;
background-image: url(https://www.riotgames.com/darkroom/700/bde5bce620428b3099cff9b47b2c9fa2:94bab0e09b0307e591b485a55207f6bb/league-newlogo-banner.jpg);
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