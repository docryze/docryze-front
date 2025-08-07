<template>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ subTitle}}</h6>
        <p class="card-text">{{ description }}</p>
        <a v-for="tag in tagList">{{ tag }}</a>
    </div>
    </div>
</template>

<script setup lang="ts">
import type { ICard } from '@/types/ICard';
const card = defineProps<ICard>()
</script>

<style scoped></style>