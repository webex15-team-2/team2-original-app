<template>
  <h2>企業名</h2>
  <input type="text" v-model="company" />
  <h2>テーマ</h2>
  <select v-model="esTheme">
    <option value="がくちか">がくちか</option>
    <option value="学チカ">学チカ</option>
  </select>
  <h2>字数制限</h2>
  <input type="number" v-model="limit" />
  <h2>ES</h2>

  <div class="box">
    <textarea cols="30" rows="10" v-model="esContent"></textarea>
    <button v-on:click="post">保存</button>
  </div>

  <div>
    <h2>取得</h2>
    <button v-on:click="getData">取得</button>
    <div v-for="(Syutoku, index) in syutoku" :key="index">
      {{ index + 1 }}<br />
      企業：{{ Syutoku.company }}<br />
      テーマ：{{ Syutoku.theme }}<br />
      制限字数：{{ Syutoku.limit }}<br />
      本文：{{ Syutoku.es }}<br />
      -------------------------------------
    </div>
  </div>
</template>

<script>
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.js";
import { getAuth } from "@firebase/auth";

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
      user: "",
      auth: "",
      syutoku: [],
    };
  },
  methods: {
    async post() {
      const auth = getAuth();
      const user = auth.currentUser;
      const esData = {
        company: this.company,
        theme: this.esTheme,
        limit: this.limit,
        es: this.esContent,
      };
      this.postCount = this.postCount + 1;

      const usersColRef = collection(db, "users", user.uid, "posts");
      // ここにユーザIDが入る
      await setDoc(doc(usersColRef, `post${this.postCount}`), esData);
      // usersコレクションの名前がユーザIDのドキュメントにデータが保存される
      this.company = this.esTheme = this.limit = this.esContent = "";
      // 保存後にボックスは空になる
    },
    async getData() {
      const auth = getAuth();
      const user = auth.currentUser;
      const querySnapshot = await getDocs(
        collection(db, "users", user.uid, "posts")
      );
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.syutoku.push(doc.data());
      });
      console.log(this.syutoku[2]);
    },
  },
};
</script>

<style scoped>
body {
  height: 1000px;
  margin-bottom: 100px;
}

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

.box {
  position: relative;
}

button {
  position: absolute;
  bottom: -40px;
  left: 49%;
}
</style>
