import React from 'react';
import Products from './Products';

class Inventory extends React.Component {

  goToAddItem = (e) => {
    e.preventDefault();
    this.props.history.push('/inventory/item/add');
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>

        <Products />

        <button onClick={this.goToAddItem}>+</button>
      </div>
    )
  }
}

export default Inventory;