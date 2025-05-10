<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import BagFilter from "@/components/features/BagFilter.vue";
import { useMainStore } from "@/stores/useMainStore";
import DirectionTag from "@/components/common/DirectionTag.vue";
import type { Trick } from "@/types/Tricks";

const store = useMainStore();

const selectedTrick = ref<Trick>({
  name: '',
  direction: 'N/A',
  terrain: [],
  trickType: [],
  difficulty: 1,
});

const getRandomTrick = () => {
  if (!store.bag.length) return;

  const randomIndex = Math.floor(Math.random() * store.bag.length);
  selectedTrick.value = store.bag[randomIndex];
};
</script>

<template>
  <div class="flex flex-col justify-center items-center p-4">
    <p class="text-2xl">What Trick You Got?</p>
    <p
      v-if="selectedTrick.name"
      class="text-2xl font-semibold flex items-center"
    >
      You Got A
      <DirectionTag class="ml-2" :direction="selectedTrick.direction" />
      {{ selectedTrick.name }}
    </p>

    <div class="flex justify-center items-center p-4">
      <img
        src="@/assets/bagOfTricks.png"
        alt="Bag of Tricks Icon"
        class="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-auto"
      />

      <BagFilter />
    </div>

    <Button
      @click="getRandomTrick"
      class="text-2xl hover:cursor-pointer"
      size="lg"
    >
      Pull From Bag!
    </Button>
  </div>
</template>
