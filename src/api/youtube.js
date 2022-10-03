import axios from "axios";

const KEY = "AIzaSyAq6y9cQyqmUe9A2E_7SkJg5C_aKNGU50M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
