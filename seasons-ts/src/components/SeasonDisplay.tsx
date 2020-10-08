import '../style/seasonDisplay.css';
import React from 'react';
import { seasonConfig } from '../config';
import getSeason from '../helpers/seasonDisplay.helper';

const SeasonDisplay = ({ latitude }: { latitude: number }) => {

  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay;
