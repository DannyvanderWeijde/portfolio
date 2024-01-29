<template>
  <div class="app">
    <the-nav-bar />
    <the-menu />

    <slot></slot>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>
<script setup lang="ts">
  import TheMenu from '@/components/menu/TheMenu.vue'
  import TheNavBar from '@/components/navbar/TheNavBar.vue'
</script>