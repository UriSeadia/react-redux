import { MONTHES } from '../config';

const getSeason = (latitude, month) => {
  if (month > MONTHES.MARCH && month < MONTHES.OCTOBER) {
    return latitude > 0 ? 'summer' : 'winter';
  }
  return latitude > 0 ? 'winter' : 'summer';
};

export default getSeason;
