import React from 'react';

class AddItem extends React.Component {

  state = {
    items: {},
  };

  // item create refs
  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();

  // item error create refs
  idErrorRef = React.createRef();
  nameErrorRef = React.createRef();
  priceErrorRef = React.createRef();
  quantityErrorRef = React.createRef();
  
  addItem = (event) => {
    event.preventDefault();

    // Create object item
    const item = {
      id: this.idRef.value.value,
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      quantity: parseFloat(this.quantityRef.value.value)
    };

    const foundItem = Object.keys(this.state.items).find((key) => {
      return (this.state.items[key].id === item.id);
    });        

    if(foundItem) {
      this.idErrorRef.value.innerText = `The ID ${item.id} is already existing.`;
    } else {
      this.idErrorRef.value.innerText = ``;
    }

    if(item.name === '') {
      this.nameErrorRef.value.innerText = `The name must not be blank.`;
    } else {
      this.nameErrorRef.value.innerText = ``;
    }

    if(item.price === '') {
      this.priceErrorRef.value.innerText = `The price must not be blank.`;
    } else {
      this.priceErrorRef.value.innerText = ``;
    }

    if(item.quantity === '') {
      this.quantityErrorRef.value.innerText = `The quantity must not be blank.`;
    } else {
      this.quantityErrorRef.value.innerText = ``;
    }


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
          <p ref={this.idErrorRef}></p>

          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" ref={this.nameRef}/>
          <p ref={this.nameErrorRef}></p>

          <label htmlFor="price">Item Price:</label>
          <input type="text" name="price" ref={this.priceRef}/>
          <p ref={this.priceErrorRef}></p>

          <label htmlFor="quantity">Initial Quantity</label>
          <input type="number" name="quantity" ref={this.quantityRef}/>
          <p ref={this.quantityErrorRef}></p>

          <button type="submit">Add Item</button>
        </form>

      </div>
   
    )
  }
}

export default AddItem;