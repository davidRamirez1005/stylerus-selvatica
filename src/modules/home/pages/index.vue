<template>
  <div class="container">
    <div class="inicio">
      <inicio />
    </div>
    <div class="mitad">
      <mitad />
    </div>
    <div class="final">
      <div class="flex items-center justify-center pt-7">
        <div class="w-1/3 bg-gray-100 h-px"></div>
        <div class="mx-4 text-gray-500">
          😸😸
          <i class="fas fa-circle"></i>
        </div>
        <div class="w-1/3 bg-gray-100 h-px"></div>
      </div>
      <final />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import inicio from "../components/inicio/inicio.vue";
import mitad from "../components/inicio/mitad.vue";
import final from "../components/inicio/final.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
}
@media screen and (max-width: 768px) {
  .mitad {
    position: relative;
    top: -6rem;
  }
}
</style>
