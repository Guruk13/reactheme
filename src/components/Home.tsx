<<<<<<< HEAD
import React, { FunctionComponent } from 'react';
import { FullHeightSectionWBI } from '../MainStyles.js'
=======
import React, { Component } from 'react';
import { SFittingImage } from './fittingImage.js';
import About from './random/About.js';
>>>>>>> parent of 32a5aa3... finnallly some full height full width section , no backgroun, something
import styled from '../theme/index';
import huervo from '../res/huervo.jpg';
import samrai from '../res/samrai.webp';

<<<<<<< HEAD

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
=======
const StyledDiv = styled.div`
flex-direction: column;
>>>>>>> parent of 32a5aa3... finnallly some full height full width section , no backgroun, something
`
export const Home: FunctionComponent = () =>
            <SHWrapper>
                <FullHeightSectionWBI style={{backgroundImage: `url(${huervo})`}} > <StyledDiv></StyledDiv>
                </FullHeightSectionWBI>
                <FullHeightSectionWBI style={{backgroundImage: `url(${samrai})`}} >
                </FullHeightSectionWBI>

            </SHWrapper>     

<<<<<<< HEAD
=======
class Home extends Component{
    render(){
        return(
            <StyledDiv>
                <SFittingImage></SFittingImage>
                <About></About>
            </StyledDiv>
            
        );
    }
}
>>>>>>> parent of 32a5aa3... finnallly some full height full width section , no backgroun, something
export default Home;