<template>
  <div class="account-main-page">
    <v-container class="main-content">
      <div>
        <div class="upper">
          <v-btn-toggle mandatory v-model="toggle" class="btn-toggle">
            <v-btn value="signin">Sign In</v-btn>
            <v-btn value="signup">Sign Up</v-btn>
          </v-btn-toggle>
          <div class="go-home">
            <NuxtLink to="/" class="link"
              ><i class="fa-solid fa-xmark"></i>
            </NuxtLink>
          </div>
        </div>
        <v-carousel
          :show-arrows="false"
          hide-delimiters
          v-model="toggle"
          height="auto"
        >
          <v-carousel-item value="signin">
            <div class="login">
              <h1>Sign In To Your Account</h1>
              <div class="form">
                <h1>Email</h1>
                <input type="email" placeholder="Enter Your Email" />
                <h1>Password</h1>
                <input type="password" placeholder="Enter Your Password" />
              </div>
              <v-btn class="btn">Sign In</v-btn>
              <v-divider class="divider">OR Sign In With</v-divider>
              <div class="others">
                <v-btn
                  class="btns"
                  variant="outlined"
                  href="https://accounts.google.com/signin"
                  target="_blank"
                  ><i class="fa-brands fa-google"></i
                ></v-btn>
                <v-btn
                  class="btns"
                  variant="outlined"
                  href="https://www.facebook.com/login.php"
                  target="_blank"
                  ><i class="fa-brands fa-facebook"></i
                ></v-btn>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item value="signup">
            <div class="signup">
              <h1>Creat An Account</h1>
              <div class="form">
                <h1>Name</h1>
                <input type="text" placeholder="Enter Your Name" />
                <h1>Email</h1>
                <input type="email" placeholder="Enter Your Email" />
                <h1>Password</h1>
                <input type="password" placeholder="Enter Your Password" />
                <h1>Confirm Password</h1>
                <input type="password" placeholder="Confirm Password" />
              </div>
              <v-btn class="btn">Sign Up</v-btn>
              <v-divider class="divider">OR Sign Up With</v-divider>
              <div class="others">
                <v-btn
                  class="btns"
                  variant="outlined"
                  href="https://accounts.google.com/signin"
                  target="_blank"
                  ><i class="fa-brands fa-google"></i
                ></v-btn>
                <v-btn
                  class="btns"
                  variant="outlined"
                  href="https://www.facebook.com/login.php"
                  target="_blank"
                  ><i class="fa-brands fa-facebook"></i
                ></v-btn>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-container>
  </div>
</template>

<script setup>
const toggle = ref("signin");
definePageMeta({
  layout: false,
});

useHead({
  title: "login",
});
</script>

