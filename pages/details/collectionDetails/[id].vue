<template>
  <div class="collections-movies-selected">
    <h1 class="h1-collections-movies-selected">
      {{ movieData.name }}
    </h1>
    <p>
      {{ movieData.overview }}
    </p>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="4"
          lg="3"
          v-for="movie in movieData.parts"
          :key="movie.id"
        >
          <v-card class="card-collections-movies-selected">
            <nuxt-link
              :to="`/details/movieDetails/${movie.id}`"
              class="card-item-collections-movies-selected"
            >
              <img
                :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
                alt="Movie Poster"
              />
              <v-card-title class="title">
                <span>
                  {{
                    movie.title.split(" ").length <= 4
                      ? movie.title
                      : movie.title.split(" ").slice(0, 3).join(" ") + "..."
                  }}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                >
                  <path
                    d="M5.30005 12L20.3 12M20.3 12L13.55 5.25M20.3 12L13.55 18.75"
                    stroke="rgb(var(--v-theme-main1))"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </v-card-title>
            </nuxt-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layout",
});

useHead({
  title: "Collections Movies",
});

const route = useRoute();
const genreId = Number(route.params.id);
const config = useRuntimeConfig();

const movieData = ref({});

const fetchcollections = async (id, informations) => {
  const { data } = await useFetch(
    `https://api.themoviedb.org/3/collection/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  informations.value = data.value || {};
};

await fetchcollections(genreId, movieData);

const { $gsap } = useNuxtApp();
onMounted(() => {
  const fadeUp = (el, trigger = el, start = "top 90%") => {
    $gsap.set(el, { opacity: 0, y: 50 });
    $gsap.to(el, {
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

  document
    .querySelectorAll(".card-collections-movies-selected")
    .forEach((card) => {
      fadeUp(card);
    });
});
</script>
<style lang="scss" scoped>
.collections-movies-selected {
  position: relative;
  background-color: rgb(var(--v-theme-bg8));
  h1 {
    text-align: center;
    color: rgb(var(--v-theme-main1));
  }
  p {
    text-align: center;
    padding: 10px;
    color: rgb(var(--v-theme-main60));
  }
  .card-collections-movies-selected {
    background-color: rgb(var(--v-theme-bg10));
    border: 2px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    cursor: pointer;
    .card-item-collections-movies-selected {
      color: rgb(var(--v-theme-main1));
      text-decoration: none;
      img {
        width: 100%;
        border-radius: 10px;
        margin-bottom: 5px;
      }
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 767px) {
  .collections-movies-selected {
    .card-collections-movies-selected {
      .title {
        span {
          font-size: 14px;
        }
        svg {
          display: none;
        }
      }
    }
  }
}
</style>
