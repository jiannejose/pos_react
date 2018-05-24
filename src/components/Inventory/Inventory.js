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


  render() {
    // const items = JSON.parse(localStorage.getItem('inventory'));
    
    // console.log(items);
    // (Object.keys(items).map((key) => {
    //   console.log(items[key].id);
    // }));

    // const id = Object.keys(items).map((key) => {
    //     return items[key].id;
    //   });

    // console.log(id);
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