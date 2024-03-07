<template>
  <div>
    <div class="header">
      <navbar />
    </div>
    <div class="inicio">
      <inicio />
    </div>
    <div class="mitad">
      <mitad />
    </div>
    <div class="final">
      <final />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import inicio from "../components/inicio/inicio.vue";
import mitad from "../components/mitad/mitad.vue";
import final from "../components/final/final.vue";
import navbar from "../../../shared/components/navBar.vue";
import Footer from "../../../shared/components/Footerr.vue";
</script>

<style scoped></style>
