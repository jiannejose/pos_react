import React from 'react';

class EditItem extends  React.Component {

  // STATE
  state = {
    items: {},
    errors: {
      idErrorMsg: '',
      nameErrorMsg: '',
      priceErrorMsg: '',
      quantityErrorMsg: '',
    }
  };

  // ITEM CREATE REFS
  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();

  // GET ITEMS FROM LOCAL STORAGE
  constructor() {
    super();
    // get the items from local storage
    const items = JSON.parse(localStorage.getItem('inventory'));
    if(!items) {
      return;
    }
    // set state
    this.state.items = items;
  }

  // UPDATE ITEM 
  updateItem = (e) => {
    // prevent submitting the form
    e.preventDefault();

    const itemKey = this.props.match.params.itemKey;

    // get the value of each input via refs
    const updatedItem = {
      id: this.idRef.value.value,
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      quantity: parseFloat(this.quantityRef.value.value),
    }

    // calling validate form function
    this.validateForm(updatedItem, itemKey);

    // make a copy of the items state
    const items = {...this.state.items};

    // update specific item 
    items[itemKey] = updatedItem;

    // update the items state
    this.setState({
      items
    });
  }

   // VALIDATE FORM FUNCTION
   validateForm = (item, itemKey) => {
    // making a copy of the errors state
    const errors = {...this.state.errors};

    // assigning error message
    const foundItem = Object.keys(this.state.items).find((key) => {
      return (this.state.items[key].id === item.id && key !== itemKey);
    });        

    if(foundItem) {
      errors.idErrorMsg = `The ID ${item.id} is already existing.`;
    } else {
      errors.idErrorMsg = '';
    }

    if(item.name === '') {
      errors.nameErrorMsg = `The name must not be blank.`;
    } else {
      errors.nameErrorMsg = '';
    }

    if(item.price === '' || isNaN(item.price)) {
      errors.priceErrorMsg = `The price must not be blank.`;
    } else {
      errors.priceErrorMsg = '';
    }

    if(item.quantity === '' || isNaN(item.quantity)) {
      errors.quantityErrorMsg = `The quantity must not be blank.`;
    } else {
      errors.quantityErrorMsg = '';
    }

    // saving the error messages on the state from the copy
    this.setState({
      errors
    });
  }
  
  // COMPONENT DID UPDATE
  componentDidUpdate() {
    // validating before saving to local storage
    const errors = this.state.errors;
    if(errors.idErrorMsg === '' && errors.nameErrorMsg === '' && errors.priceErrorMsg === '' && errors.quantityErrorMsg === '') {
      localStorage.setItem('inventory', JSON.stringify(this.state.items));
      // going back to inventory page
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
          <p>{this.state.errors.idErrorMsg}</p>

          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" ref={this.nameRef} defaultValue={item.name}/>
          <p>{this.state.errors.nameErrorMsg}</p>

          <label htmlFor="price">Item Price:</label>
          <input type="text" name="price" ref={this.priceRef} defaultValue={item.price}/>
          <p>{this.state.errors.priceErrorMsg}</p>

          <label htmlFor="quantity">Initial Quantity</label>
          <input type="number" name="quantity" ref={this.quantityRef} defaultValue={item.quantity}/>
          <p>{this.state.errors.quantityErrorMsg}</p>

          <button type="submit">Update Item</button>
        </form>

      </div>
    )
  }
}

export default EditItem;