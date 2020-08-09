// T E C H N I C A L
import React, { Component } from 'react';
// J O B 
import Items from '../itemscomponent/Items';

class Fragments extends Component {
    render() {

        return (
            <React.Fragment>
                <Items
                    onReset={this.props.handleReset}
                    onDelete={this.props.handleDelete}
                    onIncrement={this.props.handleIncrement}
                    items={this.props.items}
                />
            </React.Fragment>
        );
    }
}
export default Fragments;