import { EMONTHES } from '../config';

const getSeason = (latitude: number, month: number) => {
  if (month > EMONTHES.MARCH && month < EMONTHES.OCTOBER) {
    return latitude > 0 ? 'summer' : 'winter';
  }
  return latitude > 0 ? 'winter' : 'summer';
};

export default getSeason;
