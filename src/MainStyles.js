
import styled from './theme/index';
import { NavLink } from 'react-router-dom';
import styledContainerQuery from 'styled-container-query';



export const NavbarLi = styled.li`
  font-family:'MenuItems' ;
  margin: 15px;
  font-size: 32px;
  border-radius: 25px;
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
    list-style-type: none;
  `

//order of some of some of the following css rules matter
export const SNavLink = styled(NavLink)`
color: ${({ theme }) => theme.lightColorText};
text-decoration: none;
outline: 0;
&.active {
  border-radius: 25px;
  border: 5px solid ${({ theme }) => theme.lightColorText};
  padding: 15px
}
border-radius: 25px;
border: 5px solid ${({ theme }) => theme.navColor};
padding: 15px
`;

export const FullHeightSection = styled.section`
height: 100vh;
//set relative for all its descendants , set a foot in your own legacy 
position: relative;
`

//pass in props  style={{backgroundImage: `url(${huervo})`}}
export const FullHeightSectionWBI = styled(FullHeightSection)`
margin-top: 50px;
margin-bottom: 50px;
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
background-color: ${({ theme }) => theme.background};
`
const phi = 1.6180339887498948482;
const aphi = 0.61803;
const bphi = 0.38197;
const basewidth = 100;
export const GRImagetag = styledContainerQuery.img`
    height: 100%;
    max-height: 100%;
    min-width: ${basewidth * aphi}%;
    width: ${basewidth * aphi}%;
    alt: "vitruve man ayayaya ";

    &:container(max-width: 500px) {
      width: 100%;
    }

`

export const GRImage = styled.figure`
height : 100%;
background: ${({ theme }) => theme.background};
display: flex ; 
position: relative;
`
export const FigCaption = styled.figcaption`
    font-family: 'navBarFont', cursive;
    font-size: 38px;
    //what's malking the bottom card 
    position: absolute;
    align-self: flex-end;
`


