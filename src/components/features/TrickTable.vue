<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/useMainStore";
import DirectionTag from "@/components/common/DirectionTag.vue";

const store = useMainStore();
const sortedBag = computed(() =>
  [...store.bag].sort((a, b) => a.name.localeCompare(b.name))
);

const renderStars = (difficulty: number): string[] => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= difficulty ? "★" : "☆");
  }
  return stars;
};
</script>

<template>
  <div class="overflow-x-auto">
    <table
      class="min-w-full table-auto border-collapse border border-gray-200 dark:border-gray-700"
    >
      <thead class="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="px-4 py-2 text-left border-r">Name</th>
          <th class="px-4 py-2 text-left border-r">Terrain(s)</th>
          <th class="px-4 py-2 text-left border-r">Trick Type(s)</th>
          <th class="px-4 py-2 text-left">Difficulty</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="trick in sortedBag"
          :key="trick.id || trick.name"
          class="border-t border-gray-200 dark:border-gray-700"
        >
          <td class="px-4 py-2 border-r">
            <DirectionTag :direction="trick.direction" />
            {{ trick.name }}
          </td>
          <td class="px-4 py-2 border-r">{{ trick.terrain.join(", ") }}</td>
          <td class="px-4 py-2 border-r">{{ trick.trickType.join(", ") }}</td>
          <td class="px-4 py-2">
            <span class="text-yellow-500 text-lg">
              <span
                v-for="(star, index) in renderStars(trick.difficulty)"
                :key="index"
              >
                {{ star }}
              </span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
