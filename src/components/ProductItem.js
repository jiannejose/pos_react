import React from 'react';

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