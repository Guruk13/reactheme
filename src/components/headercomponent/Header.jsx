import React from "react";
import Menu from '../menucomponent/Menu';
import Navbar from '../navbar-component/Navbar';
import Items from '../itemscomponent/Items';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header class="page-header">
                <Navbar totalItems={this.props.totalItems}/>
            </header>
        )
    }
}

export default Header; 