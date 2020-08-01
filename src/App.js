import * as React from 'react';
import PageMain from './components/pagemaincomponent/PageMain'
import "regenerator-runtime/runtime.js";
import Items from './components/itemscomponent/Items';
import Footer from './components/footercomponent/Footer'; 
import './components/global.scss';


import Navbar from './components/navbar-component/Navbar';




export default class App extends React.Component {

    state = {
        items: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
    };

    handleIncrement = item => {
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

    handleDelete = itemId => {
        const items = this.state.items.filter(item => item.id !== itemId);
        this.setState({ items: items });
    };

    render() {
        return (
          <>
          <Navbar
            totalItems={this.state.items.reduce((prev, cur) => {
              return prev + cur.value;
            }, 0)}
          />
          <PageMain >
          </PageMain>
          <React.Fragment>
            <Items
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              items={this.state.items}
            />
          </React.Fragment>
          <Footer />
        </>


        )
    }
}







