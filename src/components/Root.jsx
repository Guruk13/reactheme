// T E C H N I C A L 
import React, { Component } from 'react';
import './root.scss';
// J O B 

import './global.scss';
import Items from './itemscomponent/Items';
import Footer from './footercomponent/Footer'
import PageMain from './pagemaincomponent/PageMain';


//https://webdesign.tutsplus.com/tutorials/how-to-build-a-full-screen-responsive-page-with-flexbox--cms-32086

class Root extends Component {

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
        ></Navbar>

        <PageMain >
        <React.Fragment>
          <Items
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            items={this.state.items}
          />
        </React.Fragment>
        </PageMain>

        <Footer />
      </>
    );

  }
}

export default Root;