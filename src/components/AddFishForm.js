import React from 'react';

class AddFishForm extends React.Component {
  // function to createFish
  createFish(event) {
    event.preventDefault();
    console.log('Gonna make some fish! 🎣');

    // create a fish object from the form using 'ref'
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.price.value,
      desc: this.status.value,
      image: this.image.value
    };

    // using the 'addFish' function passed
    this.props.addFish(fish);

    // reset
    this.fishForm.reset();
  }
  render() {
    return (
      <form ref={input => (this.fishForm = input)} className="fish-edit" onSubmit={e => this.createFish(e)}>
        <input ref={input => (this.name = input)} type="text" placeholder="Fish Name" />

        <input ref={input => (this.price = input)} type="text" placeholder="Fish Price" />
        <select ref={input => (this.status = input)}>
          <option value="available">Fresh! </option>
          <option value="unavailable"> Sold Out!</option>
        </select>
        <textarea ref={input => (this.desc = input)} placeholder="Fish Desc" />
        <input ref={input => (this.image = input)} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddFishForm;
