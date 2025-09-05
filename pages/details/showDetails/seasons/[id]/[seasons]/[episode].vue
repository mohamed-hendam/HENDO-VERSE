<template>
  <div class="main-episode-details">
    <v-container>
      <v-row class="episode-details-main-header">
        <v-col cols="12" md="3"
          ><div class="image">
            <img
              v-if="episodeDetails.still_path"
              :src="`https://image.tmdb.org/t/p/w300${episodeDetails.still_path}`"
            />
            <img src="/public/images/rate.png" v-else /></div
        ></v-col>
        <v-col cols="12" md="9">
          <div class="title">
            <h1>{{ episodeDetails.name }}</h1>
            <p class="data">{{ episodeDetails.air_date }}</p>

            <div class="rating">
              <v-rating
                v-model="episodeDetails.vote_average"
                half-increments
                length="10"
                density="compact"
                size="25"
                class="rate"
                readonly
              ></v-rating>
              <p>{{ episodeDetails.vote_average }}</p>
            </div>
            <div class="overview">
              <p v-if="episodeDetails.overview">
                {{ episodeDetails.overview }}
              </p>
              <p v-else>There is No Description Data For This Episode</p>
            </div>
            <div class="runtime">
              <p v-if="episodeDetails.runtime">
                <i class="fa-regular fa-clock"></i>
                Run Time : {{ episodeDetails.runtime }} Minute
              </p>
              <p v-else></p>
            </div>
            <div class="runtime">
              <p v-if="episodeDetails.episode_number">
                <i class="fa-solid fa-calendar"></i> Episode :
                {{ episodeDetails.episode_number }}
              </p>
              <p v-else></p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div
            class="cast cast-episode-details1"
            v-if="episodeDetails.crew.length"
          >
            <div class="main-moving">
              <h1>Crew</h1>
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
              ref="containerRef"
              slides-per-view="auto"
              class="swiper-container"
              space-between="10"
            >
              <swiper-slide
                v-for="per in episodeDetails.crew"
                :key="per.id"
                class="swiper-slide"
              >
                <nuxt-link :to="`/person/${per.id}`" class="item">
                  <div class="image">
                    <img
                      v-if="per.profile_path"
                      :src="`https://image.tmdb.org/t/p/w185${per.profile_path}`"
                    />
                    <img src="/public/images/rate.png" v-else />
                  </div>
                  <div class="title">
                    <p>
                      {{ per.name.split(" ").slice(0, 1).join(" ") + "..." }}
                    </p>
                  </div>
                </nuxt-link>
              </swiper-slide>
            </swiper-container>
          </div>
          <div class="no-data" v-else>
            <h1>There is No Available Data About Crew</h1>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div
            class="cast cast-episode-details2"
            v-if="episodeDetails.guest_stars.length"
          >
            <div class="main-moving">
              <h1>Guest Stars</h1>
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
              ref="containerRef"
              slides-per-view="auto"
              class="swiper-container"
              space-between="10"
            >
              <swiper-slide
                v-for="per in episodeDetails.guest_stars"
                :key="per.id"
                class="swiper-slide"
              >
                <nuxt-link :to="`/person/${per.id}`" class="item">
                  <div class="image">
                    <img
                      v-if="per.profile_path"
                      :src="`https://image.tmdb.org/t/p/w185${per.profile_path}`"
                    />
                    <img src="/public/images/rate.png" v-else />
                  </div>
                  <div class="title">
                    <p>
                      {{ per.name.split(" ").slice(0, 1).join(" ") + "..." }}
                    </p>
                  </div>
                </nuxt-link>
              </swiper-slide>
            </swiper-container>
          </div>
          <div class="no-data" v-else>
            <h1>There is No Available Data About Guest Stars</h1>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layout",
});
useHead({
  title: "Episodes Details",
});

const containerRef = ref(null);
const swiper = useSwiper(containerRef);

const route = useRoute();
const seasonId = route.params.id;
const seasonNum = route.params.season;
const episodeNum = route.params.episode;
const config = useRuntimeConfig();

const episodeDetails = ref({});
const fetchEpisodeDetails = async (id, Snum, Enum, informations) => {
  const { data } = await useFetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${Snum}/episode/${Enum}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  informations.value = data.value || {};
};
await fetchEpisodeDetails(seasonId, seasonNum, episodeNum, episodeDetails);

