<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useMainStore } from "@/stores/useMainStore";
import DirectionTag from "@/components/common/DirectionTag.vue";

const store = useMainStore();
// const sortedBag = computed(() =>
//   [...store.bag].sort((a, b) => a.name.localeCompare(b.name))
// );
let sortedBag = ref([...store.bag]);

const sortDirection = ref<"asc" | "desc">("asc");

const toggleSortDirection = () => {
  sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";

  console.log("Before sorting:", [...store.bag]);

  // Create a copy of the array, sort it, and assign the result back to sortedBag
  const sorted = [...store.bag].sort((a, b) => {
    const result = a.name.localeCompare(b.name);
    return sortDirection.value === "asc" ? result : -result;
  });

  // Log the sorted array to ensure no items are being added
  console.log("Sorted:", sorted);

  // Update sortedBag with the sorted array
  sortedBag.value = sorted;
};

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
          <th class="px-4 py-2 text-left border-r">
            <div class="flex items-center justify-between w-full">
              <span>Name</span>
              <Icon
                icon="lucide:arrow-up-down"
                class="hover:cursor-pointer ml-2"
                @click="toggleSortDirection"
              />
            </div>
          </th>
          <th class="px-4 py-2 text-left border-r">Terrain(s)</th>
          <th class="px-4 py-2 text-left border-r">Trick Type(s)</th>
          <th class="px-4 py-2 text-left">Difficulty</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="trick in sortedBag"
          :key="trick.name"
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
