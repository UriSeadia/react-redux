import React, { FC } from 'react';
import './App.css';
// import Dropdown from './components/Dropdown';
// import { dropdownOptions } from './data/staticData';
// import { TDropdownOption } from './models/types';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import { staticItems } from './data/staticData';
import Translate from './components/Translate';

const App: FC = () => {

  // const [selected, setSelected] = useState<TDropdownOption>(dropdownOptions[0]);

  return (
    <div>
      {/* <Accordion items={staticItems} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        label="Select a color"
        selected={selected}
        onSelectedChange={setSelected}
        options={dropdownOptions}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
