import {
  IMG_PATH,
  HEADER_CHECK,
  IMAGE_CHECK,
  VALUE_HEADER,
  VALUE_TITLE,
  VALUE_POST_TEXT,
  ALL_SETTINGS
} from "./actions";


const initialState = {
  headerCheck: false,
  imageCheck: false,
  valueTitle: "",
  valuePostText: "",
  valueHeader: "",
  imgPath: "",
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEADER_CHECK:
      return {
        ...state,
        headerCheck: !state.headerCheck,
      };
    case IMAGE_CHECK:
      return {
        ...state,
        imageCheck: !state.imageCheck,
      };
    case VALUE_TITLE:
      return {
        ...state,
        valueTitle: action.payload,
      };
    case VALUE_POST_TEXT:
      return {
        ...state,
        valuePostText: action.payload,
      };
    case VALUE_HEADER:
      return {
        ...state,
        valueHeader: action.payload,
      };
    case IMG_PATH:
      return {
        ...state,
        imgPath: action.payload,
      };
    case ALL_SETTINGS:
      return {
        ...state,
        headerCheck: action.payload.headerCheck,
        imageCheck: action.payload.imageCheck,
        valueTitle: action.payload.valueTitle,
        valuePostText: action.payload.valuePostText,
        valueHeader: action.payload.valueHeader,
        imgPath: action.payload.imgPath,
      };
    default:
      return state;
  }
}

export default settingsReducer;
