<template>
  <div class="home">
    <HomeUpperBanner />
    <HomeMoviesCategory id="HomeCategories" />
    <HomeProvide id="HomeDevices" />
    <HomeQuestions id="HomeFAQ" />
    <HomePlan id="HomePricing" />
    <HomeFreeTrial />
  </div>
</template>

<script setup>
useHead({
  title: "Home",
});
</script>

<style lang="scss">
.home {
  position: relative;
  background-color: rgb(var(--v-theme-bg8));
}
</style>
