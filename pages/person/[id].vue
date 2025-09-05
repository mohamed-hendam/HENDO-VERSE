<template>
  <div class="main-page-person">
    <v-container>
      <v-row class="person-details-main-header">
        <v-col cols="12" md="3"
          ><div class="image">
            <img
              v-if="actorDetails.profile_path"
              :src="`https://image.tmdb.org/t/p/w300${actorDetails.profile_path}`"
            />
            <img src="/public/images/rate.png" v-else /></div
        ></v-col>
        <v-col cols="12" md="9">
          <div class="title">
            <h1>{{ actorDetails.name }}</h1>
            <div class="info">
              <p v-if="actorDetails.birthday">
                <span
                  ><i class="fa-solid fa-cake-candles"></i> Birthday :
                </span>
                {{ actorDetails.birthday }}
              </p>
              <p v-else></p>
            </div>
            <div class="info">
              <p v-if="actorDetails.place_of_birth">
                <span
                  ><i class="fa-solid fa-location-dot"></i> Place Of Birth :
                </span>
                {{ actorDetails.place_of_birth }}
              </p>
              <p v-else></p>
            </div>

            <div class="info">
              <p v-if="actorDetails.known_for_department">
                <span
                  ><i class="fa-regular fa-address-card"></i> Known For
                  Department :
                </span>
                {{ actorDetails.known_for_department }}
              </p>
              <p v-else></p>
            </div>

            <div class="info">
              <p v-if="actorDetails.gender">
                <span><i class="fa-solid fa-venus-mars"></i> Gender : </span>
                {{ genderMap[actorDetails.gender] }}
              </p>
              <p v-else></p>
            </div>
            <div class="overview">
              <p v-if="actorDetails.biography">
                {{ actorDetails.biography }}
              </p>
              <p v-else>There is No Description Data For This Perseon</p>
            </div>
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
  title: "Actor Details",
});

const route = useRoute();
const actorId = route.params.id;

const config = useRuntimeConfig();
const actorDetails = ref({});

const fetchActorDetails = async (id, informations) => {
  const { data } = await useFetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbToken}`,
      },
    }
  );
  informations.value = data.value || {};
};
await fetchActorDetails(actorId, actorDetails);

const genderMap = {
  0: "Not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};

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
  fadeUp(".person-details-main-header");
});
</script>

<style lang="scss" scoped>
.main-page-person {
  background-color: rgb(var(--v-theme-bg8));

  .person-details-main-header {
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

      .info {
        p {
          color: rgb(var(--v-theme-main60));
          font-size: 18px;
          padding: 5px 0;
          span {
            margin-right: 5px;
            font-size: 20px;
            color: rgb(var(--v-theme-main75));
          }
        }
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
}

@media (max-width: 767px) {
  .main-person-details {
    .person-details-main-header {
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

        .info {
          p {
            font-size: 16px;
            padding: 5px 0;
            span {
              font-size: 18px;
            }
          }
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
  }
}
</style>
