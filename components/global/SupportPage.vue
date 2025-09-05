<template>
  <div class="main-support-component">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="col1">
          <div class="header">
            <h1 class="h1-main-support-component">.</h1>
            <p class="p-main-support-component">.</p>
          </div>
          <div class="image">
            <img src="/public/images/supportimage.png" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="8" class="col2">
          <div class="form">
            <div class="content">
              <div class="info-content">
                <h1>Frist Name</h1>
                <input type="text" placeholder="Enter Your First Name" />
              </div>
              <div class="info-content">
                <h1>Last Name</h1>
                <input type="text" placeholder="Enter Your Last Name" />
              </div>
            </div>
            <div class="content">
              <div class="info-content">
                <h1>Email</h1>
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div class="info-content">
                <h1>Phone Number</h1>
                <input type="number" placeholder="Enter Your Phone Number" />
              </div>
            </div>
            <div class="message">
              <h1>Message</h1>
              <textarea type="text" placeholder="Enter Your Message" />
            </div>
            <div class="btn-content">
              <v-checkbox
                class="checkbox"
                label=" I agree with Terms of Use and Privacy Policy"
                v-model="enable"
              ></v-checkbox>

              <v-btn class="btn" :disabled="!enable"> Send Message </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const enable = ref(false);
const { $gsap } = useNuxtApp();
onMounted(() => {
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
  fadeUp(".main-support-component");

  $gsap.to(".h1-main-support-component", {
    scrollTrigger: {
      trigger: ".h1-main-support-component",
      start: "top 100%",
      toggleActions: "play none none none",
    },
    text: "Welcome to our support page!",
    duration: 2,
    ease: "power1.out",
  });
  $gsap.to(".p-main-support-component", {
    scrollTrigger: {
      trigger: ".p-main-support-component",
      start: "top 100%",
      toggleActions: "play none none none",
    },
    text: "We're here to help you with any problems you may be having with our product.",
    duration: 3,
    ease: "power1.out",
  });
});
</script>

<style lang="scss" scoped>
.main-support-component {
  padding-top: 40px;
  background-color: rgb(var(--v-theme-bg8));
  .col1 {
    padding: 10px;

    .header {
      h1 {
        color: rgb(var(--v-theme-main1));
        font-size: 50px;
        font-weight: 400;
        line-height: 140%;
        padding: 10px 0;
      }
      p {
        color: rgb(var(--v-theme-main60));
        padding: 10px 0;
      }
    }
    .image {
      padding: 20px 0;
      img {
        max-width: 100%;
        border: 2px solid rgb(var(--v-theme-bg15));
        border-radius: 10px;
      }
    }
  }
  .col2 {
    padding: 10px;
    .form {
      padding: 10px;
      background-color: rgb(var(--v-theme-bg6));
      border: 2px solid rgb(var(--v-theme-bg15));
      border-radius: 10px;
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        .info-content {
          flex-grow: 1;
          padding: 10px;
          h1 {
            color: rgb(var(--v-theme-main1));
            font-size: 20px;
            padding-bottom: 10px;
          }
          input {
            width: 100%;
            padding: 15px;
            color: rgb(var(--v-theme-main75));
            background-color: rgb(var(--v-theme-bg8));
            border: 1px solid rgb(var(--v-theme-bg15));
            border-radius: 8px;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
      .message {
        padding: 10px;
        h1 {
          color: rgb(var(--v-theme-main1));
          font-size: 20px;
          padding-bottom: 10px;
        }
        textarea {
          width: 100%;
          padding: 15px;
          color: rgb(var(--v-theme-main75));
          background-color: rgb(var(--v-theme-bg8));
          border: 1px solid rgb(var(--v-theme-bg15));
          border-radius: 8px;
          height: 200px;
        }
      }
      .btn-content {
        padding: 10px 10px 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .checkbox {
          color: rgb(var(--v-theme-main75));
          padding-right: 5px;
        }
        .btn {
          background-color: rgb(var(--v-theme-text));
          color: white;
          height: 50px;
          border-radius: 10px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .main-support-component {
    padding-top: 0px;
    .col1 {
      .header {
        h1 {
          font-size: 30px;
          font-weight: 400;
          line-height: 100%;
        }
      }
      .image {
        padding: 10px 0;
        img {
          border: 1px solid rgb(var(--v-theme-bg15));
          border-radius: 8px;
        }
      }
    }
    .col2 {
      .form {
        border: 1px solid rgb(var(--v-theme-bg15));
        border-radius: 8px;
        .content {
          .info-content {
            padding: 10px;
            h1 {
              color: rgb(var(--v-theme-main1));
              font-size: 18px;
              font-weight: 400;
            }
            input {
              padding: 10px;
              font-size: 12px;
            }
          }
        }
        .message {
          padding: 10px;
          h1 {
            color: rgb(var(--v-theme-main1));
            font-size: 20px;
            padding-bottom: 10px;
          }
          textarea {
            padding: 10px;
            height: 120px;
          }
        }
        .btn-content {
          .checkbox {
            padding-right: 5px;
            font-size: 14px;
          }
          .btn {
            height: 40px;
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>
