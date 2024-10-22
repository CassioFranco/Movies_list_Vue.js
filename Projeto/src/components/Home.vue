<template>
    <div>
        <div>
            <div v-for="movie in movies" :key="movie.id" class="movie">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="getImageUrl(movie.poster_path)" class="img-fluid rounded-start"
                                :alt="movie.title">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ movie.title }}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- 
        <div v-if="selectedMovie" class="movie-details">
            <h2>{{ selectedMovie.title }}</h2>
            <p>{{ selectedMovie.overview }}</p>
        </div> -->

    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      movies: [],
      selectedMovie: null,
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      const apiKey = '71b2633140294b7720dad85ff8cc2c93';
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      axios
        .get(url)
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    selectMovie(movie) {
      this.selectedMovie = movie;
    },
  },
};
</script>

<style>
</style>