import React from 'react';
import Products from './Products';

class Inventory extends React.Component {

  state = {
    items: {},
  };

  goToAddItem = (e) => {
    e.preventDefault();
    this.props.history.push('/inventory/item/add');
  }

  // GET ITEMS FROM LOCAL STORAGE
  componentDidMount() {
    // get the items from local storage
    const items = JSON.parse(localStorage.getItem('inventory'));
    console.log(items);

    // set state
    this.setState({
      items: items,
    });
  }
    

  render() {
    return (
      <div>
        <h2>Inventory</h2>

        <Products items={this.state.items}/>

        <button onClick={this.goToAddItem}>+</button>
      </div>
    )
  }
}

export default Inventory;