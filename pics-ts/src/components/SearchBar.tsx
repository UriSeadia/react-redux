import React, { Component } from 'react';

interface SearchBarProps {
  labelText: string;
  onSubmit: (term: string) => void;
}

class SearchBar extends Component<SearchBarProps> {

  state = {
    term: ''
  };

  // arrow function - in order to bind 'this'
  // other option: in the   constructor -   this.onInputChange = this.onInputChange.bind(this);
  // other option: in the   form        -   onSubmit={this.onFormSubmit.bind(this)}
  // other option: in the   form        -   onSubmit={(event) => this.onFormSubmit(event)}
  onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ term: (event.target as HTMLInputElement).value });
  }

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label id="search-label" htmlFor="search-input">
            {this.props.labelText}
          </label>
          <input
            id="search-input"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
