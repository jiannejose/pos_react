import React from 'react';

class EditItem extends  React.Component {

  // STATE
  state = {
    items: {},
    errors: {
      hasError: false,
      messages: {
        idErrorMsg: '',
        nameErrorMsg: '',
        priceErrorMsg: '',
        quantityErrorMsg: '',
      } 
    }
  };

  // ITEM CREATE REFS
  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();

  constructor() {
    super();
    const items = JSON.parse(localStorage.getItem('inventory'));
    if(!items) {
      return;
    }

    this.state.items = items;
  }

  /**
   * Updates item's data by getting the value of inputs via refs
   * Calls validateForm function
   * Update items state
   * 
   * @param object e
   * @returns void
   */
  updateItem = (e) => {
    e.preventDefault();
    const itemKey = this.props.match.params.itemKey;

    const updatedItem = {
      id: this.idRef.value.value,
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      quantity: parseFloat(this.quantityRef.value.value),
    }

    this.validateForm(updatedItem, itemKey);

    const items = {...this.state.items};

    // update specific item 
    items[itemKey] = updatedItem;

    this.setState({ items });
  }

  /**
   * Validates form
   * Updates errors state
   * 
   * @param object item
   * @returns void
   */
   validateForm = (item, itemKey) => {
    const errors = {...this.state.errors};
    const messages = errors.messages;
    errors.hasError = false;

    const foundItem = Object.keys(this.state.items).find((key) => {
      return (this.state.items[key].id === item.id && key !== itemKey);
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
   * @inheritdoc
   */
  componentDidUpdate() {
    const errors = this.state.errors;
    if(!errors.hasError) {
      localStorage.setItem('inventory', JSON.stringify(this.state.items));
      this.props.history.push('/inventory');
    } 
  }

  render() {
    const itemKey = this.props.match.params.itemKey;
    const item = this.state.items[itemKey];

    return (
      <div>

        <h2>Edit Item</h2>

        <form onSubmit={this.updateItem}>
          <label htmlFor="id">Item ID Number:</label>
          <input type="text" name="id" ref={this.idRef} defaultValue={item.id} />
          <p>{this.state.errors.messages.id}</p>

          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" ref={this.nameRef} defaultValue={item.name}/>
          <p>{this.state.errors.messages.name}</p>

          <label htmlFor="price">Item Price:</label>
          <input type="text" name="price" ref={this.priceRef} defaultValue={item.price}/>
          <p>{this.state.errors.messages.price}</p>

          <label htmlFor="quantity">Initial Quantity</label>
          <input type="number" name="quantity" ref={this.quantityRef} defaultValue={item.quantity}/>
          <p>{this.state.errors.messages.quantity}</p>

          <button type="submit">Update Item</button>
        </form>

      </div>
    )
  }
}

export default EditItem;