import { UPLOAD_PROJECT } from "../action/action";

const initialstate = {
  projects: [],
};
export const ProjectReduser = (state = initialstate, action) => {
  switch (action.type) {
    case UPLOAD_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};
