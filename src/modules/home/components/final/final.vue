<template>
  <div class="container">
    <br />
    <div class="flex justify-center">
      <h2 class="text-2xl font-bold">Escribenos para solicitar 😉</h2>
    </div>
    <br />
    <br />
    <div class="container-form flex flex-wrap pl-20 pr-20 align-middle justify-items-center">
      <!-- Primera columna con texto -->
      <div class="w-full md:w-1/2 p-4">
        <p class="text-lg">
          Si tienes alguna duda o necesitas ayuda, no dudes en contactarnos.
          Estamos para ayudarte.
        </p>
      </div>

      <!-- Segunda columna con formulario -->
      <div class="w-full md:w-1/2 p-4">
        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Correo Electrónico:
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo Electrónico"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="nombre"
            >
              Nombre:
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="nombre"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="Pregunta"
            >
              Pregunta:
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Pregunta"
              type="Pregunta"
              placeholder="Pregunta" 
              rows="4"
            ></textarea>
          </div>
          <br>
          <div class="flex items-center justify-center">
            <p class="buttonData text-white p-2 scroll">SOLICITAR</p>
          </div>
        </form>
      </div>
    </div>
    <br>
    <br>
    <footer class="container-section">
      <div class="py-20">
        <section
          class="flex flex-col text-center gap-6 border-b-2 border-slate-100 pb-8 md:lfex-row md:items-center md:pb-10"
        >
          <p class="text-slate-200">stylerus-24@gmail.com</p>
        </section>

        <section
          class="flex flex-col text-center gap-6 pt-8 md:lfex-row md:justify-between md:items-center md:pt-10"
        >
          <div class="flex justify-center gap-4 text-slate-100">
            <a href="#">facebook</a>
            <a href="#habilidades">instagram</a>
            <a href="#proyectos">tik tok</a>
          </div>

          <div
            class="grid grid-flow-col auto-cols-maz gap-8 justify-center md:flex-row-reverse"
          >
            <!-- <a href="#">
              <img src="./face.svg" class="w-7" alt="" />
            </a>
            <a href="">
              <img src="./twiter.svg" class="w-7" alt="" />
            </a>
            <a href="#">
              <img src="./intagram.svg" class="w-7" alt="" />
            </a> -->
          </div>
        </section>
      </div>
    </footer>
  </div>
  <div class="footerr">
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../../../../shared/components/Footerr.vue";
</script>

<style scoped>
section {
  padding-left: 5rem;
  padding-right: 5rem;
}
.container-two {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2rem;
}
input[type="email"] {
  width: 100%;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}
.input-espacio {
  margin-bottom: 20px;
}
.container-section{
  position: relative;
  background-image: none;
  background-color: #686c75;
  padding-top: 5rem;
  padding-bottom: 3rem;
  padding-right: 0.8rem;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.949);
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
}
.buttonData {
  user-select: none;
  cursor: pointer;
  border: none;
  outline: none;
  background: rgb(120, 202, 189);
  background: linear-gradient(90deg, #78cabd 0%, #40b3a2 50%, #78cabd 100%);
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #40b3a2;
}

.buttonData:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}
@media (max-width: 800px) {
  section {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
  .container-form {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
