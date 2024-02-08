<template>
  <the-menu :class="['menu', {'menu--show': store.showMenu}]">
    <template #header>
      <the-menu-nav-bar></the-menu-nav-bar>
    </template>
    <template #body>

    </template>
  </the-menu>
</template>

<script setup lang="ts">
  import TheMenuNavBar from '@/components/menu/TheMenuNavBar.vue'
  import TheMenu from '../../../../unstyled-vue-front-end-framework/unstyled-vue-front-end-framework/components/layout/menu/variant-1/TheMenu.vue'
  import { globalStore } from '@/stores/globalStore.js'

  const store = globalStore()
</script>