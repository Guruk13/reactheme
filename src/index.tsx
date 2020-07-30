import * as React from 'react';
import PageMain from './components/pagemaincomponent/PageMain'
import WithNavigation from './components/navigation';
import "regenerator-runtime/runtime.js";
import Items from './components/itemscomponent/Items';




class App extends React.Component {

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
            <nav>
            <div id="nav-start">
                <h2 className="logo">
                    That par from Moroder goes ...
                    </h2>
                <ul>
                  
                </ul>
            </div>

            <button className="cta-contact">
                get in touch
            </button>
        </nav>
        )
          
    }
}







