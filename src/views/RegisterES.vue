<template>
  <h2>企業名</h2>
  <input type="text" v-model="company" />
  <h2>テーマ</h2>
  <select type="text" v-model="esTheme">
    <option value="がくちか">がくちか</option>
    <option value="学チカ">学チカ</option>
  </select>
  <h2>字数制限</h2>
  <input type="number" v-model="limit" />
  <h2>ES</h2>
  <textarea cols="30" rows="10" v-model="esContent"></textarea>
  <button v-on:click="post">保存</button>
</template>

<script>
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "@/firebase.js";
export default {
  name: "RegisterES",
  data() {
    return {
      company: "",
      esTheme: "",
      limit: "",
      esContent: "",
      userId: "",
      postCount: 0,
    };
  },
  methods: {
    async post() {
      const esData = {
        company: this.company,
        theme: this.esTheme,
        limit: this.limit,
        es: this.esContent,
      };
      this.userId = "user2";
      this.postCount = this.postCount + 1;
      // ここにユーザIDが入る
      const usersColRef = collection(db, "users", this.userId, "posts");
      await setDoc(doc(usersColRef, `post${this.postCount}`), esData);
      // usersコレクションの名前がユーザIDのドキュメントにデータが保存される
      this.company = this.esTheme = this.limit = this.esContent = "";
      // 保存後にボックスは空になる
    },
  },
};
</script>

<style scoped>
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
