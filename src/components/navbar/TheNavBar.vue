<template>
  <the-header
    :navbar-items="navbarItems"
    block-class="header"
  >
    <template #left>
      <img class="header__logo" src="@/assets/danny-van-der-weijde-logo.svg" alt="logo">
    </template>

    <template #middle>
      <ul class="header__icon-container">
        <li v-for="icon of icons" class="header__icon">
          <a class="header__link" :href="icon.link" target="_blank">
            <img class="header__icon-image" :src="icon.url" :alt="icon.alt">
          </a>
        </li>
      </ul>
    </template>

    <template #right class="test">
      <button class="header__menu-button">
        menu
      </button>
    </template>
  </the-header>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import TheHeader from '../../../../unstyled-vue-front-end-framework/unstyled-vue-front-end-framework/components/layout/header/variant-1/TheHeader.vue'

  const navbarItems = ref({
    home: 'home',
    about: 'about'
  })

  const icons = ref({
    linkedIn: {
      url: 'src/assets/danny-van-der-weijde-linked-in.svg',
      alt: 'LinkedIn icon with link',
      link: 'https://www.linkedin.com/in/danny-van-der-weijde-a8041822b/'
    },

    instagram: {
      url: 'src/assets/danny-van-der-weijde-instagram.svg',
      alt: 'Instagram icon with link',
      link: 'https://www.instagram.com/'
    },

    twitter: {
      url: 'src/assets/danny-van-der-weijde-twitter.svg',
      alt: 'Twitter icon with link',
      link: 'https://www.twitter.com/'
    },

    mail: {
      url: 'src/assets/danny-van-der-weijde-mail.svg',
      alt: 'Mail icon with link',
      link: 'mailto:test@mail.nl'
    },

    facebook: {
      url: 'src/assets/danny-van-der-weijde-facebook.svg',
      alt: 'Facebook icon with link',
      link: 'https://www.facebook.com/'
    }
  })
</script>