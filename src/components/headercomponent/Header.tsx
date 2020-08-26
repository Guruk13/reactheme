import React from "react";
import  styled  from '../../theme/index';

const StyledHeader = styled.header`
    background: purple;
`;

function Header (props) {
    render() {
        return (
            <StyledHeader >
                {this.props.children}
            </StyledHeader>
        )
    }
}

export default Header; 