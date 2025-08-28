<template>
  <n-grid :cols="8" layout-shift-disabled>
    <n-gi :span="1">
      <SideMenu></SideMenu>
    </n-gi>
    <n-gi>
      <router-view></router-view>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import SideMenu from '@/components/menu/SideMenu'
</script>
