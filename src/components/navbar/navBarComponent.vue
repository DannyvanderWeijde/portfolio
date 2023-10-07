<template>
  <nav-bar-component
    :navbar-items="navbarItems"
  ></nav-bar-component>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NavBarComponent from '../../../../unstyled-vue-front-end-framework/unstyled-vue-front-end-framework/components/layout/navbar/navBarComponent.vue'

  const navbarItems = ref({
    home: 'home',
    about: 'about'
  })
</script>