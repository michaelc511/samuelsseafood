import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

/// 2/12/18 at 17

class App extends React.Component {
  // constructor
  constructor() {
    super();

    //bind 'addFish' function to 'App.js', can use 'this' after 'super()'
    this.addFish = this.addFish.bind(this);
    // bind 'loadSamples' function
    this.loadSamples = this.loadSamples.bind(this);
    // bind 'addToOrder' function
    this.addToOrder = this.addToOrder.bind(this);

    // es6 STATE set up getinitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // 'addFish' function ///////////////////////////
  addFish(fish) {
    // 1. to update our state, copy our fishes from state to 'fishes'
    // use spread '...' to take every item from object and spread to 'fishes'
    const fishes = { ...this.state.fishes };

    // 2. add in our new fish, use timestampe as random uniqueness
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // 3. set State
    this.setState({ fishes: fishes });
  }

  // 'loadSamples' method ///////////////////////////
  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  // 'addToOrder' method ///////////////////////////
  addToOrder(key) {
    // take a copy of our state
    const order = { ...this.state.order };

    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;

    // update our state
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Samuel's Seafood" />
          <ul className="list-of-fishes">
            {// use 'Object.keys' to loop the Object get the array for looping
            Object.keys(this.state.fishes) //
              .map(key => (
                <Fish
                  key={key} //
                  index={key} // can't use key so use 'index'
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              )) //
            }
          </ul>
        </div>

        {/* pass the fishes and order state to 'Order' */}
        <Order
          fishes={this.state.fishes} //
          order={this.state.order}
        />
        {/* Passing function 'addFish' and 'loadSamples' to 'Inventory' */}
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;
