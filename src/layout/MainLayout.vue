<!-- src/layout/MainLayout.vue -->
<script setup lang="ts">
import BagOfTricks from "../components/layout/BagOfTricks.vue";
import AppHeader from "../components/layout/AppHeader.vue";
import { useMainStore } from "@/stores/useMainStore";

const store = useMainStore();

store.loadBagFromLocalStorage();
</script>

<template>
    <AppHeader />
    <BagOfTricks />
</template>

<style scoped></style>