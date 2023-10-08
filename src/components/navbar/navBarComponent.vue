<template>
  <nav-bar-component
    :navbar-items="navbarItems"
  >
    <template #left>left</template>
    <template #middle>middle</template>
    <template #right>right</template>
  </nav-bar-component>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NavBarComponent from '../../../../unstyled-vue-front-end-framework/unstyled-vue-front-end-framework/components/layout/navbar/variant-1/navBarComponent.vue'

  const navbarItems = ref({
    home: 'home',
    about: 'about'
  })
</script>