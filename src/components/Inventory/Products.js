import React from 'react';
import ProductItem from './ProductItem';

class Products extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID Number</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          
          <tbody>
            {Object.keys(this.props.items).map((key) => {
              return (
                <ProductItem
                  key={key}
                  item={this.props.items[key]}
              />
              )
            })}
        
          </tbody>
          
        </table>

      </div>

    )
  }
}

export default Products;