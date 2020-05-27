const initialState = {
  allMaterials: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'STORE_ALL_MATERIALS':
      return {
        ...state,
        allMaterials: action.payload,
      };
    case 'ADD_NEW_MATERIALS':
      return {
        ...state,
        allMaterials: [action.payload, ...state.allMaterials],
      };
    case 'UPDATE_MATERIALS':
      const updatedItems = state['allMaterials'].map((item) => {
        if (item._id === action.payload._id) {
          debugger;
          return [...item, ...action.payload];
        }
        return item;
      });
      return {
        ...state,
        allMaterials: updatedItems,
      };

    default:
      return state;
  }
}
