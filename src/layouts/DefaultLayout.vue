<template>
  <div class="app">
    <header>
      <!-- Navbar content goes here -->
      <nav>
        <router-link :to="{name: 'home'}">home</router-link>
        <router-link :to="{name: 'about'}">about</router-link>
      </nav>
    </header>

    <slot></slot>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>