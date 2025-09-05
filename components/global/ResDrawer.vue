<template>
  <div class="res-drawer">
    <v-navigation-drawer v-model="openDrawer">
      <v-list-item class="image"> <img :src="logoImage" alt="" /></v-list-item>
      <v-divider></v-divider>

      <div class="theme-toggle">
        <v-icon size="16">mdi-weather-night</v-icon>
        <v-switch @click="theme.toggle()" inset hide-details></v-switch>
        <v-icon size="16">mdi-white-balance-sunny</v-icon>
      </div>
      <v-divider></v-divider>
      <nuxt-link to="/search" class="link">
        <v-list-item class="item"> Search </v-list-item>
      </nuxt-link>
      <v-divider></v-divider>
      <nuxt-link to="/" class="link">
        <v-list-item class="item"> Home </v-list-item>
      </nuxt-link>
      <v-divider></v-divider>
      <nuxt-link to="/watchlist" class="link">
        <v-list-item class="item"> Watchlist </v-list-item>
      </nuxt-link>
      <v-divider></v-divider>
      <nuxt-link to="/MoviesAndShows" class="link">
        <v-list-item class="item"> Movies & Shows </v-list-item>
      </nuxt-link>
      <v-divider></v-divider>
      <nuxt-link to="/Support" class="link">
        <v-list-item class="item"> Support </v-list-item>
      </nuxt-link>
      <v-divider></v-divider>
      <nuxt-link to="/Subscriptions" class="link">
        <v-list-item class="item"> Subscriptions </v-list-item>
      </nuxt-link>
      <v-divider></v-divider>
      <nuxt-link to="/login" class="link">
        <v-list-item class="item"> log in </v-list-item>
      </nuxt-link>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const isDark = computed(() => theme.global.name.value === "dark");

const logoImage = computed(() =>
  isDark.value ? "/images/logo.png" : "/images/logo2.png"
);

const { $emitter } = useNuxtApp();
const openDrawer = ref(false);

onMounted(() => {
  $emitter.on("toggleDrawer", () => {
    openDrawer.value = !openDrawer.value;
  });
});
</script>

<style lang="scss" scoped>
.res-drawer {
  background-color: rgb(var(--v-theme-bg8));
  box-shadow: 0px 0px 20px 8px rgb(var(--v-theme-bg10));
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    img {
      max-width: 100%;
    }
  }
  .theme-toggle {
    padding: 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    cursor: pointer;
  }
  .link {
    text-decoration: none;
    color: rgb(var(--v-theme-main1));
    .item {
      text-align: start;
      padding: 20px;
    }
  }
}
</style>
