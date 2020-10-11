import React, { FC, useState, useEffect } from 'react';
import { getWiki } from '../api/widgets.api';
import { TWikiDataQuerySearch } from '../models/types';

const labels = {
  go: 'Go',
  input_text: 'Enter search term'
};

const DEFAULT_TERM = 'programming';

const Search: FC = () => {

  const [term, setTerm] = useState<string>(DEFAULT_TERM);
  const [debouncedTerm, setDebouncedTerm] = useState<string>(DEFAULT_TERM);
  const [result, setResult] = useState<TWikiDataQuerySearch[]>([]);

  // console.log('I run with every render!');

  // Runs only at initial render
  useEffect(() => {
  }, []);

  // Runs at initial render AND after every render
  useEffect(() => {
  });

  // Runs at initial render AND after every render if "term" has changed
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    // Cleanup - Runs after every render if "term" has changed, but not at initial render
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);
  
  // Runs at initial render AND after every render if "debouncedTerm" has changed
  useEffect(() => {
    const search = async (): Promise<void> => {
      const response = await getWiki(debouncedTerm);
      setResult(response || []);
    };
    search();
  }, [debouncedTerm])

  const renderedResults: JSX.Element[] = result.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            {labels.go}
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>{labels.input_text}</label>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui called list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
