<template>
  <div class="moveis-shows">
    <div class="wait-data" v-if="pending">
      <v-container>
        <v-row>
          <v-col cols="6" md="4" lg="3" v-for="row in 4" :key="row">
            <v-skeleton-loader type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="moveis-shows-data" v-else>
      <MoviesandshowsUpperBanner
        :popularMovies="popularMovies"
        class="MoviesandshowsUpperBanner"
      />

      <v-container class="comp-container">
        <h1 class="main-header-movies">Movies</h1>
        <MoviesandshowsMoviesGenres id="MoviesGenres" />
        <MoviesandshowsMoviesPopuler :popularMovies="popularMovies" />
        <MoviesandshowsMoviesTopRated :moviesTopRated="moviesTopRated" />
        <MoviesandshowsMoviesNowPlaying :moviesNowPlaying="moviesNowPlaying" />
        <MoviesandshowsMoviesUpComing :moviesUpComing="moviesUpComing" />
      </v-container>

      <v-container class="comp-container">
        <h1 class="main-header-movies">Shows</h1>
        <MoviesandshowsShowGenres id="ShowGenres" />
        <MoviesandshowsShowPopuler :popularShows="popularShows" />
        <MoviesandshowsShowonAir :showOnAir="showOnAir" />
        <MoviesandshowsShowTopRated :showTopRated="showTopRated" />
        <MoviesandshowsShowAiringToday :showAiringToday="showAiringToday" />
      </v-container>

      <HomeFreeTrial />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layout",
});

useHead({
  title: "Movies And Shows",
});

const { data, pending } = await useFetch("/api/movies-shows");

const popularMovies = data.value.moviesPopular;
const moviesTopRated = data.value.moviesTopRated;
const moviesNowPlaying = data.value.moviesNowPlaying;
const moviesUpComing = data.value.moviesUpComing;

const popularShows = data.value.showsPopular;
const showOnAir = data.value.showsOnAir;
const showTopRated = data.value.showsTopRated;
const showAiringToday = data.value.showsAiringToday;

const { $gsap } = useNuxtApp();
onMounted(() => {
  const fadeUp = (selector, trigger = selector, start = "top 100%") => {
    $gsap.set(selector, { opacity: 0, y: 50 });
    $gsap.to(selector, {
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "linear",
    });
  };

  fadeUp(".MoviesandshowsUpperBanner");
});
</script>

<style lang="scss" scoped>
.moveis-shows {
  background-color: rgb(var(--v-theme-bg8));

  .comp-container {
    background-color: rgb(var(--v-theme-bg8));
    border-radius: 10px;
    border: 1px solid rgb(var(--v-theme-bg15));
    padding: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    .main-header-movies {
      background-color: rgb(var(--v-theme-text));
      color: white;
      border-radius: 10px;
      width: fit-content;
      padding: 10px;
      position: absolute;
      top: 0%;
      // left: 10%;
      animation: floatLeftRight 6s ease-in-out infinite;
    }
  }
}

@media (max-width: 992px) {
  .moveis-shows {
    .comp-container {
      .main-header-movies {
        animation: floatResmeduim 5s ease-in-out infinite;
      }
    }
  }
}

@media (max-width: 767px) {
  .moveis-shows {
    .comp-container {
      border-radius: 5px;
      padding: 5px;
      margin-top: 50px;
      margin-bottom: 50px;
      .main-header-movies {
        color: white;
        border-radius: 10px;
        width: fit-content;
        padding: 10px;
        position: absolute;
        font-size: 20px;
        top: 0%;
        // left: 10%;
        animation: floatResSmall 4s ease-in-out infinite;
      }
    }
  }
}
@keyframes floatLeftRight {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(500%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes floatResmeduim {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(350%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes floatResSmall {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(250%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
