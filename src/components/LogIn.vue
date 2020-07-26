<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <div v-if="isLogin">
                <h3>Log In</h3>
              </div>
              <div v-else>
                <h3>Sign Up</h3>
              </div>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div>
                <div v-if="isLogin">
                  <!-- LogIn -->
                  <p>Username</p>
                  <input v-model="username" name="username" type="text" />
                  <p>Password</p>
                  <input v-model="password" type="password" />
                  <div  @click="switchModal()" class="switch">
                    <p class="switcher">
                      Don't have an account? Switch to Sign-Up
                    </p>
                  </div>
                </div>

                <div v-else>
                  <!-- SignUp -->
                  <p>Email</p>
                  <input v-model="email" name="e-mail" type="text" />
                  <p>Username</p>
                  <input v-model="username" name="username" type="text" />
                  <p>Password</p>
                  <input v-model="password" type="password" />
                  <div  @click="switchModal()" class="switch">
                    <p class="switcher">
                      Already have an account? Switch to Log-In
                    </p>
                  </div>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <div style="display: flex; justify-content: center;">
                <button class="modal-default-button" style="margin-right: 2em;" @click="done()">
                  Cancel
                </button>
                <div v-if="isLogin">
                  <button class="modal-default-button" @click="done()">
                    Log in
                  </button>
                </div>
                <div v-else>
                  <button class="modal-default-button" @click="done()">
                    Sign up
                  </button>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-modal-component?from-embed=&file=/index.html:1168-1354
export default {
  name: "LogIn",
  data: function() {
    return {
      isLogin: true,
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    switchModal: function() {
      this.password = "";
      this.isLogin = !this.isLogin;
    },
    done: function() {
      if (this.isLogin) {
        console.log("logging in...");
        // do login through store?
      } else {
        console.log("signing up...");
        // do signup and login through store?
      }
      this.$emit("close");
    },
  },
};
</script>
<style scoped lang="scss">
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px rgb(20, 20, 30) inset !important;
  -webkit-text-fill-color: white !important;
}

input {
  z-index: 9999;
  outline: none;
  max-width: 33.3333%;
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px solid var(--nemic-color);
  background-color: rgb(20, 20, 30);
  color: white;
  text-align: center;

  &:focus {
    animation: input-pulse 2s infinite;
  }
  &:hover {
    animation: input-pulse 2s infinite;
  }
  &::placeholder {
    background-color: rgb(20, 20, 30);
  }
}

button {
  border: 1px solid var(--nemic-color);
  background-color: rgb(20, 20, 30);
  outline: none;
  padding: 0.5rem;
  border-radius: 2em;
  color: var(--nemic-color);
}

button:hover {
  animation: input-pulse 2s infinite;
}

@keyframes input-pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 var(--nemic-color);
  }

  40% {
    transform: scale(1);
    box-shadow: 0 0 0 0.5rem var(--nemic-color);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 var(--nemic-color);
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  color: white;
}

.modal-container {
  width: 25em;
  margin: 0px auto;
  padding: 2em 3em;
  background-color: rgb(20, 20, 30);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: var(--nemic-color);
}

.modal-body {
  margin: 2em 0;
}

.switch {
  padding-top: 1em;
}

.switcher {
  text-decoration: underline;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
