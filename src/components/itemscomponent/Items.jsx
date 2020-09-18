import React, { Component } from "react";
import Item from "./Item";

class Items extends Component {
    render() {
        return (
            <React.Fragment>
                <button
                    onClick={this.props.onReset}
                >
                    Reset All
                </button>
                <div>
                {this.props.items.map(item => (
                    <Item
                        key={item.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        item={item}
                    />
                ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Items;