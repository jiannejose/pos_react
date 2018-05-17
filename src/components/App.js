import React from 'react';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
      <div>
        <Inventory />

        <Cashier />

        <Receipt />
      </div>
    )
  }
}

export default App;