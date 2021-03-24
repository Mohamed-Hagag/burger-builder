import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-df27e-default-rtdb.firebaseio.com/",
});
export default instance;
