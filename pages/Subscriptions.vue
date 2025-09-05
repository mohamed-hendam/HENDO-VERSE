<template>
  <div class="subscriptions-main-page">
    <HomePlan id="PlanPage"/>
    <subscriptions-page id="SubscriptionsPage "/>
    <home-free-trial />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layout",
});

useHead({
  title: "Subscriptions",
});
</script>

<style lang="scss" scoped>
.subscriptions-main-page {
  background-color: rgb(var(--v-theme-bg8));
}
</style>
