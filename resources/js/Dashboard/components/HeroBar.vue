<script setup>
import { mdiThemeLightDark } from '@mdi/js'
import { useMainStore } from '@/Dashboard/stores/main'
import { computed } from 'vue'
import Level from '@/Dashboard/components/Level.vue'
import JbButton from '@/Dashboard/components/JbButton.vue'

const mainStore = useMainStore()

const lightBorderStyle = computed(() => mainStore.lightBorderStyle)

const darkMode = computed(() => mainStore.darkMode)

const darkModeToggle = () => {
  mainStore.setDarkMode()
}
</script>

<template>
  <section
    :class="lightBorderStyle"
    class="bg-white border-t border-b p-6 dark:bg-gray-900/70 dark:border-gray-900 dark:text-white"
  >
    <level>
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
    </level>
  </section>
</template>
