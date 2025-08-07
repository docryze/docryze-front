<template>
    <RouterLink :to="menu.targetUrl">{{ menu.name }}</RouterLink>
</template>

<script setup lang="ts">
import type { IMenu } from '@/types/IMenu';

const menu = defineProps<IMenu>()
</script>

<style scoped></style>