<style lang="scss" scoped>
.account-main-page {
  background: linear-gradient(
    270deg,
    rgba(var(--v-theme-bg6)) 0%,
    rgba(var(--v-theme-bg6)) 25%,
    rgba(var(--v-theme-gradient)) 35%,
    rgba(var(--v-theme-bg6)) 60%,
    rgba(var(--v-theme-bg6)) 85%,
    rgba(var(--v-theme-gradient)) 95%,
    rgba(var(--v-theme-bg6)) 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  .main-content {
    margin: 20px 0;
    width: 450px;
    height: fit-content;
    background-color: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(1000px);
    -webkit-backdrop-filter: blur(1000px);
    padding: 30px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    .upper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn-toggle {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.01);
        border-radius: 20px;
        .v-btn {
          background-color: rgba(255, 255, 255, 0.01);
          border-radius: 20px;
          margin: 5px;
          width: calc(50% - 10px);
        }
      }
      .go-home {
        .link {
          color: rgb(var(--v-theme-main60));
          font-size: 16px;
          border: 1px solid rgb(var(--v-theme-main60));
          border-radius: 50%;
          padding: 8px;
        }
      }
    }
    .login {
      h1 {
        padding-top: 20px;
        font-size: 25px;
        font-weight: 400;
      }
      .form {
        h1 {
          font-size: 18px;
          font-weight: 200;
          //   margin-top: 10px;
        }
        input {
          display: block;
          width: 100%;
          padding: 10px;
          color: rgb(var(--v-theme-main75));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          margin-top: 5px;
          &:focus {
            border: 0;
            outline: 0;
          }
        }
      }
      .btn {
        margin: 20px 0;
        width: 100%;
        height: 40px;
        text-align: center;
        color: rgba(var(--v-theme-main1));
        background-color: rgb(var(--v-theme-text));
        border-radius: 8px;
      }
      .others {
        margin-top: 10px;
        .btns {
          margin: 10px;
          width: calc(50% - 20px);
          height: 40px;
          text-align: center;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    }
    .signup {
      h1 {
        padding-top: 20px;
        font-size: 25px;
        font-weight: 400;
      }
      .form {
        // padding-top: 20px;
        h1 {
          font-size: 18px;
          font-weight: 200;
        }
        input {
          display: block;
          width: 100%;
          padding: 10px;
          color: rgb(var(--v-theme-main75));
          //   background-color: rgb(var(--v-theme-bg8));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          margin-top: 0px;
          &:focus {
            border: 0;
            outline: 0;
          }
        }
      }
      .btn {
        margin: 20px 0;
        width: 100%;
        height: 40px;
        text-align: center;
        color: rgba(var(--v-theme-main1));
        background-color: rgb(var(--v-theme-text));
        border-radius: 8px;
      }
      .others {
        margin-top: 10px;
        .btns {
          margin: 10px;
          width: calc(50% - 20px);
          height: 40px;
          text-align: center;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .account-main-page {
    background: linear-gradient(
      270deg,
      rgba(var(--v-theme-bg6)) 0%,
      rgba(var(--v-theme-bg6)) 25%,
      rgba(var(--v-theme-gradient)) 35%,
      rgba(var(--v-theme-bg6)) 60%,
      rgba(var(--v-theme-bg6)) 85%,
      rgba(var(--v-theme-gradient)) 95%,
      rgba(var(--v-theme-bg6)) 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 5s ease infinite;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    .main-content {
      margin: 20px 10%;
      width: 80%;
      height: fit-content;
      background-color: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(1000px);
      -webkit-backdrop-filter: blur(1000px);
      padding: 30px;
      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      .upper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-toggle {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.01);
          border-radius: 20px;
          .v-btn {
            background-color: rgba(255, 255, 255, 0.01);
            border-radius: 20px;
            margin: 5px;
            width: calc(50% - 10px);
          }
        }
        .go-home {
          .link {
            color: rgb(var(--v-theme-main60));
            font-size: 16px;
            border: 1px solid rgb(var(--v-theme-main60));
            border-radius: 50%;
            padding: 8px;
          }
        }
      }
      .login {
        h1 {
          padding-top: 20px;
          font-size: 25px;
          font-weight: 400;
        }
        .form {
          h1 {
            font-size: 18px;
            font-weight: 200;
            //   margin-top: 10px;
          }
          input {
            display: block;
            width: 100%;
            padding: 10px;
            color: rgb(var(--v-theme-main75));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin-top: 5px;
            &:focus {
              border: 0;
              outline: 0;
            }
          }
        }
        .btn {
          margin: 20px 0;
          width: 100%;
          height: 40px;
          text-align: center;
          color: rgba(var(--v-theme-main1));
          background-color: rgb(var(--v-theme-text));
          border-radius: 8px;
        }
        .others {
          margin-top: 10px;
          .btns {
            margin: 10px;
            width: calc(50% - 20px);
            height: 40px;
            text-align: center;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      }
      .signup {
        h1 {
          padding-top: 20px;
          font-size: 25px;
          font-weight: 400;
        }
        .form {
          // padding-top: 20px;
          h1 {
            font-size: 18px;
            font-weight: 200;
          }
          input {
            display: block;
            width: 100%;
            padding: 10px;
            color: rgb(var(--v-theme-main75));
            //   background-color: rgb(var(--v-theme-bg8));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin-top: 0px;
            &:focus {
              border: 0;
              outline: 0;
            }
          }
        }
        .btn {
          margin: 20px 0;
          width: 100%;
          height: 40px;
          text-align: center;
          color: rgba(var(--v-theme-main1));
          background-color: rgb(var(--v-theme-text));
          border-radius: 8px;
        }
        .others {
          margin-top: 10px;
          .btns {
            margin: 10px;
            width: calc(50% - 20px);
            height: 40px;
            text-align: center;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
  }
}
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
