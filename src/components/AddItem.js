import React from 'react';

class AddItem extends React.Component {

  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();
  
  addItem = (event) => {
    event.preventDefault();

    const item = {
      id: this.idRef.current.value,
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      quantity: this.quantityRef.current.value
    }

    this.props.history.push('/inventory');
    console.log(item);
  };

  render() {
    return (

      <div>

        <h2>Add Item</h2>

        <form onSubmit={this.addItem}>
          <label htmlFor="id">Item ID Number:</label>
          <input type="text" name="id" ref={this.idRef}/>

          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" ref={this.nameRef}/>

          <label htmlFor="price">Item Price:</label>
          <input type="text" name="price" ref={this.priceRef}/>

          <label htmlFor="quantity">Initial Quantity</label>
          <input type="number" name="quantity" ref={this.quantityRef}/>

          <button type="submit">Add Item</button>
        </form>

      </div>

      
    )
  }
}

export default AddItem;