/*
Make a Navbar, load it. The prophets will be done.
*/

import React from 'react';
import styled from 'styled-components';
import { IRoute, withRoutes } from 'infrastructure-components';
import { Link, withRouter } from 'react-router-dom';
import './navbar-component/Navbar.scss';

/** fixed height of the navbar*/
const navBarHeight = "1em";

export const NavBar = styled.div`   
    /** fixes the navbar to the top */
    position: fixed;
    top:0;
    
    /** let the navbar take the whole width and do not scroll horizontally */
    display: block;
    overflow: hidden;
    width:100%;
    
    /** sets a fixed height that we can use when styling the content */
    height: ${navBarHeight};
    
    /** make sure the navbar is in front of the content*/
    z-index: 5;
    
    background-color: #888;
   
`;

export const Content = styled.div`
    /** leave some space at the top for the navbar */
    margin-top: ${navBarHeight};
    
    /** put the content behind the navbar (smaller z-index)*/
    z-index: 0;
    
    background-color: #EEE;
`;


const PositionedLink = styled(Link)`
    /* ... */
    position: relative;
    float: ${props => props.left ? "left" : "right"};
    display:inline-block;
    ${props => props.active ? `
        background-color: #333;
        color: #FFF;
    ` : ""}  
`;


interface IWithNavigationProps {
    /** attached through withRoutes: a list of all the specified <Route /> components in our app */
    routes: Array<IRoute>,

    /** any children that we get passed from the parent component*/
    children: any

    location: any,
}

/**
 * A functional React component as a wrapper for a page with navigation.
 * Renders the page's navbar and content
 */
const WithNavigation = (props: IWithNavigationProps) => {



    return <div>


   

        <Content>
            {
                /** show as content whatever we provide */
                props.children
            }
        </Content>
    </div>;
}

export default withRouter(withRoutes(WithNavigation));