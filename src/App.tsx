// D O C 
/*
https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
https://fettblog.eu/typescript-react/components/#class-components
https://opensenselabs.com/blog/tech/rem-vs-em-vs-px-when-use-these-units
https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd
https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
https://dev.to/ibrahima92/redux-vs-react-context-which-one-should-you-choose-2hhh  <=== comments are really good 
https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
https://fettblog.eu/typescript-react/components/

*/
// T E C H N I C A L 
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "regenerator-runtime/runtime.js";
import { NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// J O B 
import About from './components/random/About';
import Home from './components/Home';
import Fragments from './components/random/Fragments';
import Footer from './components/Footer';
import Header from './components/Header';

//Fonts. Include any other format in d.ts
import Kaushan from './font/KaushanScript-Regular.ttf';
import Righteous from './font/Righteous-Regular.ttf';
import styled from './theme/index';
import {Nav, NavDiv ,NavUl ,NavbarLi, LogoTitle} from './MainStyles.js'


interface InitProps {
  props: undefined;
}
interface Istate {
  items: IItems;
}
interface IItems {
  [key: number]: IItem;
}
interface IItem {
  id: number;
  value: number;
}

/* apply styles globaly & give room to root wrapper */
const GlobalStyle = createGlobalStyle`
  //three parts and navbar 

  @font-face {
    font-family: 'navbarFont';
    src:  url(${Kaushan})  
  }
  
  @font-face {
    font-family: 'MenuItems';
    src:  url(${Righteous})  
  }

  @media screen and (min-width: 550px) {
    .page-headeér ul {
      width: auto;
      margin-top: 0;
    }
  }

  * {
    margin: 0;
    }

  //fragments 
  input, textarea, button {
    border: 1px solid #444;
  }
  `

export default class App extends React.Component<InitProps> {
  constructor(props: InitProps) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  state = {
    items: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
  };

  handleIncrement = (item: IItem) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
  };

  handleDelete = (itemId: number) => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Header >
            <Nav>
              <NavDiv>
                <LogoTitle>
                  That part from Moroder goes ...{this.state.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.value; }, 0)}
                </LogoTitle>
                <NavUl>
                  <NavbarLi>
                    <NavLink to="/about">About</NavLink>
                  </NavbarLi>
                    <NavbarLi> <NavLink to="/fragments">Fragments</NavLink>
                  </NavbarLi>
                    <NavbarLi><NavLink to="/">Home</NavLink>
                  </NavbarLi>
                </NavUl>
              </NavDiv>
            </Nav>
          </Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/fragments">
              <Fragments {...this.state}
                handleDelete={this.handleDelete}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset} />
            </Route>
            <Route path="/about" component={About} />
          </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

