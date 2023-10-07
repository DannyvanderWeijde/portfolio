<template>
  <div class="app">
    <header>
      <nav-bar-component />
    </header>

    <slot></slot>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>
<script setup lang="ts">
  import NavBarComponent from '@/components/navbar/navBarComponent.vue'
</script>