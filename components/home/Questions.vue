<template>
  <div class="main-questions">
    <v-container>
      <h1 class="h1-questions">.</h1>
      <p class="p-questions">.</p>
      <v-expansion-panels class="card">
        <v-row>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 01 </span>
                What is Hendo Verse?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Hendo Verse is a streaming platform that lets you watch movies,
                series, and exclusive content anytime, anywhere on demand.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <div class="line"></div>
          </v-col>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 05 </span>
                How do I sign up for Hendo Verse?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Just visit our website or download the app, click on “Sign Up”,
                and follow the simple steps to create your account.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <div class="line"></div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 02 </span>
                How much does Hendo Verse cost?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Hendo Verse offers multiple subscription plans to fit different
                needs and budgets. You can check the pricing page for the latest
                details.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <div class="line"></div>
          </v-col>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 06 </span>
                What is the Hendo Verse free trial?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Hendo Verse offers a free trial period for new users to explore
                the platform and enjoy full access before subscribing.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <div class="line"></div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 03 </span>
                What content is available on Hendo Verse?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Hendo Verse gives you access to a wide range of content
                including blockbuster movies, trending series, documentaries,
                and more.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <div class="line"></div>
          </v-col>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 07 </span>
                What is the Hendo Verse free trial?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                You can contact our support team through the Help Center on our
                website or directly via live chat and email support.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <div class="line"></div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 04 </span>
                How can I watch Hendo Verse?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                You can watch Hendo Verse on smartphones, tablets, laptops,
                smart TVs, and other supported devices via our app or web
                browser.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-col>
          <v-col cols="12" md="6" class="colomn">
            <v-expansion-panel class="item" elevation="0">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="title"
              >
                <span class="num"> 08 </span>
                What are the Hendo Verse payment methods?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                We support various payment methods including credit/debit cards,
                PayPal, and selected regional payment options.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-col>
        </v-row>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script setup>
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
  fadeUp(".main-questions");

  $gsap.to(".h1-questions", {
    scrollTrigger: {
      trigger: ".h1-questions",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: "Frequently Asked Questions",
    duration: 1,
    ease: "linear",
  });
  $gsap.to(".p-questions", {
    scrollTrigger: {
      trigger: ".p-questions",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about Hendo Verse.",
    duration: 1,
    ease: "linear",
  });
});
</script>

<style lang="scss">
.main-questions {
  padding-top: 50px;
  background-color: rgb(var(--v-theme-bg8));
  h1 {
    color: rgb(var(--v-theme-main1));
  }
  p {
    color: rgb(var(--v-theme-main60));
  }
  .card {
    padding: 20px 10px;
    background-color: rgb(var(--v-theme-bg8));
    display: flex;
    justify-content: space-between;
    align-items: center;
    .colomn {
      padding: 0;
      .item {
        background-color: rgb(var(--v-theme-bg8));
        padding: 10px;
        cursor: pointer;
        .title {
          padding: 10px;
          color: rgb(var(--v-theme-main1));
          .num {
            color: rgb(var(--v-theme-main1));
            background-color: rgb(var(--v-theme-bg12));
            border: 1px solid rgb(var(--v-theme-bg15));
            border-radius: 10px;
            padding: 12px;
            margin: 5px;
          }
        }
      }
      .line {
        background: linear-gradient(
          90deg,
          rgba(229, 0, 0, 0) 0%,
          #e50000 16.67%,
          rgba(229, 0, 0, 0) 100%
        );
        width: 100%;
        height: 1px;
        margin: 10px 0;
      }
    }
  }
}
@media (max-width: 767px) {
  .main-questions {
    padding-top: 10px;
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
      .colomn {
        .line {
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
