<template>
  <div class="envioGratis pb-5 pt-10 bg-sky-400">
    <div>
      <h3 class="text-center text-4xl"><strong>ENVÍO GRATIS <br> EN TODA COLOMBIA</strong></h3>
      <p class="text-white text-center text-2xl pt-7 pb-5 "><strong>PAGAS CONTRAENTREGA <br> SÓLO DESPUES DE TENER <br>
          EL PRODUCTO EN TUS MANOS</strong></p>
    </div>
    <div>
      <img class="imageEnvio" src="./assets/envioGratis.png" alt="...">
    </div>
  </div>
  <div class="firstImage flex justify-center pt-14 pb-14">
    <img class="" src="./assets/TONICOMECHUDOS.webp" alt="...">
  </div>
  <div class="fortalezas grid">
    <div class="fortalezasLeft flex flex-col justify-center align-center gap-20 pl-10">
      <div>
        <img src="./assets/imageAchivements.png" alt="...">
      </div>
      <div class="flex flex-col gap-14 text-white text-4xl">
        <p>✅ Fortalece los folículos pilosos.</p>
        <p>✅ Revitaliza el cuero cabelludo.</p>
        <p>✅ Promueve el crecimiento.</p>
        <p>✅ Disminuye la caída.</p>
      </div>
    </div>
    <div class="fortalezasRight">
      <img src="./assets/image11.png" alt="...">
    </div>
  </div>
  <div class="imagenCalvo flex justify-center py-14">
    <img src="./assets/tónico3.png" alt="">
  </div>
  <div class="dataMid flex flex-col justify-center items-center text-center gap-16">
    <div class="flex flex-col items-center gap-5">
      <p class="text-2xl">RESULTADOS <strong class="text-red-600"> IMPRESIONANTES </strong> EN POCO TIEMPO </p>
      <img src="./assets/starts.png" alt="...">
    </div>
    <div class="flex flex-col gap-5 flex flex-col items-center">
      <p class="text-red-600 text-2xl"><strong> ¡¡ENVÍO GRATIS Y PAGAS AL RECIBIR!! </strong></p>
      <p class="buttonData text-white p-2">SOLICITAR</p>
    </div>
  </div>  
</template>

<script setup></script>

<style scoped>
h1 {
  color: rgb(144, 0, 255);
}

.envioGratis {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.imageEnvio {
  width: 30rem;
}

.firstImage img {
  width: 30%;
}

.fortalezas {
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}

.fortalezasLeft {
  background-image: url(./assets/bg2.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.fortalezasLeft img {
  width: 60%;
}

.fortalezasRight img {
  width: 100%;
}

.imagenCalvo img {
  width: 30%;
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
</style>