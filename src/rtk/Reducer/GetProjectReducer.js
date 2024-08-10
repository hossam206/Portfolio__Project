import { GET_ALL_PROJECTS } from "../action/action";

const initialstate = {
  Projects: [],
};

export const GetProjects = (state = initialstate, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        Projects: action.payload,
      };
    default:
      return state;
  }
};
