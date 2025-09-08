<template>
  <div class="responsive-fixed-nav">
    <v-container>
      <v-row>
        <v-col cols="6" class="image">
          <NuxtLink to="/"><img src="/images/Logo.png" /></NuxtLink
        ></v-col>
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

const logoImage = computed(() =>
  isDark.value ? "/images/logo11.png" : "/images/logo22.png"
);
</script>

<style lang="scss" scoped>
.responsive-fixed-nav {
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
</style>
