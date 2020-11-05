import React, { useState } from 'react';
import { TDropdownOption } from '../models/types';
import Dropdown from './Dropdown';
import Convert from './Convert';
import { languageOptions } from '../data/staticData';

const Translate = () => {
  const [language, setLanguage] = useState<TDropdownOption>(languageOptions[0]);
  const [text, setText] = useState<string>('');

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text-for-translation">Enter text</label>
          <input
            id="text-for-translation"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={languageOptions}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language.value} text={text} />
    </>
  );
};

export default Translate;
