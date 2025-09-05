<template>
  <div class="search-person-selected">
    <div class="search-header">
      <input
        type="search"
        class="search-field"
        placeholder="Search for persons"
        v-model="personSearch"
      />
    </div>
    <v-row v-if="personData.results">
      <v-col
        cols="6"
        md="3"
        lg="2"
        v-for="person in personData.results"
        :key="person.id"
      >
        <v-card class="card-search-person-selected">
          <nuxt-link
            :to="`/person/${person.id}`"
            class="card-item-search-person-selected"
          >
            <img
              v-if="person.profile_path"
              :src="`https://image.tmdb.org/t/p/w185${person.profile_path}`"
            />
            <img src="/public/images/rate.png" v-else />
            <v-card-title class="title">
              <span>
                {{ person.name.split(" ").slice(0, 1).join(" ") + "..." }}
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
    <v-row v-if="personData.results && personData.results.length === 0">
      <v-col cols="12" class="no-data">
        <h1>There are no results for this search.</h1>
      </v-col>
    </v-row>
    <v-row v-if="!personData.results">
      <v-col cols="12" class="no-data">
        <h1>Please search for any person to see results</h1>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const personSearch = ref("");
const personData = ref({});
const config = useRuntimeConfig();
const fetchpersonearch = async (queryId, informations) => {
  if (!queryId) {
    personData.value = {};
    return;
  }
  const { data } = await useFetch(
    `https://api.themoviedb.org/3/search/person?query=${queryId}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  informations.value = data.value || {};
};

watch(personSearch, (newValue) => {
  fetchpersonearch(newValue, personData);
});
</script>
<style lang="scss" scoped>
.search-person-selected {
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

  .card-search-person-selected {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);

    border-radius: 10px;
    cursor: pointer;
    .card-item-search-person-selected {
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
  .search-person-selected {
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
    .card-search-person-selected {
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
