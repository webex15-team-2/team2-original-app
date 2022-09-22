<template>
  <h1>エントリーシート保存サイト</h1>
  <nav>
    <router-link to="/">Home</router-link>|
    <div v-if="!authState" style="display: inline-block; _display: inline">
      <router-link to="/signin">Sign In</router-link>|
      <router-link to="/signup">Sign Up</router-link>
    </div>
    <div v-else style="display: inline-block; _display: inline">
      <router-link to="/mypage">My Page</router-link>|
      <div style="display: inline-block; _display: inline" @click="signOut">
        Sign Out
      </div>
    </div>
  </nav>
  <router-view />
  <RegisterES />
</template>

<script>
// import RegisterES from "@/views/RegisterES.vue";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  // components: { RegisterES },
  data() {
    return { authState: false, emailVerified: "" };
  },

  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          alert("サインアウトしました");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    },
  },

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.authState = true;
        this.emailVerified = user.emailVerified ? "済" : "未";
      } else {
        this.authState = false;
        this.emailVerified = "-";
      }
    });
  },
};
</script>

<style>
body {
  background-image: url(./assets/backgroundpaper.png);
  background-position: center;
  background-size: cover;
  margin-bottom: 100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #28d;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
