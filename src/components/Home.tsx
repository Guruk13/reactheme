import React, { FunctionComponent } from 'react';
import { FullHeightSectionWBI } from '../MainStyles.js'
import styled from '../theme/index';
import huervo from '../res/huervo.jpg';
import samrai from '../res/samrai.webp';


//https://stackoverflow.com/questions/53920405/change-background-image-with-styled-component

const SHWrapper = styled.div`

`


export const Home: FunctionComponent = () =>
            <SHWrapper>
                <FullHeightSectionWBI style={{backgroundImage: `url(${huervo})`}} > 
                </FullHeightSectionWBI>
                <FullHeightSectionWBI style={{backgroundImage: `url(${samrai})`}} >
                </FullHeightSectionWBI>

            </SHWrapper>     

export default Home;