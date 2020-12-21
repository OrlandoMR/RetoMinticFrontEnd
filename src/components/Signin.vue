<template>
  <div id="signin">
    <Navbar />
    <div class="container-custom">
      <div class="row mx-0">
        <div class="col-7">
          <div class="mycontent-left">
            <div class="py-5 text-center">
              <h2>Registrate</h2>
              <p class="lead mx-5">
                Haz parte ahora de un gran grupo de personas que cuentan con una
                herramienta de gestión, administracion y esquematización de sus
                finanzas.
              </p>
            </div>

            <form class="needs-validation mx-5" novalidate="" v-on:submit.prevent="signin">
              <div class="row g-3">
                <div class="col-12">
                  <label for="username" class="form-label">Usuario</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Usuario"
                      required=""
                      v-model="user_in.username"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <label for="password" class="form-label">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password1"
                    minlength="8"
                    v-model="user_in.password"
                  />
                </div>

                <div class="col-12">
                  <label for="password" class="form-label"
                    >Confirmar contraseña</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="password1"
                    minlength="8"
                  />
                </div>

                <div class="col-12">
                  <label for="email" class="form-label"
                    >Correo electronico</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                    v-model="user_in.email"
                  />
                </div>

                <div class="col-12">
                  <label for="address" class="form-label"
                    >Fecha de nacimiento</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="16-12-1998"
                    required=""
                    v-model="user_in.dob"
                  />
                </div>
              </div>

              <button class="mt-4 btn btn-success btn-lg" type="submit">
                Unirse
              </button>
            </form>
          </div>
        </div>

        <div class="col-5 stay">
          <img src="../assets/stayhome.jpg" class="home" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import axios from "axios";

export default {
  name: "Singin",
  components: {
    Navbar,
  },
  data: function(){
    return{
      user_in:{
        username: "",
        password: "",
        email: "",
        dob:""
      }
    }
  },
  methods: {
    signin:function(){
      var self = this;
      axios
        .post(
           "https://sprint3-g3m4e13.herokuapp.com/user/create/?username="
           +self.user_in.username
           +"&password="
           +self.user_in.password
           +"&email="
           +self.user_in.email
           +"&dob="
           +self.user_in.dob
           
        )
        .then((result) => {
          alert("Registro correcto");
          console.log(result);
          // self.$emit("log-in", self.user_in.username);
          this.$router.push("/");
        })
        .catch((error) => {
          
            alert("Se ha presentado un error de tipo: "+error);
          
        });

    }
  }
};
</script>

<style>
.mycontent-left {
  border-right: 1px dashed #333;
}

.home {
  width: 60%;
}

.stay {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.container-custom{
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
</style>