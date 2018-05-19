import React from 'react';

class App extends React.Component {

  goToInventory = (event) => {
    event.preventDefault();
    this.props.history.push('/inventory');
  }

  render() {
    return (
      <div>
        <button onClick={this.goToInventory}>Inventory</button>

        <button>Point-of-Sale</button>
      </div>
    )
  }
}

export default App;