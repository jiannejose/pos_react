import React from 'react';

class ProductItem extends React.Component {

  render() {
    const addedItem = JSON.parse(localStorage.getItem('inventory'));

    console.log(addedItem);
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