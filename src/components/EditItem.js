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

  // GET ITEMS FROM LOCAL STORAGE
  componentDidMount() {
    // get the items from local storage
    const items = JSON.parse(localStorage.getItem('inventory'));
    if(!items) {
      return;
    }
    // set state
    this.setState({
      items: items,
    });

    const itemKey = this.match.params.itemKey;
  }

  // ITEM CREATE REFS
  idRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  quantityRef = React.createRef();

  

  render() {

    // const { id, name, price, quantity } = this.state.items;

    return (
      <div>

        <h2>Edit Item</h2>

        <form onSubmit={this.addItem}>
          <label htmlFor="id">Item ID Number:</label>
          <input type="text" name="id" ref={this.idRef} defaultValue={this.testID}/>
          <p>{this.state.errors.idErrorMsg}</p>
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

          <button type="submit">Update Item</button>
        </form>

      </div>
    )
  }
}

export default EditItem;