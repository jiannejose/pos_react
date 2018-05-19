import React from 'react';
import Products from './Products';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>

        <Products />
      </div>
    )
  }
}

export default Inventory;