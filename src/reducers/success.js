const successReducer = (state = false, action) => {
    switch (action.type) {
        case 'SUCCESS':
          return action.payload;
        default:
          return state;
    }
}

export default successReducer;

