<template>
  <ul>
    <li>
      <router-link :to="{name: 'home'}">home</router-link>
      <router-link :to="{name: 'about'}">about</router-link>
    </li>
  </ul>
  <router-view/>
</template>
<script setup lang="ts">
</script>