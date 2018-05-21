import React from 'react';

class AddItem extends React.Component {

  state = {
    items: {},
  };

  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();
  
  addItem = (event) => {
    event.preventDefault();

    // Create object item
    const item = {
      id: this.idRef.value.value,
      name: this.nameRef.value.value,
      price: this.priceRef.value.value,
      quantity: this.quantityRef.value.value
    };

    // Save to local storage
    const items = {...this.state.items};
    items[Date.now()] = item;
    localStorage.setItem('inventory', JSON.stringify(items));

    // Go to /inventory
    this.props.history.push('/inventory');
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem('inventory');
    if(localStorageRef) {
      this.setState({
        items: JSON.parse(localStorageRef),
      });
    }
  }

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