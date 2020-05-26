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
    default:
      return state;
  }
}
