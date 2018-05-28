import React from 'react';

class AddItem extends React.Component {

  // STATE
  state = {
    item: {},
    items: {},
    errors: {
      hasError: false,
      messages: {
        id: '',
        name: '',
        price: '',
        quantity: '',
      },
    }
  };

  // ITEM CREATE REFS
  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();

  constructor() {
    super();

    const localStorageRef = localStorage.getItem('inventory');
    if(localStorageRef) {
      this.state.items = JSON.parse(localStorageRef);
    }
  }

  /**
   * Add a new item 
   * Calls validateForm and assignItem functions
   * 
   * @param object event
   * @returns void
   */
  addItem = (event) => {
    event.preventDefault();
    
    // create item object
    const item = {
      id: this.idRef.value.value,
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      quantity: parseFloat(this.quantityRef.value.value)
    };

    this.validateForm(item);

    this.assignItem(item);
  }

  /**
   * Validates form
   * Updates errors state
   * 
   * @param object item
   * @returns void
   */
  validateForm = (item) => {
    const errors = {...this.state.errors};
    const messages = errors.messages;
    errors.hasError = false;

    const foundItem = Object.keys(this.state.items).find((key) => {
      return (this.state.items[key].id === item.id);
    });        

    if(foundItem) {
      messages.id = `The ID ${item.id} is already existing.`;
      errors.hasError = true;
    } else {
      messages.id = '';
    }

    if(item.name === '') {
      messages.name = `The name must not be blank.`;
      errors.hasError = true;
    } else {
      messages.name = '';
    }

    if(item.price === '' || isNaN(item.price)) {
      messages.price = `The price must not be blank.`;
      errors.hasError = true;
    } else {
      messages.price = '';
    }

    if(item.quantity === '' || isNaN(item.quantity)) {
      messages.quantity = `The quantity must not be blank.`;
      errors.hasError = true;
    } else {
      messages.quantity = '';
    }

    this.setState({ errors });
  }

  /**
   * This assigns item to state
   * 
   * @param object newItem
   * @returns void
   */
  assignItem = (newItem) => {
    this.setState({item: newItem});
  }

  /**
   * Makes a copy of the items state
   * Assigns unique key for each item
   * Saves added item to the local storage
   * 
   * @param object item
   * @returns void
   */
  saveToLocalStorage = (item) => {
    const items = {...this.state.items};
    items[Date.now()] = item;
    localStorage.setItem('inventory', JSON.stringify(items));
  }

  /**
   * @inheritdoc
   */
  componentDidUpdate() {
    const errors = this.state.errors;

    if(!errors.hasError) {
      this.saveToLocalStorage(this.state.item);
      this.props.history.push('/inventory');
    } 
  }

  render() {
    return (

      <div>
        <h2>Add Item</h2>

        <form onSubmit={this.addItem}>
          <label htmlFor="id">Item ID Number:</label>
          <input type="text" name="id" ref={this.idRef}/>
          <p>{this.state.errors.messages.id}</p>

          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" ref={this.nameRef}/>
          <p>{this.state.errors.messages.name}</p>

          <label htmlFor="price">Item Price:</label>
          <input type="text" name="price" ref={this.priceRef}/>
          <p>{this.state.errors.messages.price}</p>

          <label htmlFor="quantity">Initial Quantity</label>
          <input type="number" name="quantity" ref={this.quantityRef}/>
          <p>{this.state.errors.messages.quantity}</p>

          <button type="submit">Add Item</button>
        </form>
      </div>
   
    )
  }
}

export default AddItem;