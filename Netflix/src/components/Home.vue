<template>
  <html lang="pt-br" data-bs-theme="auto">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.122.0">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/album/">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>

  <body>
    <Navbar />

    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        <path
          d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path
          d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
      </symbol>
    </svg>

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button"
        aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
          <use href="#circle-half"></use>
        </svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>

      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light"
            @click="changeTheme('light')" aria-pressed="false">
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#sun-fill"></use>
            </svg>
            Light
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark"
            @click="changeTheme('dark')" aria-pressed="false">
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto"
            @click="changeTheme('auto')" aria-pressed="true">
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            Auto
          </button>
        </li>
      </ul>
    </div>



    <main>
      <section class="py-4 text-center container">
        <div class="row py-lg-3">
          <div class="col-lg-6 col-md-8 mx-auto">
            <img src="../../public/images/Netflix_Logo_RGB.png" alt="logo" width="500">
            <p class="lead text-body-secondary">Bem-vindo à nossa página de catálogo de filmes! Descubra novas histórias
              aqui cada filme conta uma história, e estamos aqui para ajudar você a encontrá-las!</p>
            <p>
              <a href="#" class="teste btn btn-primary my-2" @click="goToFavoritos">Favoritos</a>
            </p>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-center">
            <div v-for="movie in movies" :key="movie.id" class="col d-flex justify-content-center">
              <div class="card shadow-sm" style="width: 18rem;">
                <img :src="getPosterUrl(movie.poster_path)" class="img-fluid rounded-start" :alt="movie.title"
                  style="width: 100%;">
                <h5 class="card-title">{{ movie.title }}</h5>
                <div> ⭐ {{ movie.vote_average }}</div>
                <div class="card-body">
                  <p class="card-text movie-description">{{ movie.overview }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn btn-secondary">
                      <button @click="goToMovie(movie.id)" class="vermais-btn">Ver mais</button>
                    </div>
                    <button @click="toggleFavorite(movie)" class="favorite-button" aria-label="Favoritar">
                      <img :src="movie.isFavorite ? '/heart%20(1).png' : '/heart.png'"
                        :alt="movie.isFavorite ? 'favorite' : 'not favorite'" class="favorite-icon" />
                    </button>
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

  </html>
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
    this.loadFavorites();
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
            isFavorite: this.isFavorite(movie.id)
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    isFavorite(movieId) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return favorites.includes(movieId);
    },
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    goToMovie(movieId) {
      this.$router.push({ name: 'movies', params: { id: movieId } });
    },
    goToFavoritos() {
      this.$router.push({ name: 'favoritos' });
    },
    toggleFavorite(movie) {
      movie.isFavorite = !movie.isFavorite;
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (movie.isFavorite) {
        favorites.push(movie.id);
      } else {
        const index = favorites.indexOf(movie.id);
        if (index > -1) {
          favorites.splice(index, 1);
        }
      }

      localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.forEach(favoriteId => {
        const movie = this.movies.find(movie => movie.id === favoriteId);
        if (movie) {
          movie.isFavorite = true;
        }
      });
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

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}

.card {
  width: 300px;
}

.card img {
  width: 100%;
}

.album .container {
  display: flex;
  justify-content: center;
}

.row {
  justify-content: center;
}

.teste {
  margin-right: 15px;
}

.movie-description {
  max-height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.container {
  color: white;
}

.voltar {
  color: #e9292c;
}


.favorite-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
}

.favorite-icon {
  width: 24px;
  height: 24px;
}


.vermais-btn {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
}
</style>