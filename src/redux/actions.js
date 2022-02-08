export const HEADER_CHECK = "HEADER_CHECK";
export const IMAGE_CHECK = "IMAGE_CHECK";
export const VALUE_TITLE = "VALUE_TITLE";
export const VALUE_POST_TEXT = "VALUE_POST_TEXT";
export const VALUE_HEADER = "VALUE_HEADER";
export const IMG_PATH = "IMG_PATH";
export const ALL_SETTINGS = "ALL_SETTINGS";


export const switchHeaderCheckAC = () => {
  return {
    type: HEADER_CHECK,
  }
}

export const switchImageCheckAC = () => {
  return {
    type: IMAGE_CHECK,
  }
}

export const changeValueTitle = (value) => {
  return {
    type: VALUE_TITLE,
    payload: value
  }
}

export const changeValuePostText = (value) => {
  return {
    type: VALUE_POST_TEXT,
    payload: value
  }
}

export const changeValueHeader = (value) => {
  return {
    type: VALUE_HEADER,
    payload: value
  }
}

export const addImgPath = (value) => {
  return {
    type: IMG_PATH,
    payload: value
  }
}

export const addAllSettings = (value) => {
  return {
    type: ALL_SETTINGS,
    payload: value
  }
}


