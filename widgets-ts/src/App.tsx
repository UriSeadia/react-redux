import React, { FC } from 'react';
import './App.css';
// import Accordion from './components/Accordion';
import Search from './components/Search';
// import { staticItems } from './data/staticData';

const App: FC = () => {
  return (
    <div>
      {/* <Accordion items={staticItems} /> */}
      <Search />
    </div>
  );
}

export default App;
