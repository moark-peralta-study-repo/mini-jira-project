import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
})

export const getProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
}

export const getProjectBoard = async (projectId: string) => {
  const res = await api.get(`/projects/${projectId}/board`);
  return res.data;
}
