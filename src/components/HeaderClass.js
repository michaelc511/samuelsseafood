import React from 'react';

class HeaderClass extends React.Component {
  render() {
    return (
      <p>
        header
        {/* test */}
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
            </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>
              {this.props.tagline}
            </span>
          </h3>
        </header>
      </p>
    );
  }
}

export default Header;
