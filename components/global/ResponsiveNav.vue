<template>
  <div class="responsive-nav">
    <v-container>
      <v-row>
        <v-col cols="6" class="image"> <img :src="logoImage" /></v-col>
        <v-col cols="6" class="icons">
          <div class="icon">
            <v-app-bar-nav-icon @click="open"></v-app-bar-nav-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { $emitter } = useNuxtApp();
const open = () => {
  $emitter.emit("toggleDrawer");
};

import { useTheme } from "vuetify";
const theme = useTheme();
const isDark = computed(() => theme.global.name.value === "dark");

const logoImage = computed(() =>
  isDark.value ? "/images/logo.png" : "/images/logo2.png"
);
</script>

<style lang="scss" scoped>
.responsive-nav {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgb(var(--v-theme-bg8));
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: end;

    .icon {
      background-color: rgb(var(--v-theme-bg6));
      border-radius: 10px;
      border: 1px solid rgb(var(--v-theme-bg12));
      font-size: 18px;
      width: fit-content;
      padding: 5px;
    }
  }
}

// @media (min-width: 1280px) {
//   .v-container {
//     max-width: 1600px;
//   }
// }
</style>
