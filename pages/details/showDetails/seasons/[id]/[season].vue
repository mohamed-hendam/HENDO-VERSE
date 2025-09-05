<template>
  <div class="season-details">
    <v-container>
      <v-row class="season-details-main-header">
        <v-col cols="12" md="3"
          ><div class="image">
            <img
              v-if="seasonDetails.poster_path"
              :src="`https://image.tmdb.org/t/p/w500${seasonDetails.poster_path}`"
            />
            <img src="/public/images/rate.png" v-else /></div
        ></v-col>
        <v-col cols="12" md="9">
          <div class="title">
            <h1>{{ seasonDetails.name }}</h1>
            <p class="data">{{ seasonDetails.air_date }}</p>

            <div class="rating">
              <v-rating
                v-model="seasonDetails.vote_average"
                half-increments
                length="10"
                density="compact"
                size="25"
                class="rate"
                readonly
              ></v-rating>
              <p>{{ seasonDetails.vote_average }}</p>
            </div>
            <div class="overview">
              <p v-if="seasonDetails.overview">{{ seasonDetails.overview }}</p>
              <p v-else>There is No Description Data For This Season</p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="main-episodes">
            <h1>Episodes</h1>

            <div
              v-for="ved in seasonDetails.episodes"
              :key="ved.id"
              class="episode"
            >
              <nuxt-link
                :to="`${ved.season_number}/${ved.episode_number}`"
                class="link"
              >
                <div class="image">
                  <img
                    v-if="ved.still_path"
                    :src="`https://image.tmdb.org/t/p/w500${ved.still_path}`"
                  />
                  <img src="/public/images/rate.png" v-else />
                </div>
                <div class="title">
                  <h1>{{ ved.name }}</h1>

                  <div class="rating">
                    <v-rating
                      v-model="ved.vote_average"
                      half-increments
                      length="10"
                      size="18"
                      density="compact"
                      class="rate"
                      readonly
                    ></v-rating>
                    <p>{{ ved.vote_average }}</p>
                  </div>
                  <p>
                    <span
                      ><i class="fa-regular fa-square-caret-right"></i> Episode
                    </span>
                    {{ ved.episode_number }}
                  </p>
                  <p>
                    <span><i class="fa-solid fa-film"></i> Air Date</span>
                    {{ ved.air_date }}
                  </p>
                  <p>
                    <span><i class="fa-solid fa-clock"></i> Duration </span>
                    {{ ved.runtime }} Minute
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layoutttt",
});
useHead({
  title: "Seasons Details",
});
const route = useRoute();
const seasonId = route.params.id;
const seasonNum = route.params.season;
const config = useRuntimeConfig();
/////////////////
const seasonDetails = ref({});
const fetchSeasonDetails = async (id, num, informations) => {
  const { data } = await useFetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${num}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  informations.value = data.value || {};
};
await fetchSeasonDetails(seasonId, seasonNum, seasonDetails);

///////

const { $gsap } = useNuxtApp();

onMounted(() => {
  document.querySelectorAll(".episode").forEach((el, i) => {
    $gsap.set(el, { opacity: 0, x: -100 });
    $gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "linear",
      delay: i * 0.1,
    });
  });

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
  fadeUp(".season-details-main-header");
});
</script>

<style lang="scss" scoped>
.season-details {
  background-color: rgb(var(--v-theme-bg8));

  .season-details-main-header {
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
      img {
        box-shadow: 0 0 15px 20px rgb(var(--v-theme-bg6));
        border-radius: 10px;
        max-width: 100%;
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
    }
  }
  .main-episodes {
    background-color: rgb(var(--v-theme-bg10));
    border: 3px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;

    h1 {
      color: rgb(var(--v-theme-main1));
      font-size: 30px;
      padding: 20px 10px;
      font-weight: 400;
    }

    .episode {
      background: linear-gradient(
          222deg,
          rgba(var(--v-theme-text)) -208.03%,
          rgba(var(--v-theme-bg6)) 41.32%
        ),
        rgb(var(--v-theme-bg6));

      border-radius: 10px;
      border: 1px solid rgb(var(--v-theme-bg15));
      margin-bottom: 10px;
      .link {
        cursor: pointer;
        width: 100%;
        text-decoration: none;
        overflow: hidden;
        display: flex;
        justify-content: start;
        gap: 10px;

        .image {
          width: 100%;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
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
            border-bottom-left-radius: 10px;

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
            border-bottom-left-radius: 10px;
          }
        }

        .title {
          width: 100%;
          padding: 20px;
          h1 {
            padding: 0;
            font-size: 25px;
            color: rgb(var(--v-theme-main1));
            font-weight: 400;
          }
          .rating {
            padding-bottom: 5px;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;
            color: rgb(var(--v-theme-text));
            p {
              font-size: 18px;
              color: rgb(var(--v-theme-main60));
              transform: translateY(5px);
            }
          }
          p {
            padding: 5px 0;
            font-size: 16px;
            color: rgb(var(--v-theme-main60));
            span {
              font-size: 18px;
              margin-right: 5px;
              color: rgb(var(--v-theme-main75));
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .season-details {
    .season-details-main-header {
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
    .main-episodes {
      border: 1px solid rgb(var(--v-theme-bg15));
      padding: 10px;
      margin-bottom: 10px;

      h1 {
        color: rgb(var(--v-theme-main1));
        font-size: 30px;
        padding: 20px 10px;
        font-weight: 400;
      }

      .episode {
        background-color: rgb(var(--v-theme-bg8));
        border-radius: 10px;
        border: 1px solid rgb(var(--v-theme-bg15));
        margin-bottom: 10px;
        .link {
          cursor: pointer;
          width: 100%;
          text-decoration: none;
          overflow: hidden;
          display: flex;
          justify-content: start;
          flex-wrap: wrap;
          gap: 10px;

          .image {
            width: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0;
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
              border-bottom-left-radius: 0;
            }
          }

          .title {
            width: 100%;
            padding: 10px;
            h1 {
              font-size: 25px;
            }
            .rating {
              padding-bottom: 5px;
              display: flex;
              justify-content: start;
              gap: 10px;
              align-items: center;
              color: rgb(var(--v-theme-text));
              p {
                font-size: 18px;
                color: rgb(var(--v-theme-main60));
              }
            }
            p {
              padding: 5px 0;
              font-size: 16px;
              color: rgb(var(--v-theme-main60));
              span {
                font-size: 16px;
                margin-right: 5px;
                color: rgb(var(--v-theme-main75));
              }
            }
          }
        }
      }
    }
  }
}
</style>
