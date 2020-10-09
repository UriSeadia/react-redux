import React, { FC } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import { staticItems } from './data/staticData';

const App: FC = () => {
  return (
    <div>
      <Accordion items={staticItems} />
    </div>
  );
}

export default App;
