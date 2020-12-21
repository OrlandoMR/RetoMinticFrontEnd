<template>
  <div id="iniciar" class="text-center fullSize">
    <main class="form-signin">
      <form v-on:submit.prevent="del">
        <h1 class="h3 mb-3 fw-normal">Se ha eliminado su usuario satisfactoriamente</h1>
        
        <button class="w-100 btn btn-lg btn-success" type="submit">
          ¡Ok!
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
      username: "",
    };
  },
  methods: {
    del: function () {
        var self = this;
        self.username=localStorage.getItem("current_username");
        axios
        .delete(
           "https://sprint3-g3m4e13.herokuapp.com/user/delete/?username="
           +self.username
        ).then((result)=>{
            localStorage.setItem("current_username", "noUser");
            this.$router.push("/");
        }).catch((error)=>{
            console.log(error)
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
  
}
</style>