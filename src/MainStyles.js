
import styled from './theme/index';
import { NavLink } from 'react-router-dom';



export const NavbarLi = styled.li`
  font-family:'MenuItems' ;
  margin: 15px;
  font-size: 32px;

  border-radius: 25px;
  border: 5px solid red
  padding: 15px

  `

export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  `
export const NavDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 2;
    `;

export const LogoTitle = styled.h2`
    font-family: 'navBarFont', cursive;
    font-size: 38px;
    `;

export const NavUl = styled.ul`
    display: flex;
    order: 1;
    width: 100 %;
    margin - top: 1em;
    padding - left: 3.5em;
    list-style-type: none;&
  `

//order of some of some of the following css rules matter
export const SNavLink = styled(NavLink)`
color: ${({ theme }) => theme.lightColorText};
text-decoration: none;
&.active {
  border-radius: 25px;
  border: 5px solid ${({ theme }) => theme.lightColorText};
  padding: 15px
}
border-radius: 25px;
border: 5px solid ${({ theme }) => theme.navColor};
padding: 15px
`;

export const FullHeightSectionWBI = styled.section`
height: auto;
min-height: 800px;
background-color: ${props => props.color};;

background-image: url(${props => props.color});
/* Background image is centered vertically and horizontally at all times */
background-position: center center;

/* Background image doesn't tile */
background-repeat: no-repeat;

/* Background image is fixed in the viewport so that it doesn't move when 
the content's height is greater than the image's height */
background-attachment: initial;

/* This is what makes the background image rescale based
on the container's size */
background-size: cover;

/* Set a background color that will be displayed
while the background image is loading */
background-color: #464646;
`
export const FullHeightSection = styled.section`
height: auto;
min-height: 800px;
`
