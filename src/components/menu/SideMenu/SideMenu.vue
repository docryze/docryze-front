<template>
  <n-menu :options="menuOptions" />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
const menuOptions: MenuOption[] = [
  {
    key: 'Home',
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/tool',
            // query: {
            //   lang: 'zh-CN'
            // }
          },
        },
        { default: () => '回家' },
      ),
  },
]
</script>

<style scoped></style>
