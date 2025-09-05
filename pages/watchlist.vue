<template>
  <div class="watchlist-main-page">
    <v-container>
      <div class="main-header">
        <h1>Watchlist | Never Lose Track of Movies & Shows You Lov</h1>
        <p>
          Your Watchlist keeps all your favorite movies and shows in one place —
          add with a click and watch anytime.
        </p>
      </div>

      <v-row v-if="details.length">
        <v-col cols="12" lg="6" v-for="saved in details" :key="saved.id">
          <div class="watchlist-main-content">
            <div
              class="watchlist-main-item-father"
              v-if="saved.type === 'movie'"
            >
              <div class="delete">
                <button @click="removeItem(saved.id)" class="btn">
                  <i class="fa-regular fa-circle-xmark"></i>
                </button>
              </div>
              <nuxt-link
                :to="`/details/movieDetails/${saved.id}`"
                class="watchlist-main-item"
              >
                <div class="image">
                  <img
                    v-if="saved.poster"
                    :src="`https://image.tmdb.org/t/p/w342${saved.poster}`"
                  />
                  <img src="/public/images/rate.png" v-else />
                </div>
                <div class="title">
                  <h1>
                    {{ saved.title }}
                  </h1>
                  <div class="rating">
                    <v-rating
                      v-model="saved.vote_average"
                      half-increments
                      length="10"
                      density="compact"
                      size="14"
                      class="rate"
                      readonly
                    ></v-rating>
                    <p>{{ saved.vote_average }}</p>
                  </div>
                  <p class="info">
                    Type : <span>{{ saved.type }}</span>
                  </p>
                  <p class="info">
                    Added To Watchlist At : <span>{{ saved.savedAt }}</span>
                  </p>
                  <p class="info">
                    Gernes :
                    <span
                      v-for="gen in saved.genres"
                      :key="gen.id"
                      class="gernes"
                    >
                      {{ gen.name }}</span
                    >
                  </p>
                  <p class="overview">
                    {{
                      saved.overview.split(" ").length <= 16
                        ? saved.overview
                        : saved.overview.split(" ").splice(0, 15).join(" ") +
                          " ...."
                    }}
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="watchlist-main-item-father"
              v-if="saved.type === 'show'"
            >
              <div class="delete">
                <button @click="removeItem(saved.id)" class="btn">
                  <i class="fa-regular fa-circle-xmark"></i>
                </button>
              </div>
              <nuxt-link
                :to="`/details/showDetails/${saved.id}`"
                class="watchlist-main-item"
              >
                <div class="image">
                  <img
                    v-if="saved.poster"
                    :src="`https://image.tmdb.org/t/p/w342${saved.poster}`"
                  />
                  <img src="/public/images/rate.png" v-else />
                </div>
                <div class="title">
                  <h1>
                    {{ saved.name }}
                  </h1>
                  <div class="rating">
                    <v-rating
                      v-model="saved.vote_average"
                      half-increments
                      length="10"
                      density="compact"
                      size="14"
                      class="rate"
                      readonly
                    ></v-rating>
                    <p>{{ saved.vote_average }}</p>
                  </div>
                  <p class="info">
                    Type : <span>{{ saved.type }}</span>
                  </p>
                  <p class="info">
                    Added To Watchlist At : <span>{{ saved.savedAt }}</span>
                  </p>
                  <p class="info">
                    Gernes :
                    <span
                      v-for="gen in saved.genres"
                      :key="gen.id"
                      class="gernes"
                    >
                      {{ gen.name }}</span
                    >
                  </p>
                  <p class="overview">
                    {{
                      saved.overview.split(" ").length <= 16
                        ? saved.overview
                        : saved.overview.split(" ").splice(0, 15).join(" ") +
                          " ...."
                    }}
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="no-data">
          <h1>
            Your watchlist is empty… Start adding your favorite movies & shows
          </h1>
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
  title: "Watchlist",
});

import { useWatchlist } from "@/composables/useLocalStorage";
const { remove } = useWatchlist();

const details = ref([]);

function loadData() {
  const data = localStorage.getItem("watchlist");
  details.value = data ? JSON.parse(data) : [];
}

function removeItem(id) {
  remove(id);
  loadData();
}

