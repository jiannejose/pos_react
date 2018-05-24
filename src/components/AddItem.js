import React from 'react';

class AddItem extends React.Component {

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


  // VALIDATE FORM FUNCTION
  validateForm = (item) => {
    // making a copy of the errors state
    const errors = {...this.state.errors};

    // assigning error message
    const foundItem = Object.keys(this.state.items).find((key) => {
      return (this.state.items[key].id === item.id);
    });        

    if(foundItem) {
      errors.idErrorMsg = `The ID ${item.id} is already existing.`;
    } else {
      errors.idErrorMsg = ``;
    }

    if(item.name === '') {
      errors.nameErrorMsg = `The name must not be blank.`;
    } else {
      errors.nameErrorMsg = ``;
    }

    if(item.price === '' || isNaN(item.price)) {
      errors.priceErrorMsg = `The price must not be blank.`;
    } else {
      errors.priceErrorMsg = ``;
    }

    if(item.quantity === '' || isNaN(item.quantity)) {
      errors.quantityErrorMsg = `The quantity must not be blank.`;
    } else {
      errors.quantityErrorMsg = ``;
    }
    console.log(errors, item);

    // saving the error messages on the state from the copy
    this.setState({
      errors
    });

    // validating before saving to local storage
    if(errors.idErrorMsg === '' && errors.nameErrorMsg === '' && errors.priceErrorMsg === '' && errors.quantityErrorMsg === '') {
      this.saveToLocalStorage(item);
    }
  }


  // ADD ITEM FUNCTION
  addItem = (event) => {
    event.preventDefault();
    
    // create item object
    const item = {
      id: this.idRef.value.value,
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      quantity: parseFloat(this.quantityRef.value.value)
    };

    // calling valideForm function
    this.validateForm(item); 
  };


  // SAVE TO LOCAL STORAGE FUNCTION
  saveToLocalStorage = (item) => {
    // 1. making a copy of the items state
    const items = {...this.state.items};
    // 2. assigning unique key
    items[Date.now()] = item;
    // 3. saving items to local storage
    localStorage.setItem('inventory', JSON.stringify(items));

    // going back to inventory page
    this.props.history.push('/inventory');
  }

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
          <p>{this.state.errors.idErrorMsg}</p>

          <label htmlFor="name">Item Name:</label>
          <input type="text" name="name" ref={this.nameRef}/>
          <p>{this.state.errors.nameErrorMsg}</p>

          <label htmlFor="price">Item Price:</label>
          <input type="text" name="price" ref={this.priceRef}/>
          <p>{this.state.errors.priceErrorMsg}</p>

          <label htmlFor="quantity">Initial Quantity</label>
          <input type="number" name="quantity" ref={this.quantityRef}/>
          <p>{this.state.errors.quantityErrorMsg}</p>

          <button type="submit">Add Item</button>
        </form>

      </div>
   
    )
  }
}

export default AddItem;