<script setup lang="ts">
import AppNavigation from "@/components/AppNavigation.vue";
</script>

<template>
  <header
    class="flex justify-between bg-accent text-accent-foreground p-4 border-b border-zinc-900"
  >
    <div class="w-full text-center">
      <h1 class="text-5xl mb-2 font-extrabold">Bag Of Tricks!</h1>
      <h2 class="text-2xl font-medium">Whats In Your Bag?</h2>
    </div>

    <AppNavigation />
  </header>
</template>
