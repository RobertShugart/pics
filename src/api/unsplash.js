import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      " Client-ID fd8126bf4f1e25833a7b14b37162985b4994e663ec1bbc814f7b1fc56aadc960"
  }
});
