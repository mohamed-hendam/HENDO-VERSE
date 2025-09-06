<template>
  <div class="subscriptions-main-component">
    <v-container>
      <div class="main-header">
        <h1 class="subscriptions-main-component-h1">.</h1>
        <p class="subscriptions-main-component-p">.</p>
      </div>
      <div class="table">
        <table>
          <thead>
            <tr class="header">
              <th>Features</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Price</td>
              <td>$9.99/Month</td>
              <td>$12.99/Month</td>
              <td>$14.99/Month</td>
            </tr>
            <tr>
              <td>Content</td>
              <td>
                Access to a wide selection of movies and shows, including some
                new releases.
              </td>
              <td>
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </td>
              <td>
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </td>
            </tr>
            <tr>
              <td>Devices</td>
              <td>Watch on one device simultaneously</td>
              <td>Watch on Two device simultaneously</td>
              <td>Watch on Four device simultaneously</td>
            </tr>
            <tr>
              <td>Free Trail</td>
              <td>7 Days</td>
              <td>7 Days</td>
              <td>7 Days</td>
            </tr>
            <tr>
              <td>Cancel Anytime</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>HDR</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Dolby Atmos</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Ad - Free</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Offline Viewing</td>
              <td>No</td>
              <td>Yes, for select titles.</td>
              <td>Yes, for all titles.</td>
            </tr>
            <tr>
              <td>Family Sharing</td>
              <td>No</td>
              <td>Yes, up to 5 family members.</td>
              <td>Yes, up to 6 family members.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="respnsive-table">
        <div class="table-header">
          <v-btn-toggle v-model="toggle" class="btn-toggle">
            <v-btn class="btn" value="Basic">Basic</v-btn>
            <v-btn class="btn" value="Standard">Standard</v-btn>
            <v-btn class="btn" value="Premium">Premium</v-btn>
          </v-btn-toggle>
        </div>
        <v-carousel :show-arrows="false" hide-delimiters v-model="toggle">
          <v-carousel-item value="Basic">
            <div class="info">
              <div class="content">
                <div class="sub">
                  <h1>Price</h1>
                  <p>$9.99/Month</p>
                </div>
                <div class="sub">
                  <h1>Free Trail</h1>
                  <p>7 Days</p>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="full-content">
                <h1>Content</h1>
                <p>
                  Access to a wide selection of movies and shows, including some
                  new releases.
                </p>
              </div>
              <v-divider></v-divider>

              <div class="full-content">
                <h1>Devices</h1>
                <p>Watch on one device simultaneously</p>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Cancel Anytime</h1>
                  <p>Yes</p>
                </div>
                <div class="sub">
                  <h1>HDR</h1>
                  <p>No</p>
                </div>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Dolby Atmos</h1>
                  <p>No</p>
                </div>
                <div class="sub">
                  <h1>Ad - Free</h1>
                  <p>No</p>
                </div>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Offline Viewing</h1>
                  <p>No</p>
                </div>
                <div class="sub">
                  <h1>Family Sharing</h1>
                  <p>No</p>
                </div>
              </div>
            </div>
          </v-carousel-item>

          <v-carousel-item value="Standard">
            <div class="info">
              <div class="content">
                <div class="sub">
                  <h1>Price</h1>
                  <p>$12.99/Month</p>
                </div>
                <div class="sub">
                  <h1>Free Trail</h1>
                  <p>7 Days</p>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="full-content">
                <h1>Content</h1>
                <p>
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
                </p>
              </div>
              <v-divider></v-divider>

              <div class="full-content">
                <h1>Devices</h1>
                <p>Watch on Two device simultaneously</p>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Cancel Anytime</h1>
                  <p>Yes</p>
                </div>
                <div class="sub">
                  <h1>HDR</h1>
                  <p>Yes</p>
                </div>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Dolby Atmos</h1>
                  <p>Yes</p>
                </div>
                <div class="sub">
                  <h1>Ad - Free</h1>
                  <p>Yes</p>
                </div>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Offline Viewing</h1>
                  <p>Yes, for select titles.</p>
                </div>
                <div class="sub">
                  <h1>Family Sharing</h1>
                  <p>5 family members.</p>
                </div>
              </div>
            </div>
          </v-carousel-item>

          <v-carousel-item value="Premium">
            <div class="info">
              <div class="content">
                <div class="sub">
                  <h1>Price</h1>
                  <p>$14.99/Month</p>
                </div>
                <div class="sub">
                  <h1>Free Trail</h1>
                  <p>7 Days</p>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="full-content">
                <h1>Content</h1>
                <p>
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
                </p>
              </div>
              <v-divider></v-divider>

              <div class="full-content">
                <h1>Devices</h1>
                <p>Watch on Four device simultaneously</p>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Cancel Anytime</h1>
                  <p>Yes</p>
                </div>
                <div class="sub">
                  <h1>HDR</h1>
                  <p>Yes</p>
                </div>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Dolby Atmos</h1>
                  <p>Yes</p>
                </div>
                <div class="sub">
                  <h1>Ad - Free</h1>
                  <p>Yes</p>
                </div>
              </div>
              <v-divider></v-divider>

              <div class="content">
                <div class="sub">
                  <h1>Offline Viewing</h1>
                  <p>Yes, for all titles.</p>
                </div>
                <div class="sub">
                  <h1>Family Sharing</h1>
                  <p>Yes, up to 6 family members.</p>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-container>
  </div>
