<template>
  <div class="container">
    <div class="inicio">
      <inicio />
    </div>
    <div class="mitad">
      <mitad />
    </div>
    <div class="final">
      <final />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import inicio from "../components/inicio/inicio.vue";
import mitad from "../components/mitad/mitad.vue";
import final from "../components/final/final.vue";
import Footer from "../../../shared/components/Footerr.vue";
</script>

<style scoped>
.container {
  display: flex;  
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
}
@media screen and (max-width: 768px)
{
  .mitad{
    position: relative;
    top: -6rem;
  }
}

</style>
