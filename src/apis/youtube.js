import axios from "axios";

const KEY = "AIzaSyDEr1JB4IrLSJHz4uJa7ERSigcnlLOuei8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: "5",
    key: KEY,
  },
});
