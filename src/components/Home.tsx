import React, { Component } from 'react';
import { SFittingImage } from './fittingImage.js';
import { FullHeightSection} from '../MainStyles.js';
import About from './random/About.js';
import styled from '../theme/index';
import huervo from '../res/huervo.jpg';

const SHWrapper = styled.div`
`

class Home extends Component{
    render(){
        return(
            <SHWrapper>
                <FullHeightSection color="red" >

                </FullHeightSection>
            </SHWrapper>     
        );
    }
}
export default Home;