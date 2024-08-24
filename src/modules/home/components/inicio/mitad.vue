<template>
  <div class="envioGratis pb-5 pt-10">
    <div class="anuncio">
      <h3 class="text-center scroll text-5xl"><strong>ENVÍO GRATIS <br> EN TODA COLOMBIA</strong></h3>
      <p class="text-white scroll text-center text-4xl pt-8 pb-4 "><strong>PAGAS A CONTRA-ENTREGA <br> SÓLO DESPUES DE TENER <br>
          EL PRODUCTO EN TUS MANOS</strong></p>
      <img class="camion scroll" src="../../../../assets/camion.png" alt="...">
    </div>
    <div class="imageEnvio scroll">
      <img class="imageEnvio" src="../../../../assets/envioGratis.png" alt="...">
    </div>
  </div>
  <div class="wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b0adad" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,234.7C672,213,768,171,864,170.7C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  </div>
  <div class="firstImage scroll flex justify-center pt-14 pb-14 gap-7">
    <img class="" src="../../../../assets/TONICOMECHUDOS.webp" alt="...">
    <img class="" src="../../../../assets/tonico.png" alt="...">
  </div>
  <div class="fortalezas  grid">
    <div class="fortalezasLeft flex flex-col justify-center align-center gap-20 pl-10">
      <div class="creditos">
        <img class="scroll" src="../../../../assets/imageAchivements.png" alt="...">
      </div>
      <div class="texto flex flex-col gap-14 text-white text-4xl">
        <p class="scroll">✅ Fortalece los folículos pilosos.</p>
        <p class="scroll">✅ Revitaliza el cuero cabelludo.</p>
        <p class="scroll">✅ Promueve el crecimiento.</p>
        <p class="scroll">✅ Disminuye la caída.</p>
      </div>
    </div>
    <div class="fortalezasRight scroll">
      <img src="../../../../assets/image11.png" alt="...">
    </div>
  </div>
  <div class="imagenCalvo scroll flex justify-center py-14">
    <img src="../../../../assets/tónico3.png" alt="...">
  </div>
  <div class="dataMid flex flex-col justify-center items-center text-center gap-16">
    <div class="flex flex-col items-center gap-5 ">
      <p class="text-2xl scroll">RESULTADOS <strong class="text-red-600"> IMPRESIONANTES </strong> EN POCO TIEMPO </p>
      <img class="scroll" src="../../../../assets/starts.png" alt="...">
    </div>
    <div class="flex flex-col gap-5 items-center">
      <p class="text-red-600 text-2xl scroll"><strong> ¡¡ENVÍO GRATIS Y PAGAS AL RECIBIR!! </strong></p>
    </div>
  </div>  
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>

h1 {
  color: rgb(144, 0, 255);
}
.anuncio{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 25px;
}
.envioGratis {
  display: grid;
  position: relative;
  bottom: 6rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 100%;
  background-color: #b0adad;
  align-items: center;
}
.camion{
  width: 10rem;
  display: flex;
  justify-self: center;
  align-self: center;
}
.imageEnvio {
  width: 30rem;
}
.wave{
  display: flex;
  position: relative;
  bottom: 12rem;
  z-index: -1;
}
.firstImage{
  display: flex;
  position: relative;
  bottom: 13rem;

}

.firstImage img {
  width: 25rem;
  border-radius: 25px;
}

.fortalezas {
  position: relative;
  bottom: 11rem;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}

.fortalezasLeft {
  background-image: url(../../../../assets/bg2.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.fortalezasLeft img {
  width: 60%;
}

.fortalezasRight img {
  width: 100%;
}
.imagenCalvo {
  position: relative;
  bottom: 10rem;
}

.imagenCalvo img {
  width: 30%;
  border-radius: 25px;
}
.dataMid {
  position: relative;
  bottom: 9rem;
} 

@media screen and (max-width: 868px) {
  .envioGratis {
    bottom: 1rem;
    grid-template-columns: 1fr;
  }
  .anuncio h3{
    font-size: 2rem;
  }
  .anuncio p{
    font-size: 1.4rem;
  }
  .camion {
    width: 4rem;
  }
  .wave {
    bottom: 2rem;
  }

  .imageEnvio {
    width: 14rem;
    display: flex;
    justify-self: center;
  }

  .firstImage {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-left: 5rem;
    padding-right: 1rem;
    bottom: 3rem;
  }
  .firstImage img {
    width: 70%;
  }

  .fortalezas {
    bottom: 3rem;
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
    box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.2);
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
  .imagenCalvo{
    bottom: 1rem;
  }
  .texto{
    display: flex;
    position: relative;
    top: -10%;
    font-size: 1.4rem;
    row-gap: 1.2rem;
  }

  .fortalezasLeft img {
    width: 70%;
  }

  .fortalezasRight img {
    width: 100%;
  }

  .imagenCalvo img {
    width: 95%;
  }
  .dataMid{
    top: 1rem;
  }
}
</style>