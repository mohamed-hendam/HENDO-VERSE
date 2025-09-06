<template>
  <div class="free-trial">
    <v-container>
      <picture>
        <source
          srcset="/public/images/resfreetrail.png"
          media="(max-width: 990px)"
        />
        <img src="/images/freetrial.png" />
      </picture>
      <div class="content">
        <v-row>
          <v-col cols="12" md="8" lg="10" class="text">
            <h1 class="h1-freetrial">.</h1>
            <p class="p-freetrial">.</p>
          </v-col>
          <v-col cols="12" md="4" lg="2" class="start">
            <nuxt-link to="/Subscriptions">
              <v-btn class="btn-freetrial">Start a Free Trail</v-btn>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
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
  fadeUp(".free-trial");

  $gsap.to(".h1-freetrial", {
    scrollTrigger: {
      trigger: ".h1-freetrial",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: "Start your free trial today!",
    duration: 1,
    ease: "linear",
  });
  $gsap.to(".p-freetrial", {
    scrollTrigger: {
      trigger: ".p-freetrial",
      start: "top 50%",
      toggleActions: "play none none none",
    },
    text: " This is a clear and concise call to action that encourages users to sign up for a free trial of Hendo Verse.",
    duration: 1,
    ease: "linear",
  });
});
</script>

<style lang="scss" scoped>
.free-trial {
  margin: 40px auto;
  position: relative;
  img {
    width: 100%;
  }
  .content {
    width: 85%;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .text {
      h1 {
        color: white;
      }
      p {
        color: rgb(var(--v-theme-main60));
      }
    }
    .start {
      width: 100%;
      .btn-freetrial {
        color: white;
        background-color: rgb(var(--v-theme-text));
        border-radius: 10px;
        height: 50px;
        width: 100%;
      }
    }
  }
}
</style>
