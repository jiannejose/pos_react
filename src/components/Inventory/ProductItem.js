import React from 'react';
import { formatPrice } from '../../helpers';

class ProductItem extends React.Component {

  goToEditItem = (e) => {
    e.preventDefault();
    const itemKey = this.props.index;
    this.props.history.push(`/inventory/item/edit/${itemKey}`);
  }

  render() {

    const { id, name, price, quantity } = this.props.item;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{formatPrice(price)}</td>
        <td>{quantity}</td>
        <td>
          <button onClick={() => this.props.deleteItem(this.props.index)}>Delete</button>
          <button onClick={this.goToEditItem}>Edit</button>
          <button>+ Quantity</button>
        </td>
      </tr>
    )
  }
}

export default ProductItem;