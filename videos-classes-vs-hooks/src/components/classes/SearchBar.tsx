import React from 'react';

type TSearchBarProps = {
  onFormSubmit: (term: string) => void;
};

export class SearchBar extends React.Component<TSearchBarProps> {
  state = {
    term: ''
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: event.target.value
    });
  };

  onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-input">Video Search</label>
            <input
              id="video-input"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;
