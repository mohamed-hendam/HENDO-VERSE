<template>
  <v-container>
    <div class="moveis-shows-upper-banner">
      <swiper-container
        ref="containerRef"
        slides-per-view="1"
        class="swiper-container"
        pagination="true"
        style="
          --swiper-pagination-color: red;
          --swiper-pagination-bullet-inactive-color: gray;
          --swiper-pagination-bullet-inactive-opacity: 0.5;
          --swiper-pagination-bullet-size: 5px;
          --swiper-pagination-bullet-width: 14px;
          --swiper-pagination-bullet-border-radius: 3px;
          --swiper-pagination-bullet-horizontal-gap: 2px;
        "
        :init="false"
      >
        <swiper-slide
          v-for="item in popularMovies.results"
          :key="item.id"
          class="swiper-slide"
          :style="{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
          }"
        >
          <div class="content">
            <h1>{{ item.title }}</h1>
            <p>{{ item.overview }}</p>
            <div class="buttons">
              <nuxt-link :to="`/details/movieDetails/${item.id}`">
                <v-btn class="play-now">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 5.6527C5 4.22656 6.529 3.32251 7.7786 4.00979L19.3192 10.3571C20.6144 11.0695 20.6144 12.9306 19.3192 13.6429L7.7786 19.9902C6.529 20.6775 5 19.7735 5 18.3473V5.6527Z"
                      fill="white"
                    />
                  </svg>
                  Play Now
                </v-btn>
              </nuxt-link>

              <v-btn class="btn-icon">
                <i class="fa-solid fa-plus"></i>
              </v-btn>
              <v-btn class="btn-icon">
                <i class="fa-solid fa-volume-high"></i>
              </v-btn>
              <v-btn class="btn-icon">
                <i class="fa-regular fa-thumbs-up"></i>
              </v-btn>
            </div>
          </div>

          <div class="moving-btns">
            <v-btn @click="swiper.prev()">
              <i class="fa-solid fa-arrow-left"></i>
            </v-btn>
            <v-btn @click="swiper.next()">
              <i class="fa-solid fa-arrow-right"></i>
            </v-btn>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </v-container>
</template>

<script setup>
const containerRef = ref(null);
// const swiper = useSwiper(containerRef);

defineProps({
  popularMovies: {
    type: Array,
    required: true,
  },
});

const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
  pagination: {
    clickable: true,
  },
});
</script>

<style lang="scss">
.moveis-shows-upper-banner {
  background-color: rgb(var(--v-theme-bg8));
  .swiper-container {
    .swiper-slide {
      height: 90vh;
      //   border: 2px solid rgb(var(--v-theme-bg15)) !important;
      border-radius: 20px;
      background-size: cover;
      background-position: center;
      aspect-ratio: 1/1;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: linear-gradient(
          to top,
          rgb(15, 15, 15) 5%,
          rgba(15, 15, 15, 0.9) 20%,
          rgba(15, 15, 15, 0.8) 50%,
          rgba(15, 15, 15, 0.6) 70%,
          rgba(15, 15, 15, 0.4) 80%,
          rgba(15, 15, 15, 0.3) 100%
        );
      }
      .content {
        z-index: 10000;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        text-align: center;
        padding: 20px;
        h1 {
          color: white;
          font-size: 35px;
          font-weight: 700;
        }
        p {
          color: rgb(var(--v-theme-main60));
          font-size: 18px;
          font-weight: 500;
        }
        .buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          padding: 20px;
          .play-now {
            background-color: rgb(var(--v-theme-text));
            color: white;
            height: 50px;
            border-radius: 10px;
          }
          .btn-icon {
            background-color: rgb(var(--v-theme-bg6));
            border-radius: 8px;
            border: 2px solid rgb(var(--v-theme-bg12));
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 5px;
            font-size: 20px;
          }
        }
      }
      .moving-btns {
        z-index: 10000;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        padding: 20px;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .v-btn {
          background-color: rgb(var(--v-theme-bg6));
          border-radius: 8px;
          border: 2px solid rgb(var(--v-theme-bg12));
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          font-size: 20px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .moveis-shows-upper-banner {
    .swiper-container {
      .swiper-slide {
        height: 50vh;
        position: relative;
        .content {
          z-index: 10000;
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          padding: 5px;
          h1 {
            font-size: 25px;
            font-weight: 500;
          }
          p {
            color: rgb(var(--v-theme-main60));
            font-size: 14px;
            font-weight: 300;
          }
          .buttons {
            flex-wrap: wrap;
            gap: 5px;
            padding: 5px;
            .play-now {
              height: 40px;
              border-radius: 10px;
            }
            .btn-icon {
              border-radius: 8px;
              border: 1px solid rgb(var(--v-theme-bg12));
              padding: 0px;
              font-size: 14px;
            }
          }
        }
        .moving-btns {
          bottom: 10%;
          width: 90%;
          padding: 5px 20px;
          font-size: 14px;

          .v-btn {
            padding: 0px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
