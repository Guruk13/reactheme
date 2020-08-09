// D O C 
/*
https://fettblog.eu/typescript-react/components/#class-components

*/


import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "regenerator-runtime/runtime.js";
import { NavLink } from 'react-router-dom';

// J O B 
import About from './components/random/About';
import Contact from './components/random/Contact';
import Navbar from './components/navbar-component/Navbar';
import Items from './components/itemscomponent/Items';
import Home from './components/homecomponent/Home';
import Fragments from './components/random/Fragments';
import './components/global.scss';
import PageMain from './components/pagemaincomponent/PageMain'
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

  function reduce<TElement, TResult>(
    array: TElement[],
    reducer: (result: TResult, el: TElement) => TResult,
    initialResult: TResult
  ): TResult {
    let result = initialResult;
    for (const element of array) {
      result = reducer(result, element);
    }
    return result;
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
          <Navbar
            totalItems={reduce(this.state.items, (accumulator, currentValue) => {accumulator + currentValue.value}, 0)}
          />


          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li> <NavLink to="/fragments">Fragments</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>

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

