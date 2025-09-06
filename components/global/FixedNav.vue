<template>
  <div class="fixed-nav">
    <v-container>
      <v-row>
        <v-col cols="2" class="image">
          <img
            :src="isDark ? '/images/logo11.png' : '/images/logo22.png'"
            alt="Logo"
          />
        </v-col>
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
        <v-col cols="2" class="icons">
          <div class="theme-toggle">
            <v-icon size="16">mdi-weather-night</v-icon>
            <v-switch @click="theme.toggle()" inset hide-details></v-switch>
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
</script>

<style lang="scss" scoped>
.fixed-nav {
  position: fixed;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgb(var(--v-theme-bg8));
  box-shadow: 0px 0px 20px 8px rgb(var(--v-theme-bg10));

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

// @media (min-width: 1280px) {
//   .v-container {
//     max-width: 1600px;
//   }
// }
</style>
