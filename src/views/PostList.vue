<template>
    <div v-for="post in postList">
        <Card :="post"></Card>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/widget/Card.vue';
import type { ICard } from '@/types/ICard';

    const postList: ICard[] = [
        {
            "title": "title1",
            "subTitle": "subTitle1",
            "description": "description1",
            "tagList": ["tag1", "tag2"]
        },
        {
            "title": "title2",
            "subTitle": "subTitle2",
            "description": "description1",
            "tagList": ["tag1", "tag2"]
        }
    ]
</script>

<style scoped></style>