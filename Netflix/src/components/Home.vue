<template>
  <div lang="pt-br" data-bs-theme="auto">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="author" content="Bootstrap contributors">
      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>
      <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      </svg>
      <Navbar />

      <main>
        <section class="py-4 text-center container">
          <div class="row py-lg-3">
            <div class="col-lg-6 col-md-8 mx-auto">
              <img src="../../public/images/Netflix_Logo_RGB.png" alt="logo" width="500">
              <p class="lead text-body-secondary">Bem-vindo à nossa página de catálogo de filmes!</p>
              <p>
                <a href="#" class="btn btn-primary my-2">Contato</a>
                <a href="#" class="btn btn-secondary my-2">Favoritos</a>
              </p>
            </div>
          </div>
        </section>
        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-center">
              <div v-for="movie in movies" :key="movie.id" class="col d-flex justify-content-center">
                <div class="card shadow-sm" style="width: 18rem;">
                  <img :src="getPosterUrl(movie.poster_path)" class="img-fluid rounded-start" :alt="movie.title">
                  <h5 class="card-title">{{ movie.title }}</h5>
                  <div class="card-body">
                    <p class="card-text movie-description">{{ movie.overview }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button @click="goToMovie(movie.id)">Ver mais</button>
                        <button @click="toggleFavorite(movie)" class="favorite-button" aria-label="Favoritar">
                          <img :src="movie.isFavorite ? '/heart%20(1).png' : '/heart.png'"
                               :alt="movie.isFavorite ? 'favorite' : 'not favorite'"
                               class="favorite-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      movies: [],
      currentTheme: 'auto'
    };
  },
  mounted() {
    this.fetchMovies();
    this.updateTheme(this.currentTheme);
  },
  methods: {
    fetchMovies() {
      const apiKey = '71b2633140294b7720dad85ff8cc2c93';
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      axios
        .get(url)
        .then((response) => {
          this.movies = response.data.results.map(movie => ({
            ...movie,
            isFavorite: false
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    goToMovie(movieId) {
      this.$router.push({ name: 'movies', params: { id: movieId } });
    },
    toggleFavorite(movie) {
      movie.isFavorite = !movie.isFavorite;
    },
    changeTheme(theme) {
      this.currentTheme = theme;
      this.updateTheme(theme);
    },
    updateTheme(theme) {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute('data-bs-theme', theme === 'auto' ? '' : theme);
    }
  }
};
</script>

<style>
.bd-mode-toggle {
  z-index: 1500;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.favorite-icon {
  width: 24px;
  height: 24px;
}

.movie-description {
  max-height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
