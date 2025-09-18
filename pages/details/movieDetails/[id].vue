<template>
  <div class="main-movie-details-page">
    <v-container>
      <div
        class="main-movie-details-page-upper-banner"
        :style="{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detailData.backdrop_path})`,
        }"
      >
        <div class="content">
          <h1>{{ detailData.title }}</h1>
          <p>{{ detailData.overview }}</p>
          <div class="buttons">
            <v-btn class="play-now" @click="dialog = !dialog">
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

            <v-btn
              v-if="!isSaved(detailData.id)"
              @click="add(detailData, 'movie')"
              class="btn-icon"
            >
              <i class="fa-regular fa-calendar-plus"></i> Add to Watchlist
            </v-btn>
            <v-btn v-else @click="remove(detailData.id)" class="btn-icon">
              <i class="fa-regular fa-calendar-xmark"></i> Remove from Watchlist
            </v-btn>
          </div>
        </div>
      </div>

      <v-dialog v-model="dialog" max-width="380">
        <v-card>
          <v-btn @click="dialog = !dialog" style="background-color: black"
            >Close
          </v-btn>
          <img src="/images/dialogSoon.jpg" />
        </v-card>
      </v-dialog>
      <v-row class="main-content">
        <v-col cols="12" md="8" class="colom1-main-movie-details">
          <div class="description">
            <h1>Description</h1>
            <p>{{ detailData.overview }}</p>
          </div>
          <div class="cast">
            <div class="main-moving">
              <h1>Cast</h1>
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
                v-for="per in detailCredits.cast"
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
          <div class="reviews">
            <div class="no-data" v-if="!reviews.results.length">
              <h1>There Is No Reviews obout This Movie</h1>
            </div>
            <div v-else>
              <div class="main-moving">
                <h1>Reviews</h1>
                <div class="moving-btns">
                  <v-btn @click="swiper2.prev()">
                    <i class="fa-solid fa-arrow-left"></i>
                  </v-btn>
                  <v-btn @click="swiper2.next()">
                    <i class="fa-solid fa-arrow-right"></i>
                  </v-btn>
                </div>
              </div>
              <swiper-container
                ref="containerRef2"
                slides-per-view="auto"
                class="swiper-container"
                space-between="10"
              >
                <swiper-slide
                  v-for="per in reviews.results"
                  :key="per.id"
                  class="swiper-slide"
                >
                  <div class="title">
                    <h1 class="name">
                      <img
                        class="avatar"
                        :src="`https://image.tmdb.org/t/p/w185${per.author_details.avatar_path}`"
                        v-if="per.author_details.avatar_path"
                      />
                      <img
                        class="no-avatar"
                        src="/public/images/rate.png"
                        v-else
                      />
                      <div class="user-name">
                        <h1>{{ per.author_details.username }}</h1>
                        <p>Created at : {{ per.created_at }}</p>
                      </div>
                    </h1>
                    <div class="rate">
                      <v-rating
                        v-model="per.author_details.rating"
                        half-increments
                        length="10"
                        size="14"
                        readonly
                      ></v-rating>
                      <span> {{ per.author_details.rating }}</span>
                    </div>
                  </div>
                  <p class="content">
                    {{
                      per.content.split(" ").length <= 61
                        ? per.content
                        : per.content.split(" ").slice(0, 60).join(" ")
                    }}
                  </p>
                </swiper-slide>
              </swiper-container>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="colom2-main-movie-details">
          <div class="info">
            <div class="comp">
              <h1><i class="fa-regular fa-calendar"></i> Released Year</h1>
              <p>{{ detailData.release_date }}</p>
            </div>
            <v-divider></v-divider>
            <div class="comp">
              <h1><i class="fa-regular fa-clock"></i> Runtime</h1>
              <p>{{ detailData.runtime }} Minutes</p>
            </div>
            <v-divider></v-divider>

            <div class="comp-group">
              <h1><i class="fa-solid fa-layer-group"></i> Gernes</h1>
              <div class="gen">
                <p v-for="gen in detailData.genres" :key="gen.id">
                  {{ gen.name }}
                </p>
              </div>
            </div>
            <v-divider></v-divider>

            <div class="comp-group">
              <h1><i class="fa-solid fa-language"></i> Available Languages</h1>
              <div class="gen">
                <p
                  v-for="gen in languages.translations.slice(0, 5)"
                  :key="gen.id"
                >
                  {{ gen.english_name }}
                </p>
              </div>
            </div>
            <v-divider></v-divider>

            <div class="rating">
              <h1><i class="fa-regular fa-star"></i> Ratings</h1>

              <p>
                <v-rating
                  v-model="detailData.vote_average"
                  half-increments
                  length="10"
                  size="15"
                  class="rate"
                  readonly
                ></v-rating>
                {{ detailData.vote_average }}
              </p>
            </div>
            <v-divider></v-divider>

            <div class="comp">
              <h1><i class="fa-solid fa-bolt"></i>Popularity</h1>
              <p>
                <i class="fa-solid fa-heart-circle-bolt"></i>
                {{ detailData.popularity }}
              </p>
            </div>
            <v-divider></v-divider>

            <div class="comp">
              <h1><i class="fa-regular fa-flag"></i> Production Countries</h1>
              <p v-for="i in detailData.production_countries" :key="i.name">
                {{ i.name }}
              </p>
            </div>

            <v-divider></v-divider>

            <div class="comp-group">
              <h1><i class="fa-solid fa-film"></i> Production Companies</h1>
              <div class="gen">
                <p
                  v-for="company in detailData.production_companies"
                  :key="company.id"
                >
                  {{ company.name }} : {{ company.origin_country }}
                </p>
              </div>
            </div>
            <v-divider></v-divider>

            <div class="original-link">
              <h1><i class="fa-solid fa-sitemap"></i> Original movie Site</h1>
              <a :href="detailData.homepage" target="_blank">
                Get More Information
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="main-vedios-movie-details">
            <div class="no-data" v-if="!vedios.results.length">
              <h1>There Is No Vedios obout This Movie</h1>
            </div>
            <div class="main-moving" v-else>
              <h1>Vedios</h1>
              <div class="moving-btns">
                <v-btn @click="swiper3.prev()">
                  <i class="fa-solid fa-arrow-left"></i>
                </v-btn>
                <v-btn @click="swiper3.next()">
                  <i class="fa-solid fa-arrow-right"></i>
                </v-btn>
              </div>
            </div>
            <swiper-container
              ref="containerRef3"
              slides-per-view="auto"
              class="swiper-container"
              space-between="10"
            >
              <swiper-slide
                v-for="ved in vedios.results"
                :key="ved.id"
                class="swiper-slide"
              >
                <div class="vedio">
                  <iframe
                    class="frame"
                    :src="`https://www.youtube.com/embed/${ved.key}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </v-col>
      </v-row>
      <LazyMoviesandshowsMoveisSimilar :similar="similar" />
      <LazyHomeFreeTrial />
    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "pages-layout",
});

