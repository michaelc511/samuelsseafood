import React from 'react';
import { render } from 'react-dom'; // the render method from react-dom
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // // constructor to run when component get created
  // constructor() {}
  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // first grab the text from the box
    const storeId = 'samuelsseafood'; //this.storeInput.value;
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      // <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input
          type="type"
          required
          placeholder="Store Name"
          defaultValue="Samuel's Seafood"
          // {getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
};
export default StorePicker;
