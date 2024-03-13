<template>
  <div class="envioGratis pb-5 pt-10 bg-sky-400">
    <div>
      <h3 class="text-center scroll text-4xl"><strong>ENVÍO GRATIS <br> EN TODA COLOMBIA</strong></h3>
      <p class="text-white scroll text-center text-2xl pt-7 pb-5 "><strong>PAGAS CONTRAENTREGA <br> SÓLO DESPUES DE TENER <br>
          EL PRODUCTO EN TUS MANOS</strong></p>|
    </div>
    <div class="imageEnvio scroll">
      <img class="imageEnvio" src="./assets/envioGratis.png" alt="...">
    </div>
  </div>
  <div class="firstImage scroll flex justify-center pt-14 pb-14">
    <img class="" src="./assets/TONICOMECHUDOS.webp" alt="...">
  </div>
  <div class="fortalezas  grid">
    <div class="fortalezasLeft flex flex-col justify-center align-center gap-20 pl-10">
      <div class="creditos">
        <img class="scroll" src="./assets/imageAchivements.png" alt="...">
      </div>
      <div class="texto flex flex-col gap-14 text-white text-4xl">
        <p class="scroll">✅ Fortalece los folículos pilosos.</p>
        <p class="scroll">✅ Revitaliza el cuero cabelludo.</p>
        <p class="scroll">✅ Promueve el crecimiento.</p>
        <p class="scroll">✅ Disminuye la caída.</p>
      </div>
    </div>
    <div class="fortalezasRight scroll">
      <img src="./assets/image11.png" alt="...">
    </div>
  </div>
  <div class="imagenCalvo scroll flex justify-center py-14">
    <img src="./assets/tónico3.png" alt="">
  </div>
  <div class="dataMid flex flex-col justify-center items-center text-center gap-16">
    <div class="flex flex-col items-center gap-5 ">
      <p class="text-2xl scroll">RESULTADOS <strong class="text-red-600"> IMPRESIONANTES </strong> EN POCO TIEMPO </p>
      <img class="scroll" src="./assets/starts.png" alt="...">
    </div>
    <div class="flex flex-col gap-5 flex flex-col items-center">
      <p class="text-red-600 text-2xl scroll"><strong> ¡¡ENVÍO GRATIS Y PAGAS AL RECIBIR!! </strong></p>
      <p class="buttonData text-white p-2 scroll">SOLICITAR</p>
    </div>
  </div>  
</template>

<script setup></script>

<style scoped>
.scroll {
  view-timeline-name: --image;
  view-timeline-axis: block;

  animation-timeline: --image;
  animation-name: show;

  animation-range: entry 25% cover 30%;
  animation-fill-mode: both;
}
h1 {
  color: rgb(144, 0, 255);
}

.envioGratis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 100%;
}

.imageEnvio {
  width: 30rem;
}

.firstImage img {
  width: 25rem;
  border-radius: 25px;
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
  border-radius: 25px;
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
@media screen and (max-width: 868px) {
  .envioGratis {
    grid-template-columns: 1fr;
  }

  .imageEnvio {
    width: 100%;
  }

  .firstImage img {
    width: 70%;
  }

  .fortalezas {
    grid-template-columns: 1fr;
  }
  .creditos{
    display: flex;
    justify-content: center;
  }
  .fortalezasLeft{
    position: relative;
    background-image: none;
    background-color: #393E46;
    padding-top: 5rem;
    padding-bottom: 3rem;
    padding-right: 0.8rem;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 7rem;
    border-bottom-left-radius: 7rem;
  }

  .fortalezasLeft::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(to bottom, #BBBBBB, transparent);
  }

  .texto{
    font-size: 1.4rem;
  }

  .fortalezasLeft img {
    width: 70%;
  }

  .fortalezasRight img {
    width: 100%;
  }

  .imagenCalvo img {
    width: 100%;
  }
}
</style>