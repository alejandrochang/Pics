import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2bc6e75180939aeb80dad6e95750d827a079989c47e98deb24015e7aa61ca668"
  }
});