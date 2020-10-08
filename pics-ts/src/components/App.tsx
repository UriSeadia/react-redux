import React, { Component } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import { getPictures } from '../api/pics.api';
import ImageList from './ImageList';

class App extends Component {

  state = {
    images: []
  };

  onSearchSubmit = async (term: string): Promise<void> => {
    const images = await getPictures(term);
    this.setState({ images });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar labelText="Image Search" onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
