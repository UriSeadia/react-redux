import React, { FC, useState } from 'react';
import { dropdownOptions, staticItems } from './data/staticData';
import { TDropdownOption } from './models/types';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import './App.css';

const App: FC = () => {

  const [selected, setSelected] = useState<TDropdownOption>(dropdownOptions[0]);

  return (
    <>
      <Header />
      <Route path="/">
        <Accordion items={staticItems} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={dropdownOptions}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </>
  );
};

export default App;
