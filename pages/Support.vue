<template>
  <div class="main-support-page">
    <SupportPage id="SupportPage"/>
    <HomeQuestions />
    <HomeFreeTrial />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layout",
});

useHead({
  title: "Support",
});
</script>

<style lang="scss" scoped>
.main-support-page {
  background-color: rgb(var(--v-theme-bg8));
}
</style>
