<script setup lang="ts">
import LeftMenu from '@/components/layout/LeftMenu.vue';
import Head from '@/components/layout/Head.vue';
import Content from './components/layout/Content.vue';
import type { IMenu } from './types/IMenu';

const menuList: IMenu[] = [
  {
    "icon":"",
    "name":"home",
    "targetUrl":"/index"
  },
  {
    "icon":"",
    "name":"postList",
    "targetUrl":"/postList"
  }
]


</script>

<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-2">
        <LeftMenu v-for="menu in menuList" :="menu"></LeftMenu>
      </div>
      <div class="col-10">
        <div class="row">
          <Head></Head>
        </div>
        <div class="row">
          <Content></Content>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
