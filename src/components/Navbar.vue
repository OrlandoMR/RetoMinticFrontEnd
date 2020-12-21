<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-custom-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">MyTIC Finances</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          <div v-if="!usernameExist">
            <a
              class="btn btn-outline-success mr-1"
              type="submit"
              href="/signin"
            >
              Sing In
            </a>
            <a class="btn btn-outline-success mr-1" type="submit" href="/login">
              Log In
            </a>
          </div>
          <div v-if="usernameExist">
            
            <div class="btn-group dropstart">
              <button
                class="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ username }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" @click="closeSesion" href="/">Cerrar sesión</a></li>
                <li><a class="dropdown-item" @click="deleteUser" href="/delete">Eliminar usuario</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      msg: "Welcome to navbar",
      username: "",
      usernameExist: false,
    };
  },
  methods: {
    closeSesion: function () {
      localStorage.setItem("current_username", "noUser");
      this.$router.push("/");
    },
    deleteUser:function(){
      
      this.$router.push("/delete");
    }
  },
  created: function () {
    if (localStorage.getItem("current_username") != "noUser") {
      this.username = localStorage.getItem("current_username");
      this.usernameExist = true;
      console.log(this.usernameExist);
      console.log(localStorage.getItem("current_username"));
    } else {
      this.usernameExist = false;
    }
  },
};
</script>

<style>
.mr-1 {
  margin-right: 1rem;
}
.bg-custom-nav {
  background-color: rgba(191, 187, 63, 0.5);
}
</style>