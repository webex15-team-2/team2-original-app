<template>
  <h2>企業名</h2>
  <input type="text" v-model="company" />
  <h2>テーマ</h2>
  <input type="text" v-model="esTheme" />
  <h2>字数制限</h2>
  <input type="number" v-model="limit" />
  <h2>ES</h2>
  <textarea cols="30" rows="10" v-model="esContent"></textarea>
  <button v-on:click="post">保存</button>
</template>

<script>
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase.js";

export default {
  data() {
    return {
      company: "",
      esTheme: "",
      limit: "",
      esContent: "",
      userId: "",
    };
  },
  methods: {
    async post() {
      const esData = {
        kigyou: this.company,
        theme: this.esTheme,
        seigen: this.limit,
        es: this.esContent,
      };
      this.userId = "user2";
      // ここにユーザIDが入る

      await setDoc(doc(db, "users", this.userId), esData).then(() => {
        this.newData.push(esData);
      });
      // usersコレクションの名前がユーザIDのドキュメントにデータが保存される

      this.company = this.esTheme = this.limit = this.esContent = "";
      // 保存後にボックスは空になる
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
