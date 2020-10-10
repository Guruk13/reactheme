import React from "react";
import  styled  from '../theme/index';

const StyledFooter = styled.footer`
    background-color:${({ theme }) => theme.navColor};
    padding: 20px ; 
`;

const StyledH1 = styled.h1`
    color:${({ theme }) => theme.lightColorText};
    font-family: 'navBarFont', cursive;
`

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter >
                <StyledH1> I'm just a title from the footer </StyledH1>
            </StyledFooter>
        )
    }
}

export default Footer; 