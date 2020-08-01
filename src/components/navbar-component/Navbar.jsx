// T E C H N I C A L
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// J O B 
import './Navbar.scss';
import About from '../random/About';
import Contact from '../random/Contact';


//https://medium.com/dailyjs/how-to-create-a-navigation-bar-with-react-router-styled-components-and-infrastructure-components-e24bee8d31bb


class Navbar extends React.Component {
    render() {
        return (

            <header className="page-header">
                <nav>
                    <div id="nav-start">
                        <h2 className="logo">
                            That par from Moroder goes ...{this.props.totalItems}
                        </h2>
                        <ul>
                            <BrowserRouter>
                                <NavLink to="/">Homes</NavLink>


                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/contact" component={Contact} />
                                </Switch>
                            </BrowserRouter>

                            <li>Hot Pants</li>
                            <li>Get up</li>
                            <li>Hey Ya</li>
                        </ul>
                    </div>

                    <button className="cta-contact">
                        get in touch
            </button>
                </nav>

            </header>



        )
    }
}

export default Navbar; 