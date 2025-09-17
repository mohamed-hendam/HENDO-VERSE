<template>
  <div class="home">
    <LazyHomeUpperBanner />
    <LazyHomeMoviesCategory id="HomeCategories" />
    <LazyHomeProvide id="HomeDevices" />
    <LazyHomeQuestions id="HomeFAQ" />
    <LazyHomePlan id="HomePricing" />
    <LazyHomeFreeTrial />
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