useHead({
  title: "Movie Details",
});

import { useWatchlist } from "@/composables/useLocalStorage";

const { watchlist, add, remove, isSaved } = useWatchlist();

const containerRef = ref(null);
const containerRef2 = ref(null);
const containerRef3 = ref(null);
const swiper = useSwiper(containerRef);
const swiper2 = useSwiper(containerRef2);
const swiper3 = useSwiper(containerRef3);

const dialog = ref(false);
const route = useRoute();
const movieId = route.params.id;
const config = useRuntimeConfig();

const detailData = ref({});
const detailCredits = ref({});
const vedios = ref({});
const languages = ref({});
const reviews = ref({});
const similar = ref([]);

const headers = {
  Authorization: `Bearer ${config.public.tmdbToken}`,
};

const [details, credits, videos, langs, revs, similars] = await Promise.all([
  useFetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
    headers,
  }),
  useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    { headers }
  ),
  useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    { headers }
  ),
  useFetch(`https://api.themoviedb.org/3/movie/${movieId}/translations`, {
    headers,
  }),
  useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    { headers }
  ),
  useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    { headers }
  ),
]);

detailData.value = details.data.value || {};
detailCredits.value = credits.data.value || {};
vedios.value = videos.data.value || {};
languages.value = langs.data.value || {};
reviews.value = revs.data.value || [];
similar.value = similars.data.value || [];

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
  fadeUp(".main-movie-details-page-upper-banner");

  const fadeDown = (selector, trigger = selector, start = "top 100%") => {
    $gsap.set(selector, { opacity: 0, y: 100 });
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
  fadeDown(".main-vedios-movie-details");
  const fadeleft = (selector, trigger = selector, start = "top 50%") => {
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
  fadeleft(".colom1-main-movie-details");

  const faderight = (selector, trigger = selector, start = "top 50%") => {
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
  faderight(".colom2-main-movie-details");
});
</script>

<style lang="scss" scoped>
.main-movie-details-page {
  background-color: rgb(var(--v-theme-bg8));

  .main-movie-details-page-upper-banner {
    width: 100%;
    height: 90vh;
    border: 2px solid rgb(var(--v-theme-bg15)) !important;
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
      z-index: 100;
      position: absolute;
      bottom: 1%;
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
          border-radius: 10px;
          border: 1px solid rgb(var(--v-theme-bg12));
          height: 50px;
          i {
            font-size: 20px;
            margin-right: 4px;
          }
        }
      }
    }
  }
  .main-content {
    margin-top: 50px;
    .colom1-main-movie-details {
      .description {
        background-color: rgb(var(--v-theme-bg10));
        border: 3px solid rgb(var(--v-theme-bg15));
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 30px;
        h1 {
          color: rgb(var(--v-theme-main60));
          font-size: 25px;
          padding-bottom: 10px;
          font-weight: 400;
        }
        p {
          color: rgb(var(--v-theme-main1));
          font-weight: 500;
          letter-spacing: 2px;
        }
      }
      .cast {
        background-color: rgb(var(--v-theme-bg10));
        border: 3px solid rgb(var(--v-theme-bg15));
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 30px;
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
            width: calc((100% / 6) - 10px);
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
                  height: 97%;
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
      .reviews {
        background-color: rgb(var(--v-theme-bg10));
        border: 3px solid rgb(var(--v-theme-bg15));
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 30px;
        .no-data {
          h1 {
            color: rgb(var(--v-theme-main60));
            font-size: 25px;
            padding-bottom: 10px;
            font-weight: 400;
          }
        }
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
            width: calc((100% / 1) - 50px);
            // max-height: 100%;
            padding: 20px;
            background-color: rgb(var(--v-theme-bg6));
            border-radius: 15px;
            border: 1px solid rgb(var(--v-theme-bg15));
            .title {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .name {
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 10px;

                .user-name {
                  h1 {
                    color: rgb(var(--v-theme-main1));
                    font-size: 18px;
                    font-weight: 500;
                    padding: 0;
                  }
                  p {
                    color: rgb(var(--v-theme-main60));
                    font-size: 14px;
                    font-weight: 500;
                  }
                }
                .avatar {
                  width: 80px;
                  height: 80px;
                  border-radius: 50%;
                }
                .no-avatar {
                  width: 80px;
                  height: 80px;
                }
              }
              .rate {
                padding: 4px 8px 8px;
                color: rgb(var(--v-theme-text));
                background-color: rgb(var(--v-theme-bg8));
                border-radius: 30px;
                border: 1px solid rgb(var(--v-theme-bg15));
                font-size: 14px;

                span {
                  color: rgb(var(--v-theme-main60));
                  margin-left: 5px;
                }
              }
            }
            .content {
              color: rgb(var(--v-theme-main60));
              font-weight: 500;
              letter-spacing: 2px;
              font-size: 16px;
              line-height: 150%;
              padding: 20px 0 10px 0;
            }
          }
        }
      }
    }
    .colom2-main-movie-details {
      .info {
        background-color: rgb(var(--v-theme-bg10));
        border: 3px solid rgb(var(--v-theme-bg15));
        border-radius: 10px;
        padding: 30px;
        .comp {
          padding: 10px 0;
          h1 {
            color: rgb(var(--v-theme-main60));
            font-size: 25px;
            padding-bottom: 10px;
            font-weight: 400;
          }
          p {
            color: rgb(var(--v-theme-main1));
            font-weight: 500;
            letter-spacing: 2px;
          }
        }
        .comp-group {
          padding: 10px 0;

          h1 {
            color: rgb(var(--v-theme-main60));
            font-size: 25px;
            padding-bottom: 10px;
            font-weight: 400;
          }
          .gen {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            p {
              background-color: rgb(var(--v-theme-bg8));
              padding: 6px 12px;
              border: 1px solid rgb(var(--v-theme-bg15));
              border-radius: 6px;
              color: rgb(var(--v-theme-main1));
            }
          }
        }

        .rating {
          padding: 10px 0;

          h1 {
            color: rgb(var(--v-theme-main60));
            font-size: 25px;
            padding-bottom: 10px;
            font-weight: 400;
          }
          p {
            color: rgb(var(--v-theme-main1));
            font-weight: 500;
            letter-spacing: 2px;
            .rate {
              color: rgb(var(--v-theme-text));
            }
          }
        }
        .original-link {
          padding: 10px 0;
          h1 {
            color: rgb(var(--v-theme-main60));
            font-size: 25px;
            padding-bottom: 10px;
            font-weight: 400;
            margin-bottom: 10px;
          }
          a {
            background-color: rgb(var(--v-theme-text));
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            text-decoration: none;
          }
        }
      }
    }
  }
  .main-vedios-movie-details {
    background-color: rgb(var(--v-theme-bg10));
    border: 3px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    padding: 20px;
    .no-data {
      h1 {
        color: rgb(var(--v-theme-main60));
        font-size: 25px;
        padding-bottom: 10px;
        font-weight: 400;
      }
    }
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
        .vedio {
          margin: 5px;
          background-color: rgb(var(--v-theme-bg6));
          border: 1px solid rgb(var(--v-theme-bg15));
          border-radius: 10px;
          padding: 10px;
          margin-bottom: 30px;
          .frame {
            width: 100%;
            height: 200px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .main-movie-details-page {
    .main-movie-details-page-upper-banner {
      height: 50vh;
      position: relative;
      .content {
        z-index: 10000;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 5px;
        h1 {
          font-size: 25px;
          font-weight: 500;
        }
        p {
          display: none;
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
            height: 40px;
            border-radius: 10px;
            i {
              font-size: 16px;
              margin-right: 4px;
            }
          }
        }
      }
    }

    .main-content {
      margin-top: 10px;
      .colom1-main-movie-details {
        .description {
          border: 1px solid rgb(var(--v-theme-bg15));

          padding: 10px;
          margin-bottom: 10px;
          h1 {
            font-size: 20px;
            padding-bottom: 10px;
            font-weight: 400;
          }
          p {
            font-weight: 400;
            letter-spacing: 1px;
            font-size: 14px;
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
                  padding: 8px;
                  font-size: 16px;
                }
              }
            }
          }
        }
        .reviews {
          border: 1px solid rgb(var(--v-theme-bg15));
          border-radius: 10px;
          padding: 10px;
          margin-bottom: 10px;
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
          }

          .swiper-container {
            .swiper-slide {
              width: calc((100% / 1) - 30px);
              padding: 10px;
              border-radius: 10px;
              .title {
                flex-wrap: wrap;
                .name {
                  flex-wrap: wrap;
                  gap: 10px;

                  .user-name {
                    h1 {
                      color: rgb(var(--v-theme-main1));
                      font-size: 18px;
                      font-weight: 500;
                      padding: 0;
                    }
                    p {
                      color: rgb(var(--v-theme-main60));
                      font-size: 14px;
                      font-weight: 500;
                    }
                  }
                  .avatar {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                  }
                  .no-avatar {
                    width: 70px;
                    height: 70px;
                  }
                }
                .rate {
                  padding: 5px;
                  background-color: rgb(var(--v-theme-bg6));
                  border-radius: 0;
                  border: 0;
                  font-size: 14px;

                  span {
                    color: rgb(var(--v-theme-main60));
                    margin-left: 5px;
                  }
                }
              }
              .content {
                color: rgb(var(--v-theme-main60));
                font-weight: 500;
                letter-spacing: 1px;
                font-size: 16px;
                line-height: 120%;
                padding: 10px 0 5px 0;
              }
            }
          }
        }
      }
      .colom2-main-movie-details {
        .info {
          border: 1px solid rgb(var(--v-theme-bg15));
          padding: 10px;
          .comp {
            padding: 10px 0;
            h1 {
              font-size: 20px;
            }
            p {
              letter-spacing: 2px;
            }
          }
          .comp-group {
            padding: 10px 0;

            h1 {
              font-size: 20px;
              padding-bottom: 10px;
            }
            .gen {
              gap: 5px;
              p {
                background-color: rgb(var(--v-theme-bg8));
                padding: 4px 8px;
              }
            }
          }

          .rating {
            padding: 10px 0;

            h1 {
              font-size: 20px;
            }
            p {
              letter-spacing: 1px;
            }
          }
          .original-link {
            padding: 10px 0;
            h1 {
              font-size: 20px;
              padding-bottom: 10px;
              margin-bottom: 10px;
            }
            a {
              padding: 10px 20px;
              border-radius: 10px;
            }
          }
        }
      }
    }
    .main-vedios-movie-details {
      border: 1px solid rgb(var(--v-theme-bg15));
      padding: 10px;

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
          width: calc((100% / 1) - 10px);
          .vedio {
            margin: 5px;
            border-radius: 10px;
            padding: 10px;
            margin-bottom: 10px;
            .frame {
              height: 180px;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
