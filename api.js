import axios from "axios";



const api = axios.create({
  baseURL:`https://phplaravel-1296316-4711618.cloudwaysapps.com/`,
    headers: {
    "Content-Type": "application/json",
  },
});

export default api;

