import { applyMiddleware, combineReducers, createStore } from "redux";
import { ProjectReduser } from "../Reducer/PostProjectReducer";
import { thunk } from "redux-thunk";
import { GetProjects } from "../Reducer/GetProjectReducer";
const rootreducer = combineReducers({ GetProjects, ProjectReduser });
export const Store = createStore(rootreducer, applyMiddleware(thunk));
