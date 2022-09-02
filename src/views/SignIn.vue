<template>
  <div class="login">
    <div class="login-triangle"></div>

    <h2 class="login-header">Sign In</h2>

    <form class="login-container">
      <p><input type="email" placeholder="Email" v-model="emailAddress" /></p>
      <p>
        <input type="password" placeholder="Password" v-model="password" />
      </p>
      <p>
        <button class="btn btn--blue" type="button" @click="SignIn">
          Sign In
        </button>
      </p>
    </form>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      emailAddress: "",
      password: "",
    };
  },
  methods: {
    SignIn() {
      try {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, this.emailAddress, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("ログイン成功");
            alert("ログイン成功");
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

.btn,
a.btn,
button.btn {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #fff;
  border-radius: 0.5rem;
}

.btn--blue,
a.btn--blue {
  color: #fff;
  background-color: #05a;
}
.btn--blue:hover,
a.btn--blue:hover {
  color: #fff;
  background: #033089;
}

body {
  background: #456;
  font-family: "Open Sans", sans-serif;
}

.login {
  width: 400px;
  margin: 16px auto;
  font-size: 16px;
}

/* Reset top and bottom margins from certain elements */
.login-header,
.login p {
  margin-top: 0;
  margin-bottom: 0;
}

/* The triangle form is achieved by a CSS hack */
.login-triangle {
  width: 0;
  margin-right: auto;
  margin-left: auto;
  border: 12px solid transparent;
  border-bottom-color: #28d;
}

.login-header {
  background: #28d;
  padding: 20px;
  font-size: 1.4em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.login-container {
  background: #ebebeb;
  padding: 12px;
}

/* Every row inside .login-container is defined with p tags */
.login p {
  padding: 12px;
}

.login input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

.login input[type="email"],
.login input[type="password"] {
  background: #fff;
  border-color: #bbb;
  color: #555;
}

/* Text fields' focus effect */
.login input[type="email"]:focus,
.login input[type="password"]:focus {
  border-color: #888;
}

.login input[type="submit"] {
  background: #28d;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
}

.login input[type="submit"]:hover {
  background: #17c;
}

/* Buttons' focus effect */
.login input[type="submit"]:focus {
  border-color: #05a;
}
</style>
