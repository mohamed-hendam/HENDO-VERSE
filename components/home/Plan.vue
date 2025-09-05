<template>
  <div class="main-plan">
    <v-container>
      <v-row>
        <v-col lg="9" cols="12">
          <h1 class="h1-plan">.</h1>
          <p class="p-plan">.</p>
        </v-col>
        <v-col lg="3" cols="12" class="change-contianer">
          <div class="change">
            <v-btn-toggle v-model="value">
              <v-btn class="btn" value="monthly">Monthly</v-btn>
              <v-btn class="btn" value="yearly">Yearly</v-btn>
            </v-btn-toggle>
          </div>
        </v-col>
      </v-row>

      <div class="card">
        <v-row>
          <v-col cols="12" md="4">
            <div class="item">
              <p class="title">Basic Plan</p>
              <p class="desc">
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including released titles.
              </p>
              <p class="price">
                <span>${{ basicPrice }}</span> /{{ value }}
              </p>
              <div class="action">
                <v-btn class="free">Start Free Trial</v-btn>
                <v-btn class="choose">Choose Plan</v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="item">
              <p class="title">Standard Plan</p>
              <p class="desc">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </p>
              <p class="price">
                <span>${{ standardPrice }}</span> /{{ value }}
              </p>
              <div class="action">
                <v-btn class="free">Start Free Trial</v-btn>
                <v-btn class="choose">Choose Plan</v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="item">
              <p class="title">Premium Plan</p>
              <p class="desc">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </p>
              <p class="price">
                <span>${{ premiumPrice }}</span> /{{ value }}
              </p>
              <div class="action">
                <v-btn class="free">Start Free Trial</v-btn>
                <v-btn class="choose">Choose Plan</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
const value = ref("monthly");
const month = ref({
  basic: 9.99,
  Standard: 12.99,
  Premium: 14.99,
});
const year = ref({
  basic: 119.88,
  Standard: 155.88,
  Premium: 179.88,
});
const getPrice = (plan) => {
  return computed(() => {
    return value.value === "monthly" ? month.value[plan] : year.value[plan];
  });
};

const basicPrice = getPrice("basic");
const standardPrice = getPrice("Standard");
const premiumPrice = getPrice("Premium");

const { $gsap } = useNuxtApp();
onMounted(() => {
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
  fadeUp(".main-plan");

  $gsap.to(".h1-plan", {
    scrollTrigger: {
      trigger: ".h1-plan",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: "Choose the plan that's right for you",
  duration: 2,
    ease: "linear",
  });
  $gsap.to(".p-plan", {
    scrollTrigger: {
      trigger: ".p-plan",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!",
    duration: 2,
    ease: "linear",
  });
});
</script>

<style lang="scss" scoped>
.main-plan {
  padding-top: 30px;
  background-color: rgb(var(--v-theme-bg8));
  h1 {
    color: rgb(var(--v-theme-main1));
  }
  p {
    color: rgb(var(--v-theme-main60));
  }
  .change-contianer {
    display: flex;
    justify-content: end;
    align-items: start;
    .change {
      background-color: rgb(var(--v-theme-bg6));
      padding: 10px;
      width: fit-content;
      border-radius: 10px;
      border: 1px solid rgb(var(--v-theme-bg15));
      .btn {
        color: rgb(var(--v-theme-main1));
        background-color: rgb(var(--v-theme-bg6));
        padding: 10px;
        &:focus {
          background-color: rgb(var(--v-theme-bg12));
          border-radius: 10px;
        }
      }
    }
  }

  .card {
    padding: 20px 10px;
    background-color: rgb(var(--v-theme-bg8));
    .item {
      padding: 50px;
      background-color: rgb(var(--v-theme-bg10));
      border-radius: 10px;
      border: 1px solid rgb(var(--v-theme-bg15));
      .title {
        padding-bottom: 20px;

        font-size: 24px;
        color: rgb(var(--v-theme-main1));
      }
      .desc {
        color: rgb(var(--v-theme-main60));
      }
      .price {
        padding: 20px 0;
        span {
          font-size: 35px;
          color: rgb(var(--v-theme-main1));
        }
      }
      .action {
        .free {
          color: rgb(var(--v-theme-main1));
          background-color: rgb(var(--v-theme-bg8));
          border-radius: 10px;
          border: 1px solid rgb(var(--v-theme-bg15));
          height: 50px;
          width: 100%;
          margin-bottom: 10px;
        }
        .choose {
          color: white;
          background-color: rgb(var(--v-theme-text));
          border-radius: 10px;
          height: 50px;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .main-plan {
    padding-top: 10px;
    h1 {
      padding: 5px 10px;
      font-size: 25px;
      font-weight: 400;
    }
    p {
      padding: 5px 10px;
    }
    .change-contianer {
      .change {
        background-color: rgb(var(--v-theme-bg6));
        padding: 5px;
        width: fit-content;
        border-radius: 8px;
        border: 1px solid rgb(var(--v-theme-bg15));
        .btn {
          padding: 5px;
          &:focus {
            background-color: rgb(var(--v-theme-bg12));
            border-radius: 8px;
          }
        }
      }
    }

    .card {
      padding: 20px 10px;
      background-color: rgb(var(--v-theme-bg8));
      .item {
        padding: 30px;
        border-radius: 10px;
        .title {
          padding-bottom: 10px;

          font-size: 22px;
        }
        .price {
          padding: 10px 0;
          span {
            font-size: 20px;
          }
        }
        .action {
          .free {
            height: 40px;
            margin-bottom: 5px;
          }
          .choose {
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
