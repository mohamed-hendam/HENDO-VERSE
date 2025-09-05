<template>
  <div class="moveis-shows-movies-popular">
    <div class="main-moving">
      <h1>Popular</h1>
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
      ref="containerRef6"
      slides-per-view="auto"
      class="swiper-container"
      space-between="20"
    >
      <swiper-slide
        v-for="movie in popularMovies.results"
        :key="movie.id"
        class="swiper-slide"
      >
        <nuxt-link :to="`/details/movieDetails/${movie.id}`" class="item">
          <div class="image">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
          </div>
          <div class="title">
            <p>
              {{
                movie.title.split(" ").length <= 5
                  ? movie.title
                  : movie.title.split(" ").slice(0, 4).join(" ") + "..."
              }}
            </p>
            <div class="info">
              <div class="rating">
                <i class="fa-solid fa-star pa-1"></i>
                <span>{{ movie.vote_average }}</span>
              </div>
              <div class="top">
                <i class="fa-solid fa-eye"></i>
                <p>{{ Math.floor(movie.popularity) }}K</p>
              </div>
            </div>
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
const containerRef6 = ref(null);
const swiper = useSwiper(containerRef6);

defineProps({
  popularMovies: {
    type: Array,
    required: true,
  },
});

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

  fadeUp(".moveis-shows-movies-popular");
});
</script>

<style lang="scss" scoped>
.moveis-shows-movies-popular {
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
      //   height: 350px;
      height: fit-content;
      background-color: rgb(var(--v-theme-bg10));
      border-radius: 10px;
      border: 1px solid rgb(var(--v-theme-bg15));
      .item {
        cursor: pointer;
        width: 100%;
        text-decoration: none;
        color: rgb(var(--v-theme-main1));
        overflow: hidden;
        .image {
          width: 100%;
          height: fit-content;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          transition: 0.5s all ease-in-out;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: #0000008f;
            transition: 0.5s all ease-in-out;
          }
          &:hover {
            &::after {
              background-color: transparent;
            }
          }
          img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        }

        .title {
          width: 100%;
          padding: 0 10px 10px 10px;
          font-size: 18px;
          .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .rating {
              color: rgb(var(--v-theme-text));
            }
            .top {
              display: flex;
              margin-right: 20px;
              align-items: center;
              gap: 5px;
              background-color: rgb(var(--v-theme-bg6));
              border-radius: 15px;
              border: 2px solid rgb(var(--v-theme-bg12));
              padding: 5px 10px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .moveis-shows-movies-popular {
    margin-bottom: 40px;
    .swiper-container {
      .swiper-slide {
        width: calc((100% / 2) - 20px);
        //   height: 350px;
        height: fit-content;
      }
    }
  }
}

@media (max-width: 767px) {
  .moveis-shows-movies-popular {
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
        //   height: 350px;
        height: fit-content;
        .item {
          width: 100%;
          .image {
            width: 100%;
            height: fit-content;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            transition: 0.5s all ease-in-out;
            position: relative;
            &::after {
              display: none;
            }
            &:hover {
              &::after {
                display: none;
              }
            }
            img {
              width: 100%;
              height: 100%;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
            }
          }
          .title {
            width: 100%;
            padding: 0 5px 10px 5px;
            font-size: 14px;
            .info {
              font-size: 14px;

              display: block;

              .top {
                margin-right: 0;
                border-radius: 5px;
                padding: 5px;
                width: fit-content;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
