const BASE_URL = 'https://pixabay.com';
const API_KEY = '36333021-ab163d7e5e32d7f76422b6844';

export default class FetchPicture {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchArticles() {
    return await fetch(
      `${BASE_URL}/api/?q=${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ hits }) => {
        this.incrementPage();
        if (hits.length === 0) {
          console.log(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        return { hits };
      })
  }
  incrementPage() {
    this.page = this.page + 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

}

