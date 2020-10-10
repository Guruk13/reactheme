import React, { FunctionComponent } from 'react';
import { FullHeightSectionWBI } from '../MainStyles.js'
import styled from '../theme/index';
import huervo from '../res/huervo.jpg';
import samrai from '../res/samrai.webp';
import vitruve from '../res/vitruve.jpeg';


//https://stackoverflow.com/questions/53920405/change-background-image-with-styled-component

const SHWrapper = styled.div`

`;
const GRImage = styled.div`
height: 100vh;
width: auto;
background: yellow ; 
`

export const Home: FunctionComponent = () =>
            <SHWrapper>
                <FullHeightSectionWBI style={{backgroundImage: `url(${huervo})`}} > 
                </FullHeightSectionWBI>
                <FullHeightSectionWBI style={{backgroundImage: `url(${samrai})`}} >
                </FullHeightSectionWBI>

                <GRImage><img src={vitruve} height="100%" alt="vitruve man ayayaya " ></img></GRImage>

            </SHWrapper>     

export default Home;