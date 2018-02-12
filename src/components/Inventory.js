import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {/* Passing function 'addFish' to 'AddFishForm' component */}
        <AddFishForm addFish={this.props.addFish} />
        {/* Using 'loadSamples' function  */}
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
