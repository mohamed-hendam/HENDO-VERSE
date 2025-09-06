<template>
  <div class="main-category">
    <v-container>
      <h1 class="h1-category">.</h1>
      <p class="p-category">.</p>
      <v-card class="card">
        <nuxt-link
          v-for="genre in usegenresStore.moviesGenres"
          :key="genre.id"
          :to="`/genres/movies/${genre.id}`"
          class="item"
        >
          <v-card-item>
            <v-card-title class="title">
              <span>{{ genre.name }}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
              >
                <path
                  d="M5.30005 12L20.3 12M20.3 12L13.55 5.25M20.3 12L13.55 18.75"
                  stroke="rgb(var(--v-theme-main1))"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </v-card-title>
          </v-card-item>
        </nuxt-link>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
const usegenresStore = genresStore();
await usegenresStore.getMoviesGenres();

const { $gsap } = useNuxtApp();
onMounted(() => {
  const items = document.querySelectorAll(".main-category .item");

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: ".main-category",
      start: "top 90%",
      toggleActions: "restart none restart none",
    },
    repeat: -1,
    yoyo: true,
  });

  tl.to(items, {
    // x: 20,
    y: 9,
    duration: 1,
    ease: "power1.inOut",
    stagger: 0.2,
  });
  const fadeUp = (selector, trigger = selector, start = "top 50%") => {
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
  fadeUp(".main-category");

  $gsap.to(".h1-category", {
    scrollTrigger: {
      trigger: ".h1-category",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: "Explore our wide variety of categories",
    duration: 2,
    ease: "linear",
  });
  $gsap.to(".p-category", {
    scrollTrigger: {
      trigger: ".p-category",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: "With Hendo Verse, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.",
    duration: 2,
    ease: "linear",
  });
});
</script>

<style lang="scss">
.main-category {
  padding-top: 50px;
  background-color: rgb(var(--v-theme-bg8));
  h1 {
    color: rgb(var(--v-theme-main1));
  }
  p {
    color: rgb(var(--v-theme-main60));
  }
  .card {
    padding: 20px;
    background-color: rgb(var(--v-theme-bg8));
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    .item {
      flex-grow: 1;
      background-color: rgb(var(--v-theme-bg10));
      border-radius: 10px;
      border: 1px solid rgb(var(--v-theme-bg15));
      padding: 10px;
      cursor: pointer;
      text-decoration: none;
      // &:hover {
      //   transition: 1s all ease-in-out;
      //   scale: 1.05;
      // }

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        span {
          color: rgb(var(--v-theme-main1));
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .main-category {
    padding-top: 20px;
    h1 {
      padding: 5px 10px;
      font-size: 25px;
      font-weight: 400;
    }
    p {
      padding: 5px 10px;
    }
    .card {
      padding: 10px 5px;
      gap: 5px;
      .item {
        padding: 5px;

        .title {
          padding: 5px;
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
