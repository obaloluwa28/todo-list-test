const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "taskFetchRequest":
    case "taskCreateRequest":
    case "taskEditRequest":
    case "taskDeleteRequest":
      return {
        ...state,
        loading: true,
      };

    case "taskFetchSuccess":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };

    case "taskCreateSuccess":
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };

    case "taskEditSuccess":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };

    case "taskDeleteSuccess":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };

    case "taskFetchFail":
    case "taskCreateFail":
    case "taskEditFail":
    case "taskDeleteFail":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
