<template>
  <div class="global-layout">
    <v-app>
      <transition name="fade">
        <FixedNav v-if="showScrollNav && windowWidth > 992" />
      </transition>
      <transition name="fade">
        <ResFixedNav v-if="showScrollNav && windowWidth <= 992" />
      </transition>
      <AppNav v-if="windowWidth > 992" />
      <ResponsiveNav v-if="windowWidth <= 992" />

      <Transition name="page" mode="out-in">
        <slot></slot>
      </Transition>
      <ResDrawer />
      <appFooter />
    </v-app>
  </div>
</template>

<script setup>
const showScrollNav = ref(false);
const windowWidth = ref();

const handleScroll = () => {
  showScrollNav.value = window.scrollY > 100;
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });

  window.addEventListener("scroll", handleScroll);
});
</script>
<style lang="scss">
:root {
  font-family: "Manrope", sans-serif;
  scroll-behavior: smooth;
}
.global-layout {
  background-color: rgb(var(--v-theme-bg8));
  position: relative;

  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
}
</style>
