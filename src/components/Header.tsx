
import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import styled from '../theme/index';

const StyledHeader = styled.header`
    background: purple;
`;


type HeaderProps = {

}

export const Header: FunctionComponent<HeaderProps> = ({ children }) =>
  <StyledHeader>
    {children}
  </StyledHeader>

export default Header;