const { $gsap } = useNuxtApp();
onMounted(() => {
  loadData();

  // const fadeUp = (el, trigger = el, start = "top 80%") => {
  //   $gsap.set(el, { opacity: 0, y: 150 });
  //   $gsap.to(el, {
  //     scrollTrigger: {
  //       trigger,
  //       start,
  //       toggleActions: "play none none none",
  //     },
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //     ease: "power2.out",
  //   });
  // };

  // document.querySelectorAll(".card-genres-movies-selected").forEach((card) => {
  //   fadeUp(card);
  // });

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
  fadeDown(".watchlist-main-page");
});
</script>

<style lang="scss" scoped>
.watchlist-main-page {
  background-color: rgb(var(--v-theme-bg8));

  .main-header {
    padding: 30px 0;
    text-align: center;
    h1 {
      color: rgb(var(--v-theme-main1));
      padding-bottom: 10px;
      font-weight: 400;
    }
    p {
      color: rgb(var(--v-theme-main60));
      letter-spacing: 1px;
      font-weight: 200;
    }
  }
  .watchlist-main-content {
    background: linear-gradient(
        222deg,
        rgba(var(--v-theme-text)) -208.03%,
        rgba(var(--v-theme-bg6)) 41.32%
      ),
      rgb(var(--v-theme-bg6));
    border: 2px solid rgb(var(--v-theme-bg15));
    border-radius: 10px;
    cursor: pointer;
    .watchlist-main-item-father {
      position: relative;
      .delete {
        position: absolute;
        top: 5px;
        right: 2px;
        z-index: 100;
        .btn {
          background-color: transparent;
          i {
            color: rgb(var(--v-theme-main75));
            font-size: 30px;
          }
        }
      }
      .watchlist-main-item {
        color: rgb(var(--v-theme-main1));
        text-decoration: none;
        display: flex;
        justify-content: start;
        align-items: start;
        padding: 30px;
        .image {
          width: 40%;
          height: 100%;
          padding: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            box-shadow: 0 0 20px 20px rgb(var(--v-theme-bg6));
            max-width: 100%;
            max-height: 100%;
            border-radius: 10px;
          }
        }

        .title {
          width: 60%;
          padding-left: 10px;
          h1 {
            font-size: 25px;
            color: rgb(var(--v-theme-main1));
            padding-bottom: 5px;
          }

          .info {
            padding-top: 5px;
            color: rgb(var(--v-theme-main75));
            span {
              color: rgb(var(--v-theme-main60));
              padding-right: 5px;
            }
          }
          .rating {
            padding-bottom: 5px;
            display: flex;
            justify-content: start;
            gap: 5px;
            align-items: center;
            color: rgb(var(--v-theme-text));
            p {
              transform: translateY(7px);
              color: rgb(var(--v-theme-main60));
            }
          }
          .overview {
            padding-top: 10px;
            color: rgb(var(--v-theme-main60));
          }
        }
      }
    }
  }
  .no-data {
    h1 {
      text-align: center;
      padding: 20px;
      font-size: 25px;
      font-weight: 400;
    }
  }
}

@media (max-width: 576px) {
  .watchlist-main-page {
    .main-header {
      padding: 5px 0 10px;
      h1 {
        font-size: 25px;
        padding-bottom: 5px;
        font-weight: 400;
      }
      p {
        letter-spacing: normal;
      }
    }
    .watchlist-main-content {
      border: 1px solid rgb(var(--v-theme-bg15));
      border-radius: 8px;

      .watchlist-main-item-father {
        .watchlist-main-item {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          .image {
            padding: 0px;
            img {
              border-radius: 8px;
            }
          }

          .title {
            width: 60%;
            padding-left: 5px;
            h1 {
              font-size: 20px;
              padding-bottom: 0px;
              padding-right: 20px;
            }

            .info {
              padding-top: 2px;
              span {
                padding-right: 3px;
              }
              .gernes {
                display: flex;
                justify-content: start;
                flex-wrap: wrap;
              }
            }
            .rating {
              padding-bottom: 2px;
              gap: 5px;
              p {
                transform: translateY(7px);
              }
            }
            .overview {
              padding-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
