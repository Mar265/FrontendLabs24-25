const AppReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const newId = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, { ...action.item, id: newId }];
    case 'edit':
      return state.map(item =>
        item.id === action.id ? { ...item, ...action.updatedItem } : item
      );
    case 'delete':
      return state.filter(item => item.id !== action.id);
    case 'rate':
      return state.map(item =>
        item.id === action.id ? { ...item, rating: action.rating } : item
      );
    default:
      return state;
  }
};
 
export default AppReducer;