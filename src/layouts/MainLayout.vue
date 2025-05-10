<!-- src/layout/MainLayout.vue -->
<script setup lang="ts">
import BagOfTricks from "@/components/BagOfTricks.vue";
import AppHeader from "@/components/AppHeader.vue";
import { useMainStore } from "@/stores/useMainStore";

const store = useMainStore();

store.loadBagFromLocalStorage();
</script>

<template>
    <AppHeader />
    <BagOfTricks />
</template>

<style scoped></style>