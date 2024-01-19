<template>
  <div class="app">
    <nav-bar-component />

    <slot></slot>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>
<script setup lang="ts">
  import NavBarComponent from '@/components/navbar/TheNavBar.vue'
</script>