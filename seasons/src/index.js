import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends Component {

  state = {
    latitude: null,
    errorMsg: ''
  }

  // Good place for one time setup
  constructor(props) {
    super(props);
    console.log('App component was created (actually, constructor is not necessary here)');
  }


  // Good place for data loading
  componentDidMount() {
    console.log('App component was rendered to the screen');
    this.setCurrentPosition();
  }

  // Good place for more data loading when state/props change
  componentDidUpdate() {
    console.log('App component was just updated - it rerendered');
  }

  // Good place for clean-up (espacially for non-React stuff)
  componentWillUnmount() {
    console.log('App component will be destroyed');
  }

  setCurrentPosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(`state will be updated with latitude: ${position.coords.latitude}`);
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => {
        console.log(`state will be updated with error message: ${error.message}`);
        this.setState({ errorMsg: error.message });
      }
    );
  }

  renderContent() {
    const { latitude, errorMsg } = this.state;

    if (latitude) {
      return <SeasonDisplay latitude={latitude} />
    }

    if (errorMsg) {
      return <div>{`Error: ${errorMsg}`}</div>
    }

    return <Spinner text="Please accept location request" />
  }

  render() {
    console.log('render');
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
