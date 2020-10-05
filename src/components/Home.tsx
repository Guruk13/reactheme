import React, { FunctionComponent } from 'react';
import { FullHeightSectionWBI } from '../MainStyles.js'
import styled from '../theme/index';
import huervo from '../res/huervo.jpg';
import samrai from '../res/samrai.webp';


//https://stackoverflow.com/questions/53920405/change-background-image-with-styled-component

const SHWrapper = styled.div`

`
const StyledDiv = styled.div`
	display: flex;
    width: 100%; 
    height: 100%; 
`
const contained =styled.div`
	flex: 1 1 100%;
	min-width: 0px;
`
export const Home: FunctionComponent = () =>
            <SHWrapper>
                <FullHeightSectionWBI style={{backgroundImage: `url(${huervo})`}} > <StyledDiv></StyledDiv>
                </FullHeightSectionWBI>
                <FullHeightSectionWBI style={{backgroundImage: `url(${samrai})`}} >
                </FullHeightSectionWBI>

            </SHWrapper>     

export default Home;