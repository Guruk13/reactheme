import React, { Component } from 'react';
import { SFittingImage } from './fittingImage.js';
import About from './random/About.js';
import styled from '../theme/index';

const StyledDiv = styled.div`
flex-direction: column;
`

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
export default Home;