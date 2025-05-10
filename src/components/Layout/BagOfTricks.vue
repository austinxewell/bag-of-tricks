<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import BagFilter from "@/components/features/BagFilter.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center p-4">
    <p class="text-2xl">What Trick You Got?</p>

    <div class="flex justify-center items-center p-4">
      <img
        src="@/assets/bagOfTricks.png"
        alt="Bag of Tricks Icon"
        class="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-auto"
      />

      <BagFilter />
    </div>

    <Button class="text-2xl hover:cursor-pointer" size="lg">
      Pull From Bag!
    </Button>
  </div>
</template>
