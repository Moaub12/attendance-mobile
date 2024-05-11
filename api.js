import axios from "axios";



const api = axios.create({
  baseURL:`https://phplaravel-1263085-4547862.cloudwaysapps.com`,
    headers: {
    "Content-Type": "application/json",
  },
});

export default api;

