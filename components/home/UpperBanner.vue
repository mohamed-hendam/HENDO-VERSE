<template>
  <div class="upper-banner">
    <picture class="cover-image">
      <source
        class="cover-image"
        srcset="/public/images/resbanner.png"
        media="(max-width: 768px)"
      />
      <img :src="bannerImage" class="cover-image" />
    </picture>
    <div class="box">
      <img src="/images/logobunner.png" />
    </div>
    <div class="landing">
      <v-container>
        <h1>The Best Streaming Experience</h1>
        <p v-show="windowWidth > 992">
          Hendo Verse is the best streaming experience for watching your
          favorite movies and shows on demand, anytime, anywhere. With Hendo
          Verse, you can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <p v-show="windowWidth <= 992">
          Hendo Verse is the best streaming experience for watching your
          favorite movies and shows on demand, anytime, anywhere.
        </p>
        <NuxtLink to="/MoviesAndShows">
          <v-btn class="start-watch">
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
            Start Watching Now
          </v-btn>
        </NuxtLink>
      </v-container>
    </div>
  </div>
</template>
<script setup>
const { $gsap } = useNuxtApp();
import { useTheme } from "vuetify";
const theme = useTheme();
const isDark = computed(() => theme.global.name.value === "dark");

const bannerImage = computed(() =>
  isDark.value ? "/images/Container2.png" : "/images/Container2.jpg"
);
const windowWidth = ref(0);
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });

  const fadeUp = (selector, trigger = selector, start = "top 100%") => {
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

  fadeUp(".box");
  fadeUp(".landing");
});
</script>

<style lang="scss" scoped>
.upper-banner {
  position: relative;
  .cover-image {
    width: 100%;
    height: 100%;
  }
  .box {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 100%;
    }
  }
  .landing {
    text-align: center;
    position: absolute;
    // display: block;
    bottom: 4%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    h1 {
      color: white;
    }
    p {
      color: #bfbfbf;
      padding: 10px;
    }
    .start-watch {
      background-color: rgb(var(--v-theme-text));
      color: white;
      height: 50px;
      border-radius: 10px;
    }
  }
}

//
@media (max-width: 767px) {
  .upper-banner {
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80%;
      }
    }
    .landing {
      bottom: 0%;
      p {
        padding: 5px;
      }
      .start-watch {
        border-radius: 10px;
      }
    }
  }
}
</style>
