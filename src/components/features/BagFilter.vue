<script setup lang="ts">
import CheckboxFilterDropdown from "@/components/common/CheckboxFilterDropdown.vue";
import { Button } from "@/components/ui/button";
import { ref, watch } from "vue";
import { useMainStore } from "@/stores/useMainStore";

const store = useMainStore();

const terrainOptions = [
  "Flatground",
  "Rail/Ledge",
  "Stair/Gap",
  "Vert/Transition",
  "Manny Pad/Bank",
];

const trickOptions = ["Flip", "Grind", "Grab", "Stall", "Manual"];

const selectedTerrains = ref<string[]>([]);
const selectedTricks = ref<string[]>([]);

watch(selectedTerrains, (newVal) => {
  store.selectedTerrains = [...newVal];
});

watch(selectedTricks, (newVal) => {
  store.selectedTricks = [...newVal];
});

const clearAllFilters = () => {
  selectedTerrains.value = [];
  selectedTricks.value = [];
};
</script>

<template>
  <div>
    <h3 class="text-2xl mb-4 pb-2 border-b border-primary text-center">
      Sort Your Bag
    </h3>

    <div class="flex gap-4">
      <CheckboxFilterDropdown
        label="Terrain"
        :options="terrainOptions"
        v-model="selectedTerrains"
      />
      <CheckboxFilterDropdown
        label="Trick Type"
        :options="trickOptions"
        v-model="selectedTricks"
      />
    </div>

    <div class="flex flex-col gap-2 w-[12rem] mt-4 text-sm text-gray-600">
      <p>
        <strong>Selected Terrain:</strong>
        {{ selectedTerrains.join(", ") || "None" }}
      </p>

      <p>
        <strong>Selected Tick Type:</strong>
        {{ selectedTricks.join(", ") || "None" }}
      </p>

      <Button
        class="hover:cursor-pointer"
        variant="destructive"
        @click="clearAllFilters"
      >
        Clear All
      </Button>
    </div>
  </div>
</template>
