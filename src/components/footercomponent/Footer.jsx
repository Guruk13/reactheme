import React from "react";
import  styled  from '../../theme/index';

const StyledFooter = styled.footer`
    background: purple;
`;

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter >
                <h1> I'm just a title from the footer </h1>
            </StyledFooter>
        )
    }
}

export default Footer; 