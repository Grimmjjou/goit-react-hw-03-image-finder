import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '36333021-ab163d7e5e32d7f76422b6844';

async function createRequest(name, page = 1) {
  const params = {
    url: URL,
    params: {
      key: KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      q: name,
      per_page: 12,
    },
  };
  return await axios(params);
}

export { createRequest };
