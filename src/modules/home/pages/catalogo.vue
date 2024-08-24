<template>
    <div class="page-container">
      <div>
        <NavBar />
      </div>
      <div class="content">
        <!-- Aquí va el contenido principal de la página -->
      </div>
      <div>
        <Footerr />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import NavBar from '@/shared/components/NavBar.vue';
  import Footerr from '@/shared/components/Footerr.vue';
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1;
  }
  </style>