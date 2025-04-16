<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "@/stores/useMainStore";
import { Button } from "@/components/ui/button";
import DirectionTag from "@/components/common/DirectionTag.vue";

const store = useMainStore();

const sortedBag = computed(() =>
  [...store.bag].sort((a, b) => a.name.localeCompare(b.name))
);

const handleDelete = (index: number) => {
  store.removeFromBag(index);
};
</script>

<template>
  <ul>
    <li
      v-for="(trick, index) in sortedBag"
      :key="index"
      class="flex items-center justify-between mb-2 px-4 py-2 odd:bg-gray-100 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900"
    >
      <p>
        <DirectionTag :direction="trick.direction" />
        {{ trick.name }}
      </p>
      <Button
        @click="handleDelete(index)"
        class="hover:cursor-pointer"
        size="sm"
        variant="destructive"
      >
        Delete
      </Button>
    </li>
  </ul>
</template>
