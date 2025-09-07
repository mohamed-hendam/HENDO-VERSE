<template>
  <div class="main-search-page">
    <v-container>
      <div class="main-search-header">
        <h1>Search For Any Thing You Want</h1>
        <div class="search-type">
          <v-btn-toggle v-model="showSearchType" mandatory class="btn-toggle">
            <v-btn value="All">All</v-btn>
            <v-btn value="Movies">Movies</v-btn>
            <v-btn value="Shows">Shows</v-btn>
            <v-btn value="Persons">Persons</v-btn>
            <v-btn value="Collections">Collections</v-btn>
          </v-btn-toggle>
        </div>
      </div>

      <SearchMultiSearch v-if="showSearchType === 'All'" />
      <SearchMoviesSearch v-else-if="showSearchType === 'Movies'" />
      <SearchShowSearch v-else-if="showSearchType === 'Shows'" />
      <SearchPersonSearch v-else-if="showSearchType === 'Persons'" />
      <SearchCollectionSearch v-else-if="showSearchType === 'Collections'" />
    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layout",
});

useHead({
  title: "Search",
});
const showSearchType = ref("All");
</script>

<style lang="scss" scoped>
.main-search-page {
  background: linear-gradient(
    270deg,
    rgba(var(--v-theme-bg6)) 0%,
    rgba(var(--v-theme-bg6)) 25%,
    rgba(var(--v-theme-gradient)) 35%,
    rgba(var(--v-theme-bg6)) 60%,
    rgba(var(--v-theme-bg6)) 85%,
    rgba(var(--v-theme-gradient)) 95%,
    rgba(var(--v-theme-bg6)) 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;

  .main-search-header {
    text-align: center;
    h1 {
      font-size: 40px;
      padding: 20px;
      font-weight: 400;
    }

    .search-type {
      .btn-toggle {
        text-align: center;
        .v-btn {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(100px);
          -webkit-backdrop-filter: blur(100px);
          color: rgba(var(--v-theme-main1));
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .main-search-page {
    .main-search-header {
      text-align: center;
      h1 {
        font-size: 25px;
        padding: 10px;
        font-weight: 400;
      }

      .search-type {
        .btn-toggle {
          text-align: center;
          margin: 10px auto;
          width: 50%;
          display: flex;
          flex-direction: column;
          height: 180px;
          .v-btn {
            flex-grow: 1;
            font-size: 16px;
          }
        }
      }
    }
  }
}
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