</template>

<script setup>
const toggle = ref("Basic");
const { $gsap } = useNuxtApp();
onMounted(() => {
  const fadeUp = (selector, trigger = selector, start = "top 90%") => {
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
  fadeUp(".subscriptions-main-component");

  $gsap.to(".subscriptions-main-component-h1", {
    scrollTrigger: {
      trigger: ".subscriptions-main-component-h1",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    text: "Compare our plans and find the right one for you",
    duration: 2,
    ease: "power1.out",
  });
  $gsap.to(".subscriptions-main-component-p", {
    scrollTrigger: {
      trigger: ".subscriptions-main-component-p",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    text: "Hendo Verse offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.",
    duration: 3,
    ease: "power1.out",
  });
});
</script>

<style lang="scss" scoped>
.subscriptions-main-component {
  background-color: rgb(var(--v-theme-bg8));

  padding-top: 50px;

  .main-header {
    h1 {
      color: rgb(var(--v-theme-main1));
    }
    p {
      color: rgb(var(--v-theme-main60));
    }
  }
  .table {
    padding: 20px 0;
    table {
      width: 100%;
      border: 1px solid rgb(var(--v-theme-bg15));
      .header {
        th {
          text-align: start;
          border: 1px solid rgb(var(--v-theme-bg15));
          padding: 25px;
          background-color: rgb(var(--v-theme-bg6));
          color: rgb(var(--v-theme-main1));
        }
      }
      tr {
        td {
          border: 1px solid rgb(var(--v-theme-bg15));

          padding: 25px;
          background-color: rgb(var(--v-theme-bg8));
          color: rgb(var(--v-theme-main75));
        }
      }
    }
  }
  .respnsive-table {
    display: none;
  }
}
@media (max-width: 767px) {
  .subscriptions-main-component {
    padding-top: 30px;

    .main-header {
      h1 {
        font-size: 25px;
        font-weight: 400;
      }
    }
    .table {
      display: none;
    }
    .respnsive-table {
      display: block;
      padding-top: 40px;
      .table-header {
        padding: 10px;
        text-align: center;
        .btn-toggle {
          // padding: 10px;
          border: 1px solid rgb(var(--v-theme-bg15));
          border-radius: 8px;
          .btn {
            background-color: rgb(var(--v-theme-bg6));
            &:focus {
              background-color: rgb(var(--v-theme-bg12));
            }
          }
        }
      }
      .info {
        width: 100%;
        padding: 10px;
        background-color: rgb(var(--v-theme-bg6));
        border: 1px solid rgb(var(--v-theme-bg15));
        border-radius: 8px;
        .content {
          display: flex;
          justify-content: start;
          align-items: center;
          padding: 5px 20px;
          .sub {
            width: 50%;
            padding: 5px;
            h1 {
              font-size: 18px;
              font-weight: 400;
              color: rgb(var(--v-theme-main75));
            }
            p {
              color: rgb(var(--v-theme-main1));
            }
          }
        }
        .full-content {
          padding: 5px 20px;

          h1 {
            font-size: 18px;
            font-weight: 400;
            color: rgb(var(--v-theme-main75));
          }
        }
      }
    }
  }
}
</style>
