export const UPLOAD_PROJECT = "UPLOAD_PROJECT";
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";
export const UploadProject = (Project) => {
  return {
    type: "UPLOAD_PROJECT",
    Payload: Project,
  };
};

export const GetAllProjects = (Projects) => {
  return {
    type: "GET_ALL_PROJECTS",
    payload: Projects,
  };
};
