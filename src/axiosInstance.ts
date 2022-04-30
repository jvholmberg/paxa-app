import axios from "axios";

const instance = axios.create({
  baseURL: "https://icanhazdadjoke.com",
});

export default instance;
