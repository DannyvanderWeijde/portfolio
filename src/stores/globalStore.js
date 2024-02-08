import { defineStore } from 'pinia'

export const globalStore = defineStore('globalStore', {
  state () {
    return {
      showMenu: false
    }
  }
})