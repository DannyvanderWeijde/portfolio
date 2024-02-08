<template>
  <the-header>
    <template #left>
      <img class="header__logo" src="@/assets/danny-van-der-weijde-logo.svg" alt="logo">
    </template>

    <template #middle>
      <div class="header__language-switch">
        <button class="header__language-button header__language-button--active">
          nl
        </button>
        <span class="header__seperator">|</span>
        <button class="header__language-button">
          en
        </button>
      </div>
    </template>

    <template #right class="test">
      <button class="header__menu-button" @click="store.showMenu = false">
        close
      </button>
    </template>
  </the-header>
</template>

<script setup lang="ts">
  import TheHeader from '../../../../unstyled-vue-front-end-framework/unstyled-vue-front-end-framework/components/layout/header/variant-1/TheHeader.vue'
  import { globalStore } from '@/stores/globalStore.js'

  const store = globalStore()
</script>