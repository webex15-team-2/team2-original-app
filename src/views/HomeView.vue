<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->

  <div>
    <!-- <p>HOME</p> -->
    <!-- <p>ログイン状態: {{ authState }}</p> -->
    <!-- <p>メール認証: {{ emailVerified }}</p>
    <button class="btn btn-secondary" @click="signOut">サインアウト</button>  -->
    <pre>
      就活のエントリーシート(ES)で困ったことはありませんか?<br>
      企業に合わせて作成した複数のESの管理は大変ではないでしょうか？<br>
      このサイトは複数のESを保存しておけるサイトです!
    </pre>
  </div>
  <img
    class="image1"
    src="../assets/undraw_sharing_knowledge_03vp.png"
    alt="写真1"
  />
  <img class="image2" src="../assets/undraw_join_re_w1lh.png" alt="写真2" />
</template>

<script>
// @ is an alias to /src
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },

  data() {
    return {
      // feature/signinに関する処理 //

      // loginState: AuthState.loginState,
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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.authState = "ログイン";
        this.emailVerified = user.emailVerified ? "済" : "未";
      } else {
        this.authState = "ログアウト";
        this.emailVerified = "-";
      }
    });
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
.image1 {
  height: 150px;
  margin-bottom: 50px;
}

.image2 {
  height: 250px;
  margin-left: 100px;
  margin-top: 50px;
}

pre {
  font-size: 20px;
}
</style>
