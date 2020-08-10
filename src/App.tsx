// D O C 
/*
https://fettblog.eu/typescript-react/components/#class-components

*/

// T E C H N I C A L 
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "regenerator-runtime/runtime.js";
import { NavLink } from 'react-router-dom';

// J O B 
import About from './components/random/About';
import Home from './components/homecomponent/Home';
import Fragments from './components/random/Fragments';
import './components/global.scss';
import Footer from './components/footercomponent/Footer';

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

export default class App extends React.Component<InitProps> {
  constructor(props: InitProps) {
    super(props);
    console.log(this);
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
        <Router>

          <header className="page-header">
            <nav>
              <div id="nav-start">
                <h2 className="logo">
                  That par from Moroder goes ...{this.state.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.value; }, 0)}
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

