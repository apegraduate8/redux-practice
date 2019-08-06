import { sum } from '../helper/equation';

const equation = (state = sum(), action) => {
    switch (action.type) {
        case 'EQUATION':
          return action.payload;
        default:
          return state;
    }
}

export default equation;
