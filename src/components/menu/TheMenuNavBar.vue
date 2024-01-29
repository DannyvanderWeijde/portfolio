<template>
  <the-header>
    <template #left>
      <img class="header__logo" src="@/assets/danny-van-der-weijde-logo.svg" alt="logo">
    </template>

    <template #middle>

    </template>

    <template #right class="test">
      <button class="header__menu-button">
        close
      </button>
    </template>
  </the-header>
</template>

<script setup lang="ts">
  import TheHeader from '../../../../unstyled-vue-front-end-framework/unstyled-vue-front-end-framework/components/layout/header/variant-1/TheHeader.vue'
</script>