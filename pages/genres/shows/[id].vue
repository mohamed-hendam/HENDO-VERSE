<template>
  <div class="genres-shows-selected">
    <h1 class="h1-genres-shows-selected">
      Here Is Your {{ selectedGenre }} Shows Collection
    </h1>
    <p>
      Get ready for an unforgettable cinematic journey, where every story is
      crafted to inspire, thrill, and captivate your imagination.
    </p>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="4"
          lg="3"
          v-for="show in showsData.results"
          :key="show.id"
        >
          <v-card class="card-genres-shows-selected">
            <nuxt-link
              :to="`/details/showDetails/${show.id}`"
              class="card-item-genres-shows-selected"
            >
              <img
                :src="`https://image.tmdb.org/t/p/w342${show.poster_path}`"
                alt="show Poster"
              />
              <v-card-title class="title">
                <span>
                  {{
                    show.name.split(" ").length <= 4
                      ? show.name
                      : show.name.split(" ").slice(0, 3).join(" ") + "..."
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
  title: "Shows genres",
});

const route = useRoute();
const genreId = Number(route.params.id);
const config = useRuntimeConfig();

const genresList = ref([]);

const fetchGenres = async () => {
  const { data } = await useFetch(
    "https://api.themoviedb.org/3/genre/tv/list?language=en-US",
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  genresList.value = data.value?.genres || [];
};

const selectedGenre = computed(() => {
  return genresList.value.find((i) => i.id === genreId)?.name || "Unknown";
});

const showsData = ref({});

const fetchShowData = async (genreId, traget) => {
  const { data } = await useFetch(
    `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  traget.value = data.value || {};
};
await fetchGenres();
await fetchShowData(genreId, showsData);

const { $gsap } = useNuxtApp();
onMounted(() => {
  const fadeUp = (el, trigger = el, start = "top 60%") => {
    $gsap.set(el, { opacity: 0, y: 150 });
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

  document.querySelectorAll(".card-genres-shows-selected").forEach((card) => {
    fadeUp(card);
  });
});
</script>
<style lang="scss" scoped>
.genres-shows-selected {
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
  .card-genres-shows-selected {
    background-color: rgb(var(--v-theme-bg10));
    border: 2px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    cursor: pointer;
    .card-item-genres-shows-selected {
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
  .genres-shows-selected {
    .card-genres-shows-selected {
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
