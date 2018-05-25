import React from 'react';
import { formatPrice } from '../../helpers';

class ProductItem extends React.Component {

  render() {

    const { id, name, price, quantity } = this.props.item;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{formatPrice(price)}</td>
        <td>{quantity}</td>
      </tr>
    )
  }
}

export default ProductItem;