var app = new Vue({
  el: "#app",
  data() {
    return {
      books: [],
      filteredBooks: [],
      originalBooks: [],
      search: "",
      carouselDisplayed: false
    };
  },

  methods: {
    filteredSearch: function () {
      if (this.search.length === 0) {
        this.books = this.originalBooks
      } else {
        let searchWord = this.search.toLowerCase()
        let filtered = this.originalBooks.filter(
          book => {
            let inTitle = book.titulo.toLowerCase().split(" ").includes(searchWord);
            let inDesc = book.descripcion.toLowerCase().split(" ").includes(searchWord);
            return inTitle || inDesc
          }
        );
        this.books = filtered;
      }
    },

    toggleCarousel: function () {
      console.log("btn clicked")
      this.carouselDisplayed = !this.carouselDisplayed
    }
  },

  created() {
    let url = "https://api.myjson.com/bins/udbm5";

    fetch(url)
      .then(response => {
        if (response.ok) {
          console.log("Request succeeded: " + response.statusText);
          return response.json();
        }

        throw new Error(response.statusText);
      })
      .then(json => {
        // json = {books: [{}, {}, ....]}
        this.books = json.books;
        this.originalBooks = json.books;
        // console.log(books);
        // let all = populateBooks(books);
      })
      .catch(error => {
        console.log("Request failed: " + error.message);
      });
  }
});