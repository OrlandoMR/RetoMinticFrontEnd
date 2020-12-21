<template>
  <div id="iniciar" class="text-center fullSize">
    <main class="form-signin">
      <form v-on:submit.prevent="login">
        <h1 class="h3 mb-3 fw-normal">Inicia sesión</h1>
        <label for="inputEmail" class="visually-hidden mb-1">Usuario</label>
        <input
          type="text"
          id="inputEmail"
          class="form-control mb-1"
          placeholder="Usuario"
          required=""
          autofocus=""
          v-model="user_in.username"
        />
        <label for="inputPassword" class="visually-hidden ">Contraseña</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control mb-2"
          placeholder="Contraseña"
          required=""
          v-model="user_in.password"
        />
        <button class="w-100 btn btn-lg btn-success" type="submit">
          Iniciar sesión
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import axios from "axios";

export default {
  name: "Iniciar",
  components: {
    Navbar,
  },
  data: function () {
    return {
      user_in: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      var self = this;
      axios
        .post(
           "https://sprint3-g3m4e13.herokuapp.com/user/auth/?username=" +
           self.user_in.username +
           "&password=" +
           self.user_in.password
        )
        .then((result) => {
          alert("Autenticación Exitosa");
          localStorage.setItem('current_username',self.user_in.username);
          // self.$emit("log-in", self.user_in.username);
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response.status == "404")
            alert("ERROR 404: Usuario no encontrado.");
          if (error.response.status == "403")
            alert("ERROR 403: Contraseña Erronea.");
        });
    },
  },
};
</script>

<style>
.fullSize{
  height:100vh;
}
.form-signin{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-image:url(../assets/sunflower.jpg);
  background-size: 120%;
}
</style>