<template>
  <div>
    <div class="decoracionNegra">
      <img class="" src="./assets/bg2.png" alt="bg" />
    </div>
    <div class="tonico">
      <img class="" src="https://mybucketgatos.s3.us-east-2.amazonaws.com/laura/R.jpg" alt="tonico" />
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
            class="mt-4 font-bold text-base sm:text-lg lg:text-xl leading-4 text-[#393E46] animate__animated animate__jello text-center  items-center justify-center"
          >
            APROVECHA! LA OFERTA SE ACABARÁ EN
          </p>
        </div>
        <br />
        <div class="sm:mb-4 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-7 sm:py-6 py-7 text-6xl leading-6  text-gray-600 ring-4 ring-gray-900/10 hover:ring-gray-900/20 text-center items-center justify-center"
          >
            {{ tiempoFormateado }}
          </div>
        </div>
        <br />
        <br />
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl scroll"
          >
            Tónico Anticaída Mechudos
          </h1>
          <br />
          <div class="tonicoCelular">
            <img class="" src="./assets/tonico.png" alt="tonico" />
          </div>
          <div class="solicitar">
            <Solicitar
              class="animate__animated animate__jello animate__repeat-2"
            />
          </div>
          <div
            class="precio"
            style="display: flex; justify-content: center; gap: 2rem"
          >
            <div class="scroll">
              <h2
                class="font-bold text-[#6D9886] animate__animated animate__jello"
              >
                $65.000
              </h2>
            </div>
            <del
              class="text-x1 sm:text-2xl md:text-2xl lg:text-2xl font-bold text-gray-900/40 scroll"
              >$80.000</del
            >
          </div>
          <br />
          <div class="solicitarMovil">
            <Solicitar class="scroll" />
          </div>
          <br />
          <div :class="{ 'dark-text': isDark }">
            <p class="mt-6 text-lg leading-8 scroll text">
              Es ideal para hombres y mujeres que tienen problemas con la caída
              del cabello. Su composición es una mezcla de ingredientes
              naturales que nutren, fortalecen y activan el folículo
              piloso. Controla y previene la caída del cabello y estimula su
              crecimiento. Es un producto libre de Alcohol y libre de Minoxidil.
            </p>
          </div>
          <br />
          <div class="scroll publicidad">
            <img
              src="./assets/anticaida.png"
              alt="anticaida"
              class="anticaida scroll"
            />
            <img
              src="./assets/logofusion.png"
              alt="logofuison"
              class="logofusion scroll"
            />
          </div>
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
import { ref, watchEffect, onMounted } from "vue";
import NavBar from "../../../../shared/components/NavBar.vue";
import Solicitar from "./Solicitar.vue";

let isDark = ref(false);

function isDarkColor(color) {
  const rgb = color.replace(/[^0-9,]/g, "").split(",");
  const brightness = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  return brightness < 125;
}

watchEffect(() => {
  const bgColor = window.getComputedStyle(document.body).backgroundColor;
  isDark.value = isDarkColor(bgColor);
});
const tiempoInicial = 22 * 40 * 80;

const tiempoRestante = ref(tiempoInicial);

const formatoDosDigitos = (numero) => (numero < 10 ? `0${numero}` : numero);

const actualizarContador = () => {
  const horas = Math.floor(tiempoRestante.value / 3600);
  const minutos = Math.floor((tiempoRestante.value % 3600) / 60);
  const segundos = tiempoRestante.value % 60;

  tiempoFormateado.value = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;

  tiempoRestante.value--;

  if (tiempoRestante.value < 0) {
    reiniciarContador();
  }
};

const reiniciarContador = () => {
  tiempoRestante.value = tiempoInicial;
};

const tiempoFormateado = ref('');

onMounted(() => {
  setInterval(actualizarContador, 1000);

  actualizarContador();
});
</script>

<style scope>
.text {
  color: var(--text-color);
}

.dark-background {
  --text-color: white;
}

:not(.dark-background) {
  --text-color: #181a17;
}

.dark-text {
  color: white;
}
@keyframes show {
  from {
    opacity: 0;
    scale: 25%;
  }

  to {
    opacity: 1;
    scale: 100%;
  }
}
.decoracionNegra {
  display: flex;
  height: 98%;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
}
.tonico {
  display: flex;
  position: absolute;
  z-index: 1;
  top: 7%;
  right: 3%;
}
.promocion {
  display: flex;
  position: absolute;
  z-index: -1;
  top: 16%;
  right: 40%;
}
.publicidad {
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 1;
  background-color: #6d9886;
  width: 100%;
  height: auto;
  padding: 1rem;
  border: 1px solid #284d3d;
  border-radius: 50px 100px 50px 110px;
  animation: colorChange 2s infinite;
}
@keyframes colorChange {
  0% {
    border-color: #0ef79e;
  }
  25% {
    border-color: #4ebc8c;
  }
  50% {
    border-color: #6d9886;
  }
  75% {
    border-color: #3b9c72;
  }
  100% {
    border-color: #3aaf7c;
  }
}
.anticaida {
  width: 20rem;
  height: 45vh;
}
.publicidad img {
  border-radius: 30px;
}
.logofusion {
  width: 11rem;
  height: 20vh;
  display: flex;
  align-self: center;
}
.promocion img {
  width: 10rem;
}
.solicitar {
  display: flex;
  position: absolute;
  z-index: 999;
  top: 43%;
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
  top: 30%;
  left: 45%;
}
.linea3 {
  display: flex;
  position: absolute;
  z-index: -1;
  top: 40%;
  left: 43%;
}
.precio h2 {
  font-size: 4rem;
}
.precio del {
  font-size: 2rem;
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
  .solicitar {
    display: none;
  }
  .promocion img{
    width: 8rem;
  }
  .promocion {
    display: flex;
    position: absolute;
    z-index: -1;
    top: 65%;
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
    top: 45%;
    left: 2%;
  }
  .linea2 {
    top: 95%;
    left: 65%;
  }
  .linea3 {
    top: 105%;
    left: 14%;
  }
  .precio h2 {
    font-size: 3rem;
  }
  .precio del {
    font-size: 1.5rem;
  }
  .publicidad {
    border-radius: 50px 100px 50px 50px;
  }
  .anticaida {
    width: 70vw;
    height: 45vh;
  }
  .logofusion {
    display: none;
  }
}
</style>
