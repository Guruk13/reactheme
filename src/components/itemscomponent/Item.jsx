import React, { Component } from "react";



class Item extends Component {
  render() {
    return (
      <React.Fragment>
          <h5 className={this.styleCardHeader()}>{this.styleCount()}</h5>
            <button
              onClick={() => this.props.onIncrement(this.props.item)}
            >
              Increment
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.item.id)}
            >
              Delete
            </button>
      </React.Fragment>

    );
  }
 
  styleCardHeader() {
    let classes = "card-header h4 text-white bg-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }
 
  styleCount() {
    const { value } = this.props.item;
    return value === 0 ? "No Items!" : value;
  }
}
 
export default Item;