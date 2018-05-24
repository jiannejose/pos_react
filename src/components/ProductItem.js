import React from 'react';
// import { formatPrice } from '../helpers';

class ProductItem extends React.Component {

  render() {
    const addedItem = JSON.parse(localStorage.getItem('inventory'));
    
    (Object.keys(addedItem).map((key) => {
      console.log(addedItem[key].id);
    }));

    const id = Object.keys(addedItem).map((key) => {
        addedItem[key].id;
      });

    console.log(id);
    return (
      <tr>
        <td>ID Number</td>
        <td>Name</td>
        <td>Price</td>
        <td>Quantity</td>
      </tr>
    )
  }
}

export default ProductItem;