<template>
  <div class="moveis-shows-shows-genres">
    <div class="main-moving">
      <h1>Our Genres</h1>
      <div class="moving-btns">
        <v-btn @click="swiper.prev()">
          <i class="fa-solid fa-arrow-left"></i>
        </v-btn>
        <v-btn @click="swiper.next()">
          <i class="fa-solid fa-arrow-right"></i>
        </v-btn>
      </div>
    </div>

    <swiper-container
      ref="containerRef10"
      slides-per-view="auto"
      class="swiper-container"
      space-between="20"
    >
      <swiper-slide
        v-for="genre in usegenresStore.TvGenres"
        :key="genre.id"
        class="swiper-slide"
      >
        <nuxt-link :to="`/genres/shows/${genre.id}`" class="item">
          <div class="image">
            <img src="/images/genres1.png" />
          </div>
          <div class="title">
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
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
const usegenresStore = genresStore();
await usegenresStore.getTvGenres();
const containerRef10 = ref(null);
const swiper = useSwiper(containerRef10);
const { $gsap } = useNuxtApp();
onMounted(() => {
  const fadeUp = (selector, trigger = selector, start = "top 50%") => {
    $gsap.set(selector, { opacity: 0, x: 150 });
    $gsap.to(selector, {
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "linear",
    });
  };

  fadeUp(".moveis-shows-shows-genres");
});
</script>

<style lang="scss" scoped>
.moveis-shows-shows-genres {
  margin-top: 20px;
  margin-bottom: 50px;

  .main-moving {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 20px 10px;
    .moving-btns {
      padding: 10px;
      display: flex;
      gap: 20px;
      background-color: rgb(var(--v-theme-bg6));
      border-radius: 8px;
      border: 2px solid rgb(var(--v-theme-bg12));
      right: 0;
      width: fit-content;

      .v-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 20px;
      }
    }
  }

  .swiper-container {
    .swiper-slide {
      width: calc((100% / 4) - 20px);
      padding: 10px 0;
      height: fit-content;
      background-color: rgb(var(--v-theme-bg10));
      border-radius: 10px;
      border: 1px solid rgb(var(--v-theme-bg15));
      .item {
        cursor: pointer;
        width: 100%;
        text-decoration: none;
        color: rgb(var(--v-theme-main1));
        display: flex;
        flex-direction: column;
        gap: 50px;

        .image {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            max-width: 100%;
          }
        }
        .title {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 18px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .moveis-shows-shows-genres {
    margin-bottom: 40px;
    .swiper-container {
      .swiper-slide {
        width: calc((100% / 2) - 20px);
        height: fit-content;
      }
    }
  }
}

@media (max-width: 767px) {
  .moveis-shows-shows-genres {
    margin-top: 50px;

    margin-bottom: 20px;
    .main-moving {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px;

      h1 {
        font-size: 18px;
      }
      .moving-btns {
        padding: 5px;
        display: flex;
        gap: 10px;
        background-color: rgb(var(--v-theme-bg6));
        border-radius: 8px;
        border: 2px solid rgb(var(--v-theme-bg12));
        right: 0;
        width: fit-content;

        .v-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          font-size: 16px;
        }
      }
    }

    .swiper-container {
      .swiper-slide {
        width: calc((100% / 2) - 20px);
        height: fit-content;

        .item {
          width: 100%;
          gap: 10px;

          .image {
            img {
              max-width: 80%;
            }
          }
          .title {
            width: 100%;
            padding: 0 5px 10px 5px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
