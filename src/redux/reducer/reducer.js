let initialState = {
  count: 0,
  id: '',
  pw: '',
};

function reducer(state = initialState, action) {
  //console.log('action은 뭐야?', action);
  // if (action.type === 'INCREMENT') {
  //   return { ...state, count: state.count + 1 };
  // } else if (action.type === 'LOGIN') {
  //   return { ...state, id: action.payload.id, pw: action.payload.pw };
  // } else if (action.type === 'DECREMENT') {
  //   return { ...state, count: state.count - 1 };
  // }
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'INCREMENT10':
      return { ...state, count: state.count + 10 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'DECREMENT10':
      return { ...state, count: state.count - 10 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}

export default reducer;
