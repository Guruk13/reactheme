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
import Home from './components/homecomponent/Home';
import Fragments from './components/random/Fragments';
import Footer from './components/footercomponent/Footer';

//Fonts. Include any other format in d.ts
import Kaushan from './font/KaushanScript-Regular.ttf';
import Righteous from './font/Righteous-Regular.ttf';


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
  .page-header {
    background: purple;
  }

  @font-face {
    font-family: 'navbarFont';
    src:  url(${Kaushan})  
  }
  
  @font-face {
    font-family: 'MenuItems';
    src:  url(${Righteous})  
  }

  .page-header nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .page-header #nav-start {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 2;
  }

  .page-header ul {
    display: flex;
    order: 1;
    width: 100%;
    margin-top: 1em;
    padding-left: 3.5em;
  }
  .page-header ul>li{
    font-family:'MenuItems' ;
    margin: 15px;
    font-size: 32px; 
  }

  .logo{
    font-family: 'navBarFont', cursive;
    font-size: 38px;
  }
   
  @media screen and (min-width: 550px) {
    .page-header ul {
      width: auto;
      margin-top: 0;
    }
   
    .page-header .cta-contact {
      order: 1;
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
          <Header className="page-header">
            <nav>
              <div id="nav-start">
                <h2 className="logo">
                  That part from Moroder goes ...{this.state.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.value; }, 0)}
                </h2>
                <ul>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li> <NavLink to="/fragments">Fragments</NavLink></li>
                  <li><NavLink to="/">Home</NavLink></li>
                </ul>
              </div>

              <button className="cta-contact">
                get in touch
            </button>
            </nav>
          </header>
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

