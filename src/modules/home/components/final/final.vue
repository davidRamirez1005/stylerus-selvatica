<template>
  <div class="container">
    <section
      class="py-20 grid gap-12 md:grid-flow-col auto-cols-fr items-center"
    >
<div class="container-two">
  <div>
        <h2 class="text-3xl font-bold">
          Dame tyu coreo y te contactare a la brevedad
        </h2>
        <br>
        <p class="font-light text-slate-600 text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          fugit qui voluptas sapiente libero <br/>aliquid corporis porro odit eos
          blanditiis.
        </p>
      </div>

  <div style="">
    <input
      type="email"
      placeholder="hola@hola.com"
      class="border border-slate-900 p-2 w-90 rounded-lg"
      style="margin-bottom: 10px;"
    />
    <input
      type="submit"
      value="¡Contactame!"
      class="bg-[#6D9886] text-white py-4 px-10 rounded-lg"
    />
  </div>

</div>
    </section>

    <footer class="bg-[#686c75]">
      <div class="py-20">
        <section
          class="flex flex-col text-center gap-6 border-b-2 border-slate-100 pb-8 md:lfex-row  md:items-center md:pb-10"
        >
          <h2 class="texte-3xl text-slate-900 font-extrabold">Loanding.</h2>
          <p class="text-slate-200">Micorreo@gmail.com</p>
        </section>

        <section
          class="flex flex-col text-center gap-6 pt-8 md:lfex-row md:justify-between md:items-center md:pt-10"
        >
          <div class="flex justify-center gap-4 text-slate-100">
            <a href="#">Inicio</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#proyectos">Proyectos</a>
          </div>

          <div
            class="grid grid-flow-col auto-cols-maz gap-8 justify-center md:flex-row-reverse"
          >
            <a href="#">
              <img src="./face.svg" class="w-7" alt="" />
            </a>
            <a href="">
              <img src="./twiter.svg" class="w-7" alt="" />
            </a>
            <a href="#">
              <img src="./intagram.svg" class="w-7" alt="" />
            </a>
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
@media (max-width: 768px) {
  section {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
  .container-two {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
