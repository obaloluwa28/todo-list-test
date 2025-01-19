const initialState = {
  categories: [],
  loading: false,
  error: null,
  successMessage: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categoryCreateRequest":
    case "categoryDeleteRequest":
    case "categoryFetchRequest":
      return {
        ...state,
        loading: true,
      };

    case "categoryCreateSuccess":
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload], // Add newly created category
        successMessage: action.message,
      };

    case "categoryDeleteSuccess":
      return {
        ...state,
        loading: false,
        categories: action.payload, // Remove deleted category
        successMessage: action.message,
      };

    case "categoryFetchSuccess":
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case "categoryCreateFail":
    case "categoryDeleteFail":
    case "categoryFetchFail":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
