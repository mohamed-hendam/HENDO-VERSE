<template>
  <div class="search-shows-selected">
    <div class="search-header">
      <input
        type="search"
        class="search-field"
        placeholder="Search for Shows"
        v-model="showsSearch"
      />
    </div>
    <v-row v-if="showsData.results">
      <v-col
        cols="6"
        md="4"
        lg="3"
        v-for="show in showsData.results"
        :key="show.id"
      >
        <v-card class="card-search-shows-selected">
          <nuxt-link
            :to="`/details/showDetails/${show.id}`"
            class="card-item-search-shows-selected"
          >
            <img
              v-if="show.poster_path"
              :src="`https://image.tmdb.org/t/p/w342${show.poster_path}`"
            />
            <img src="/public/images/rate.png" v-else />
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
    <v-row v-if="showsData.results && showsData.results.length === 0">
      <v-col cols="12" class="no-data">
        <h1>There are no results for this search.</h1>
      </v-col>
    </v-row>
    <v-row v-if="!showsData.results">
      <v-col cols="12" class="no-data">
        <h1>Please search for any show to see results</h1>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const showsSearch = ref("");
const showsData = ref({});
const config = useRuntimeConfig();
const fetchshowSearch = async (queryId, informations) => {
  if (!queryId) {
    showsData.value = {};
    return;
  }

  const { data } = await useFetch(
    `https://api.themoviedb.org/3/search/tv?query=${queryId}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  informations.value = data.value || {};
};

watch(showsSearch, (newValue) => {
  fetchshowSearch(newValue, showsData);
});
</script>
<style lang="scss" scoped>
.search-shows-selected {
  .search-header {
    padding: 40px 0;
    .search-field {
      width: 100%;
      height: 100px;
      padding: 20px;

      background-color: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(100px);
      -webkit-backdrop-filter: blur(100px);
      color: rgba(var(--v-theme-main1));
      border-radius: 50px;
      &:focus {
        border: 0;
        outline: 0;
      }
    }
  }

  .card-search-shows-selected {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);

    border-radius: 10px;
    cursor: pointer;
    .card-item-search-shows-selected {
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
  .no-data {
    h1 {
      text-align: center;
      padding: 20px;
      font-weight: 400;
    }
  }
}

@media (max-width: 767px) {
  .search-shows-selected {
    .search-header {
      padding: 20px 0;
      .search-field {
        width: 100%;
        height: 50px;
        padding: 15px;

        border-radius: 30px;
        &:focus {
          border: 0;
          outline: 0;
        }
      }
    }
    .no-data {
      h1 {
        text-align: center;
        padding: 10px;
        font-size: 20px;
      }
    }
    .card-search-shows-selected {
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
