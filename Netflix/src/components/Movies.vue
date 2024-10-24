<template>
    <html lang="pt-br" data-bs-theme="auto">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
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
            <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme"
                type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
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
                    <button type="button" class="dropdown-item d-flex align-items-center active"
                        data-bs-theme-value="auto" @click="changeTheme('auto')" aria-pressed="true">
                        <svg class="bi me-2 opacity-50" width="1em" height="1em">
                            <use href="#circle-half"></use>
                        </svg>
                        Auto
                    </button>
                </li>
            </ul>

        </div>




        <div class="movie-box">
            <h1 class="title">{{ movie.title }}</h1>
            <div class="movie-details d-flex justify-content-center">
                <div class="poster-container">
                    <img class="poster" width="300px" :src="getPosterUrl(movie.poster_path)" alt="Movie Poster" />
                </div>
                <div class="info-container ">
                    <p>Nota: {{ movie.vote_average }}</p>
                    <p>Duração: {{ movie.runtime }} minutos</p>
                    <p>Orçamento: {{ movie.budget }}</p>
                    <p>Gêneros: {{ genresString }}</p>
                </div>
            </div>
            <div class="bottom-details">
                <p class="descricao">{{ movie.overview }}</p>
                <p class="lancamento">Data de Lançamento: {{ movie.release_date }}</p>
            </div>
        </div>

        <div class="elenco-title">
            <h2>Elenco:</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 mb-4" v-for="actor in cast" :key="actor.id">
                    <div class="card text-center">
                        <img v-if="actor.profile_path" :src="getActorImageUrl(actor.profile_path)" alt="Actor Image"
                            class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{{ actor.name }}</h5>
                            <p class="card-text">como {{ actor.character }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </body>

    </html>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
    name: 'MovieDetails',
    data() {
        return {
            movie: {},
            cast: [],
            currentTheme: 'auto'
        };
    },
    mounted() {
        this.fetchMovieDetails();
        this.updateTheme(this.currentTheme);
    },
    methods: {
        fetchMovieDetails() {
            const movieId = this.$route.params.id;
            const apiKey = '71b2633140294b7720dad85ff8cc2c93';
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`;

            axios
                .get(url)
                .then((response) => {
                    this.movie = response.data;
                    this.fetchCast(movieId);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        fetchCast(movieId) {
            const apiKey = '71b2633140294b7720dad85ff8cc2c93';
            const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=pt-BR`;

            axios
                .get(url)
                .then((response) => {
                    this.cast = response.data.cast;
                })
                .catch((error) => {
                    console.error('Erro ao buscar o elenco:', error);
                });
        },
        getPosterUrl(path) {
            return `https://image.tmdb.org/t/p/w500${path}`;
        },
        getActorImageUrl(path) {
            return `https://image.tmdb.org/t/p/w500${path}`;
        },
        changeTheme(theme) {
            console.log("Mudando tema para:", theme);
            this.currentTheme = theme;
            this.updateTheme(theme);
        },
        updateTheme(theme) {
            const htmlElement = document.documentElement;
            const bodyElement = document.body;

            if (theme === 'light') {
                htmlElement.setAttribute('data-bs-theme', 'light');
                bodyElement.style.backgroundColor = '#ffffff';
                bodyElement.style.color = '#000000';
            } else if (theme === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                bodyElement.style.backgroundColor = '#333333'; //
                bodyElement.style.color = '#ffffff';
            } else {
                htmlElement.setAttribute('data-bs-theme', 'auto');
                
                bodyElement.style.backgroundColor = ''; 
                bodyElement.style.color = '';
            }
        }


    },
    computed: {
        genresString() {
            return this.movie.genres ? this.movie.genres.map(genre => genre.name).join(', ') : '';
        },
    },
    components: {
        Navbar,
        Footer
    }
};
</script>

<style scoped>
* {
    font-family: Helvetica;
}

body {
    color: #ffffff;
    font-family: Arial, sans-serif;
 
}


.movie-box {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 20px;
    width: 50%;
    margin: 20px auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    margin-top: 70px;
}

.info-container {
    margin-top: 20px;
    color: white;
}

.movie-details {
    display: flex;
    justify-content: flex-end;
}

.poster-container {
    margin-left: 20px;
    margin-right: 20px;
}

.title {
    font-size: 24px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-left: 35px;
}

.descricao {
    font-size: 14px;
    margin-top: 30px;
}

.lancamento {
    font-size: 14px;
    color: #888888;
}

.elenco-title {
    display: flex;
    margin-top: 70px;
    margin-bottom: 20px;
    margin-left: 70px;
}

.card {
    background-color: rgba(0, 0, 0, 0.7);
}

.card-title {
    font-size: 16px;
    color: white;
}

.card-text {
    font-size: 12px;
    color: white;
}
</style>
