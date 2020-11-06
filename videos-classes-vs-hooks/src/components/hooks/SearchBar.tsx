import React, { useState, FC } from 'react';

type TSearchBarProps = {
  onFormSubmit: (term: string) => any;
};

const SearchBar: FC<TSearchBarProps> = ({ onFormSubmit }) => {
  const [term, setTerm] = useState<string>('');

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="video-input">Video Search</label>
          <input
            id="video-input"
            type="text"
            value={term}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
