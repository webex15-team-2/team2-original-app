<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->

  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>HOME</p>
    <p>ログイン状態: {{ authState }}</p>
    <p>メール認証: {{ emailVerified }}</p>
    <button class="btn btn-secondary" @click="signOut">サインアウト</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },

  data() {
    return {
      // feature/signinに関する処理 //

      authState: "",
      emailVerified: "",

      // feature/signinに関する処理終わり//
    };
  },
  methods: {
    // feature/signinに関する処理 //
    // signOut() {
    //   firebase.auth().signOut();
    // },
    // feature/signinに関する処理終わり//
  },
  mounted() {
    // feature/signinに関する処理 //
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.authState = "ログイン";
    //     this.emailVerified = user.emailVerified ? "済" : "未";
    //   } else {
    //     this.authState = "ログアウト";
    //     this.emailVerified = "-";
    //   }
    // });
    // feature/signinに関する処理終わり//
  },
};
</script>
