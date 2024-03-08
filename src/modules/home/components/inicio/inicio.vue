<template>
  <div>
    <div class="decoracionNegra">
      <img class="" src="./assets/bg2.png" alt="bg" />
    </div>
    <div class="tonico">
      <img class="" src="./assets/tonico.png" alt="tonico" />
    </div>
    <div class="promocion">
      <img class="" src="./assets/promocion2.png" alt="promocion" />
    </div>
    <div class="decoracionNegraCelular">
      <img class="" src="./assets/bgCelular.png" alt="bgcelular" />
    </div>
    <div>
      <NavBar />
    </div>
    <div class="linea1">
      <img class="" src="./assets/linea1.png" alt="linea1" />
    </div>
    <div class="linea2">
      <img class="" src="./assets/linea2.png" alt="linea2" />
    </div>
    <div class="linea3">
      <img class="" src="./assets/linea3.png" alt="linea3" />
    </div>
    <div class="relative isolate px-6 pt-14 lg:px-10">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6D9886] to-[#6D9886] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-38 lg:py-25">
        <div class="sm:mb-4 sm:flex sm:justify-center">
          <p
            class="mt-4 font-bold text-base sm:text-lg lg:text-xl leading-4 text-[#393E46]"
          >
            APROVECHA! LA OFERTA SE ACABARÁ EN
          </p>
        </div>
        <br />
        <div class="sm:mb-4 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 sm:py-4 py-3 text-sm leading-6 text-gray-600 ring-4 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Announcing our next round of funding.
          </div>
        </div>
        <br />
        <br />
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Tónico Anticaída Mechudos
          </h1>
          <br />
          <div class="tonicoCelular">
            <img class="" src="./assets/tonico.png" alt="tonico" />
          </div>
          <div class="solicitar">
            <Solicitar />
          </div>
          <div
            class="precio"
            style="display: flex; justify-content: center; gap: 2rem"
          >
            <h2 class="font-bold text-[#6D9886]">$50.000</h2>
            <del
              class="text-x1 sm:text-2xl md:text-2xl lg:text-2xl font-bold text-gray-900/40"
              >$70.000</del
            >
          </div>
          <br />
          <div class="solicitarMovil">
            <Solicitar />
          </div>
          <br>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Es ideal para hombres y mujeres que tienen problemas con la caída
            del cabello. Su composición es una mezcla de ingredientes naturales
            que nutren, fortalecen y activan el folículo piloso. Controla y
            previene la caída del cabello y estimula su crecimiento. Es un
            producto libre de Alcohol y libre de Minoxidil.
          </p>
          <br />
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6D9886] to-[#6D9886] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "./NavBar.vue";
import Solicitar from "./Solicitar.vue";
</script>

<style scope>
.decoracionNegra {
  display: flex;
  height: 70%;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
}
.tonico {
  display: flex;
  position: absolute;
  z-index: 1;
  top: 10%;
  right: 3%;
}
.promocion {
  display: flex;
  position: absolute;
  z-index: 1;
  top: 16%;
  right: 38%;
}
.promocion img {
  width: 10rem;
}
.solicitar {
  display: flex;
  position: absolute;
  z-index: 999;
  top: 70%;
  right: 10%;
}
.solicitarMovil {
  display: none;
}
.tonicoCelular {
  display: none;
}
.tonico img {
  width: 24rem;
}
.decoracionNegraCelular {
  display: none;
}
.linea1 {
  display: flex;
  position: absolute;
  z-index: -1;
  top: 30%;
  left: 5%;
}
.linea2 {
  display: flex;
  position: absolute;
  z-index: -1;
  top: 40%;
  left: 48%;
}
.linea3 {
  display: flex;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 48%;
}
.precio h2 {
  font-size: 3rem;
}
@media (max-width: 800px) {
  .decoracionNegra {
    display: none;
  }
  .decoracionNegraCelular {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 67%;
  }
  .solicitar{
    display: none;
  }
  .promocion {
    display: flex;
    position: absolute;
    z-index: -1;
    top: 22%;
    right: 4%;
  }
  .tonico {
    display: none;
  }
  .tonicoCelular {
    display: flex;
    z-index: 1;
  }
  .solicitarMovil {
    display: block;
  }
  .linea1 {
    top: 25%;
    left: 2%;
  }
  .linea2 {
    top: 30%;
    left: 55%;
  }
  .linea3 {
    top: 60%;
    left: 74%;
  }
  .precio h2 {
    font-size: 2.5rem;
  }
}
</style>
