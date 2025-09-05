<template>
  <div class="home-nav">
    <v-container>
      <v-row>
        <v-col cols="2" class="image">
          <img :src="logoImage" alt="Logo"
        /></v-col>
        <v-col cols=""></v-col>
        <v-col cols="7" lg="6" class="pages-main">
          <nuxt-link to="/" class="link">Home</nuxt-link>
          <nuxt-link to="/watchlist" class="link">Watchlist</nuxt-link>
          <nuxt-link to="/MoviesAndShows" class="link"
            >Movies & Shows</nuxt-link
          >
          <nuxt-link to="/Support" class="link">Support</nuxt-link>
          <nuxt-link to="/Subscriptions" class="link">Subscriptions</nuxt-link>
        </v-col>
        <v-col cols=""></v-col>
        <v-col cols="2" lg="2" class="icons">
          <div class="theme-toggle">
            <v-icon size="16">mdi-weather-night</v-icon>
            <v-switch @click="toggleTheme" inset hide-details></v-switch>
            <v-icon size="16">mdi-white-balance-sunny</v-icon>
          </div>
          <nuxt-link to="/search" class="link" title="Search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </nuxt-link>

          <router-link to="/login" class="link" title="logIn">
            <i class="fa-solid fa-user"></i>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
const isDark = computed(() => theme.global.name.value === "dark");
const logoImage = computed(() =>
  isDark.value ? "/images/logo.png" : "/images/logo.png"
);
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.global.name.value = savedTheme;
  }
});
const toggleTheme = () => {
  const newTheme = theme.global.name.value === "light" ? "dark" : "light";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
};

const { $gsap } = useNuxtApp();
onMounted(() => {
  const fadeUp = (selector, trigger = selector, start = "top 100%") => {
    $gsap.set(selector, { opacity: 0, y: 50 });
    $gsap.to(selector, {
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

  fadeUp(".home-nav");
});
</script>

<style lang="scss" scoped>
.home-nav {
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  z-index: 100000;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }
  .pages-main {
    background-color: rgb(var(--v-theme-bg6));
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    border-radius: 20px;
    border: 2px solid rgb(var(--v-theme-bg12));
    .link {
      color: rgb(var(--v-theme-main1));
      text-decoration: none;
      padding: 15px;
      font-size: 14px;
      &:focus {
        background-color: rgb(var(--v-theme-bg10));
        border-radius: 10px;
      }
      &:hover {
        background-color: rgb(var(--v-theme-bg10));
        border-radius: 10px;
      }
    }
  }

  .icons {
    background-color: rgb(var(--v-theme-bg6));
    border-radius: 20px;
    border: 2px solid rgb(var(--v-theme-bg12));
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    font-size: 20px;
    .theme-toggle {
      background-color: rgb(var(--v-theme-bg6));
      border-radius: 20px;
      padding: 0px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
      cursor: pointer;
    }
    .link {
      color: rgb(var(--v-theme-main1));
    }
  }
}
</style>
