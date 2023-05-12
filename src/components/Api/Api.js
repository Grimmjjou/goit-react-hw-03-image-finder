export default async function getImages(inputValue, page = 1) {
  const url = 'https://pixabay.com/api/';
  const API_KEY = '36333021-ab163d7e5e32d7f76422b6844';

  return await fetch(
    `${url}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
