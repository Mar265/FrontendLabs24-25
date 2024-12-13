const AppReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'add':
      const newId = state.length ? state[state.length - 1].id + 1 : 1;
      newState = [...state, { ...action.item, id: newId }];
      break;
    case 'edit':
      newState = state.map(item =>
        item.id === action.id ? { ...item, ...action.updatedItem } : item
      );
      break;
    case 'delete':
      newState = state.filter(item => item.id !== action.id);
      break;
    case 'rate':
      newState = state.map(item =>
        item.id === action.id ? { ...item, rating: action.rating } : item
      );
      break;
    default:
      return state;
  }
 
  localStorage.setItem('appState', JSON.stringify(newState));
  return newState;
};
 
export default AppReducer;
 
 