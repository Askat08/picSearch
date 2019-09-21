import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c8a502ebda6ddd2be66907dcdaa77a406ad4cc2cfb55264ef08faa938f19458d"
  }
});
