import React from 'react';

class AddItem extends React.Component {

  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();
  
  addItem = (event) => {
    event.preventDefault();

    alert('hi');
  };

  render() {
    return (

      <div>

        <h2>Add Item</h2>

        <form onSubmit={this.addItem}>
          <label htmlFor="id">Item ID Number:</label>
          <input type="text" name="id" ref="idRef"/>

          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" ref="nameRef"/>

          <label htmlFor="price">Item Price:</label>
          <input type="text" name="price" ref="priceRef"/>

          <label htmlFor="quantity">Initial Quantity</label>
          <input type="number" name="quantity" ref="quantityRef"/>

          <button type="submit">Add Item</button>
        </form>

      </div>

      
    )
  }
}

export default AddItem;