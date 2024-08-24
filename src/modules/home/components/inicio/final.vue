<template>
  <div class="container-solicitar">
    <br />
    <div class="flex justify-center scroll">
      <h2 class="text-2xl font-bold">Escribenos para solicitar 😉</h2>
    </div>
    <br />
    <br />
    <div class="container-form flex flex-wrap pl-20 pr-20 align-middle justify-items-center">
      <!-- Primera columna con texto -->
      <div class="w-full md:w-1/2 p-8">
        <p class="text-lg scroll">
            👌 Si tienes alguna duda o necesitas ayuda, no dudes en contactarnos.
            Estamos para ayudarte. Al llenar este formulario, podrás solicitar
            tu pregunta de manera rápida y sencilla. Nuestro equipo se pondrá en
            contacto contigo lo antes posible para responder a tus inquietudes.
        </p>
      </div>

      <!-- Segunda columna con formulario -->
      <div class="w-full md:w-1/2 p-4">
        <form>
          <div class="mb-4 scroll">
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
          <div class="mb-4 scroll">
            <br>
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
          <div class="mb-4 scroll">
          <br>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="Pregunta"
            >
              Pregunta:
            </label>
            <textarea
              class="scroll shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Pregunta"
              type="Pregunta"
              placeholder="Pregunta por nuestros productos..." 
              rows="4 "
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
          <p class="text-slate-200">stylerus24@gmail.com</p>
        </section>

        <section
          class="flex flex-col text-center gap-6 pt-8 md:lfex-row md:justify-between md:items-center md:pt-10"
        >
          <div class="flex justify-center gap-4 text-slate-100">
            <a href="https://www.facebook.com/your_facebook_page">
              <button class="Btn">
                <span class="svgContainer">
                  <svg
                    viewBox="0 0 320 512"
                    height="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svgIcon"
                    fill="white"
                  >
                    <path
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                    ></path>
                  </svg>
                </span>
                <span class="BG"></span>
              </button>
            </a>
            <a href="#habilidades">
              <button class="Btn">
              <span class="svgContainer">
                <svg fill="white" class="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </span>
              <span class="BG"></span>
              </button>
            </a>
          </div>

          <div
            class="grid grid-flow-col auto-cols-maz gap-8 justify-center md:flex-row-reverse"
          >
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
  /* box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.949); */
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
.Btn {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  /* overflow: hidden; */
  border-radius: 7px;
  cursor: pointer;
  transition: all .3s;
}

.svgContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(4px);
  letter-spacing: 0.8px;
  border-radius: 10px;
  transition: all .3s;
  border: 1px solid rgba(156, 156, 156, 0.466);
}

.BG {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  z-index: -1;
  border-radius: 9px;
  pointer-events: none;
  transition: all .3s;
}

.Btn:hover .BG {
  transform: rotate(35deg);
  transform-origin: bottom;
}

.Btn:hover .svgContainer {
  background-color: rgba(156, 156, 156, 0.466);
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
