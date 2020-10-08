import React, {Component} from 'react';

class Spinner extends Component {

  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          {this.props.text}
        </div>
      </div>
    );
  }
}

Spinner.defaultProps = {
  text: "Loading..."
}

export default Spinner;