const { $gsap } = useNuxtApp();
onMounted(() => {
  const fadeUp = (selector, trigger = selector, start = "top 100%") => {
    $gsap.set(selector, { opacity: 0, y: -100 });
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
  fadeUp(".episode-details-main-header");

  const fadeleft = (selector, trigger = selector, start = "top 100%") => {
    $gsap.set(selector, { opacity: 0, x: -100 });
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
  fadeleft(".cast-episode-details1");

  const faderight = (selector, trigger = selector, start = "top 100%") => {
    $gsap.set(selector, { opacity: 0, x: 100 });
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
  faderight(".cast-episode-details2");
});
</script>

<style lang="scss" scoped>
.main-episode-details {
  background-color: rgb(var(--v-theme-bg8));

  .episode-details-main-header {
    background: linear-gradient(
        222deg,
        rgba(var(--v-theme-text)) -208.03%,
        rgba(var(--v-theme-bg6)) 41.32%
      ),
      rgb(var(--v-theme-bg6));
    border: 3px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    .image {
      width: 100%;
      height: 100%;

      img {
        box-shadow: 0 0 15px 20px rgb(var(--v-theme-bg6));
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
    .title {
      h1 {
        font-size: 45px;
        font-weight: 400;
        color: rgb(var(--v-theme-main1));
      }
      .rating {
        padding: 5px 0;
        display: flex;
        justify-content: start;
        gap: 10px;
        align-items: center;
        color: rgb(var(--v-theme-text));
        p {
          font-size: 20px;
          color: rgb(var(--v-theme-main60));
        }
      }
      .data {
        color: rgb(var(--v-theme-main60));
        font-size: 18px;
      }
      .overview {
        p {
          padding: 10px 0;
          font-size: 18px;
          font-weight: 300;
          line-height: 140%;
          letter-spacing: 2px;
          color: rgb(var(--v-theme-main75));
        }
      }
      .runtime {
        p {
          padding: 5px 0;
          font-size: 18px;
          font-weight: 300;
          color: rgb(var(--v-theme-main75));
        }
      }
    }
  }

  .cast {
    background-color: rgb(var(--v-theme-bg10));
    border: 3px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    padding: 20px;
    .main-moving {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 20px 10px;
      h1 {
        color: rgb(var(--v-theme-main60));
        font-size: 25px;
        padding-bottom: 10px;
        font-weight: 400;
      }
      .moving-btns {
        padding: 5px;
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
          padding: 0px;
          font-size: 16px;
        }
      }
    }

    .swiper-container {
      .swiper-slide {
        width: calc((100% / 3) - 10px);
        height: fit-content;
        background-color: rgb(var(--v-theme-bg8));
        border-radius: 10px;
        border: 1px solid rgb(var(--v-theme-bg15));
        .item {
          cursor: pointer;
          width: 100%;
          text-decoration: none;
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
            padding: 10px;
            font-size: 16px;
            color: rgb(var(--v-theme-main1));
          }
        }
      }
    }
  }
  .no-data {
    background-color: rgb(var(--v-theme-bg10));
    border: 3px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    h1 {
      font-size: 25px;
      padding: 20px;
      color: rgb(var(--v-theme-main1));
    }
  }
}

@media (max-width: 767px) {
  .main-episode-details {
    .episode-details-main-header {
      border: 1px solid rgb(var(--v-theme-bg15));
      padding: 5px;
      margin-bottom: 10px;
      text-align: center;

      .image {
        text-align: center;

        img {
          border-radius: 10px;
          max-width: 100%;
          height: 200px;
        }
      }
      .title {
        h1 {
          font-size: 30px;
        }
        .rating {
          padding: 5px 0;
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
          color: rgb(var(--v-theme-text));
          p {
            font-size: 16px;
            color: rgb(var(--v-theme-main60));
          }
        }
        .data {
          color: rgb(var(--v-theme-main60));
          font-size: 16px;
        }
        .overview {
          p {
            padding: 5px 0;
            font-size: 14px;
            font-weight: 300;
            line-height: 110%;
            letter-spacing: 1px;
          }
        }
      }
    }

    .cast {
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid rgb(var(--v-theme-bg15));

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
          width: calc((100% / 3) - 10px);
          .item {
            .image {
              width: 100%;
              height: fit-content;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              position: relative;
              &::after {
                display: none;
              }
              &:hover {
                &::after {
                  display: none;
                }
              }
            }
            .title {
              padding: 8px;
              font-size: 16px;
            }
          }
        }
      }
    }

    .no-data {
      border: 1px solid rgb(var(--v-theme-bg15));
      h1 {
        font-size: 22px;
        padding: 10px;
      }
    }
  }
}
</style>
