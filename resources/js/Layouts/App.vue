<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/Dashboard/stores/main'
import menu from '@/Dashboard/menu.js'
import NavBar from '@/Dashboard/components/NavBar.vue'
import AsideMenu from '@/Dashboard/components/AsideMenu.vue'
import FooterBar from '@/Dashboard/components/FooterBar.vue'
import Overlay from '@/Dashboard/components/Overlay.vue'

const mainStore = useMainStore()

mainStore.fullScreenToggle(false)

const isAsideLgActive = computed(() => mainStore.isAsideLgActive)

const overlayClick = () => {
  mainStore.asideLgToggle(false)
}
</script>

<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <slot />
  <footer-bar />
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>
