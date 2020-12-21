<template>
  <div id="Home">
    <Navbar />
    <div
      class="position-relative overflow-hidden p-3 p-md-5 text-center bg-custom"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">¡Ahorra con nosotros!</h1>
        <p class="lead fw-normal">
          Estamos dispuestos a ayudarte. Nuestro mayor interes, son nuestros
          clientes.
        </p>
        <a class="btn btn-success" href="/signin">Unete ahora</a>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div
        class="product-device product-device-2 shadow-sm d-none d-md-block"
      ></div>
    </div>
    <div class="coin-feature">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Piensa en tu futuro
          </h2>
          <p class="lead">
            Nuestro modelo funcional de prevision financiera, te permitira ajustar tus gastos habituales para evitar un peligro economico, a tan solo unos clicks de ahorrarte dolores de cabeza.
          </p>
        </div>
        <div class="col-md-5">
          <div class="mycontent-rigth">
            <img src="../assets/icon.png" class="coin" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  // data:function(){
  //   return{
  //     username: "none"
  //   }
  // },
  // created: function(){
  //   this.username = this.$routeparams.username
  // }
};
</script>

<style>
.bg-custom {
  background-image: url("../assets/headfinances2.jpg");
  background-size: 100%;
  background-position: center 42%;
}

.coin {
  width: 60%;
}

.coin-feature {
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.mycontent-rigth {
  /* border-left: 1px dashed rgba(191,187,63,1); */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>