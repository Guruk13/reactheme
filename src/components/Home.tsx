import React, { FunctionComponent } from 'react';
import { FullHeightSectionWBI, GRImage, GRImagetag, FigCaption } from '../MainStyles.js'
import styled from '../theme/index';
import huervo from '../res/huervo.jpg';
import samrai from '../res/samrai.webp';

import vitruve from '../res/vitruve.jpeg';


//https://stackoverflow.com/questions/53920405/change-background-image-with-styled-component
//https://github.com/FreddyFY/styled-container-query

const SHWrapper = styled.div`       
`;





export const Home: FunctionComponent = () =>
            <SHWrapper>
                <FullHeightSectionWBI style={{backgroundImage: `url(${huervo})`}} > 
                </FullHeightSectionWBI>
                <FullHeightSectionWBI style={{backgroundImage: `url(${samrai})`}} >
                </FullHeightSectionWBI>
                <GRImage><GRImagetag src={vitruve}/> <FigCaption> Boom ,whaddya get ?</FigCaption></GRImage>

            </SHWrapper>     

export default Home;