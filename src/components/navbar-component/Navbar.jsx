import React from "react";
import './Navbar.scss';

//https://medium.com/dailyjs/how-to-create-a-navigation-bar-with-react-router-styled-components-and-infrastructure-components-e24bee8d31bb


class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div id="nav-start">
                    <h2 className="logo">
                        That par from Moroder goes ...{this.props.totalItems}
                    </h2>
                    <ul>
                        <li>Hot Pants</li>
                        <li>Get up</li>
                        <li>Hey Ya</li>
                    </ul>
                </div>

                <button className="cta-contact">
                    get in touch
            </button>
            </nav>


        )
    }
}

export default Navbar; 