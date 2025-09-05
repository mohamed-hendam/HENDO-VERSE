<template>
  <footer class="main-footer">
    <v-container>
      <v-row class="row-one">
        <v-col cols="4" md="3" lg="2" class="col">
          <h1>Home</h1>
          <NuxtLink to="/#HomeCategories" class="link">
            <p>Categories</p>
          </NuxtLink>
          <NuxtLink to="/#HomeDevices" class="link">
            <p>Devices</p>
          </NuxtLink>
          <NuxtLink to="/#HomeFAQ" class="link">
            <p>Pricing</p>
          </NuxtLink>
          <NuxtLink to="/#HomePricing" class="link">
            <p>FAQ</p>
          </NuxtLink>
        </v-col>
        <v-col cols="4" md="3" lg="2" class="col">
          <h1>Movies</h1>
          <router-link to="/MoviesAndShows/#MoviesGenres" class="link"
            ><p>Gernes</p></router-link
          >
          <router-link to="/MoviesAndShows/#MoviesPopuler" class="link"
            ><p>Popular</p></router-link
          >
          <router-link to="/MoviesAndShows/#MoviesTopRated" class="link"
            ><p>Top Rated</p></router-link
          >
          <router-link to="/MoviesAndShows/#MoviesNowPlaying" class="link"
            ><p>Playing Now</p></router-link
          >
        </v-col>
        <v-col cols="4" md="3" lg="2" class="col">
          <h1>Shows</h1>
          <NuxtLink to="/MoviesAndShows/#ShowGenres" class="link"
            ><p>Gernes</p></NuxtLink
          >
          <NuxtLink to="/MoviesAndShows/#ShowPopuler" class="link"
            ><p>Popular</p></NuxtLink
          >
          <NuxtLink to="/MoviesAndShows/#ShowonAir" class="link"
            ><p>on Air</p></NuxtLink
          >
          <NuxtLink to="/MoviesAndShows/#ShowAiringToday" class="link"
            ><p>Airing Today</p></NuxtLink
          >
        </v-col>
        <v-col cols="4" md="3" lg="2" class="col">
          <h1>Support</h1>
          <NuxtLink to="/Support/#SupportPage" class="link">
            <p>Support</p></NuxtLink
          >
        </v-col>
        <v-col cols="4" md="3" lg="2" class="col">
          <h1>Subscription</h1>
          <NuxtLink to="/Subscriptions/#PlanPage" class="link"
            ><p>Plans</p></NuxtLink
          >
          <NuxtLink to="/Subscriptions/#SubscriptionsPage" class="link">
            <p>Features</p></NuxtLink
          >
        </v-col>
        <v-col cols="4" md="3" lg="2" class="col">
          <h1>Connect With Us</h1>
          <div class="icons">
            <span>
              <a href="mohamedhendam296@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/mohamed-hendam">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>

            <span>
              <a href="https://www.linkedin.com/in/mohamed-hendam-684987248">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row class="row-two">
        <v-col cols="12" md="4">
          @{{ year }} Mohamed Hendam, All Rights Reserved
        </v-col>
        <v-col cols=""></v-col>
        <v-col cols="12" md="4" class="Policy">
          <span>Terms of Use</span>
          <v-divider vertical></v-divider>
          <span>Privacy Policy</span>
          <v-divider vertical></v-divider>
          <span>Cookie Policy</span>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.main-footer {
  padding: 50px 0;
  background-color: rgb(var(--v-theme-bg6));
  .row-one {
    padding: 10px 0;
    .col {
      h1 {
        font-size: 18px;
        color: rgb(var(--v-theme-main1));
      }
      .link {
        text-decoration: none;
        p {
          font-size: 14px;
          color: rgb(var(--v-theme-main60));
        }
      }

      .icons {
        padding: 20px 0;
        span {
          margin: 3px;
          padding: 8px;
          font-size: 18px;
          background-color: rgb(var(--v-theme-bg10));
          border: 1px solid rgb(var(--v-theme-bg10));
          border-radius: 10px;
          cursor: pointer;
          i {
            text-decoration: none;
            color: rgb(var(--v-theme-main1));
          }
        }
      }
    }
  }
  .row-two {
    border-top: 1px solid rgb(var(--v-theme-bg15));
    padding: 10px 0;
    .Policy {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 15px;
      cursor: pointer;
    }
  }
}
</style>
