import React from 'react';
import Products from './Products';

class Inventory extends React.Component {

  state = {
    items: {},
  };

  goToAddItem = (e) => {
    e.preventDefault();
    this.props.history.push('/inventory/item/add');
  }

  // GET ITEMS FROM LOCAL STORAGE
  componentDidMount() {
    // get the items from local storage
    const items = JSON.parse(localStorage.getItem('inventory'));
    console.log(items);
    if(!items) {
      return;
    }
    // set state
    this.setState({
      items: items,
    });
  }

  componentDidUpdate() {
    localStorage.setItem('inventory', JSON.stringify(this.state.items));
  }

  // DELETING ITEM
  deleteItem = (key) => {
    // make a copy of the state
    const items = {...this.state.items};
    // deleting specific item
    delete items[key];
    // update state
    this.setState({
      items
    });
  }

  // EDITING ITEM
  updateItem = (key, updatedItem) => {
    //make a copy of the state
    const items = {...this.state.items};
    // update specific item
    items[key] = updatedItem;
    // update the state 
    this.setState({
      items
    });
  }
    

  render() {
    return (
      <div>
        <h2>Inventory</h2>

        <Products
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
          history={this.props.history}
        />

        <button onClick={this.goToAddItem}>+</button>
      </div>
    )
  }
}

export default Inventory;