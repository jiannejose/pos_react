import React from 'react';
// import { formatPrice } from '../helpers';

class ProductItem extends React.Component {

  render() {
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