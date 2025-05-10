<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "@/stores/useMainStore";
import type { Trick, Terrain, TrickType, TrickDirection } from "@/types/Tricks";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/composables/useToast";

const { showError } = useToast();
const store = useMainStore();

// Form fields
const trickName = ref<string>("");
const selectedTerrains = ref<Terrain[]>([]);
const selectedTypes = ref<TrickType[]>([]);
const difficulty = ref<1 | 2 | 3 | 4 | 5>(1);
const selectedDirection = ref<TrickDirection>("N/A");

// Validation
const errors = ref({
  trickName: false,
  terrains: false,
  trickTypes: false,
  difficulty: false,
  direction: false,
});

const terrainOptions = store.defaultTerrains as Terrain[];
const trickTypeOptions = store.defaultTrickTypes as TrickType[];

const resetForm = () => {
  trickName.value = "";
  selectedTerrains.value = [];
  selectedTypes.value = [];
  difficulty.value = 1;
  selectedDirection.value = "N/A";
};

const validateForm = (): boolean => {
  errors.value = {
    trickName: !trickName.value,
    terrains: selectedTerrains.value.length === 0,
    trickTypes: selectedTypes.value.length === 0,
    difficulty: difficulty.value < 1 || difficulty.value > 5,
    direction: !selectedDirection.value,
  };

  return !Object.values(errors.value).includes(true);
};

const submitTrick = () => {
  if (!validateForm()) {
    showError("Please fill out all required fields.");
    return;
  }

  const newTrick: Trick = {
    name: trickName.value,
    direction: selectedDirection.value,
    terrain: selectedTerrains.value,
    trickType: selectedTypes.value,
    difficulty: difficulty.value,
  };

  store.addToBag(newTrick);
  resetForm();
};
</script>

<template>
  <form @submit.prevent="submitTrick" class="flex flex-col gap-4">
    <!-- Trick Name -->
    <div>
      <input
        v-model="trickName"
        type="text"
        placeholder="Trick Name"
        class="p-2 w-full border rounded"
        :class="{ 'border-red-500': errors.trickName }"
      />
      <span v-if="errors.trickName" class="text-red-500 text-sm">Trick name is required</span>
    </div>

    <!-- Direction -->
    <div>
      <p class="font-semibold mb-2">Direction:</p>
      <div class="flex gap-2">
        <Button
          v-for="option in ['Front Side', 'Back Side', 'N/A']"
          :key="option"
          variant="outline"
          size="sm"
          :class="[
            selectedDirection === option
              ? 'dark:bg-white dark:text-black bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600',
          ]"
          @click="selectedDirection = option as TrickDirection"
          type="button"
        >
          {{ option }}
        </Button>
      </div>
      <span v-if="errors.direction" class="text-red-500 text-sm">Direction is required</span>
    </div>

    <!-- Terrain Selection -->
    <div>
      <p class="font-semibold">Select Terrain:</p>
      <div class="flex flex-wrap gap-4 mt-1">
        <label
          v-for="option in terrainOptions"
          :key="option"
          class="flex items-center gap-2"
        >
          <input
            type="checkbox"
            :value="option"
            v-model="selectedTerrains"
            class="w-4 h-4 appearance-auto accent-primary"
          />
          <span>{{ option }}</span>
        </label>
      </div>
      <span v-if="errors.terrains" class="text-red-500 text-sm">At least one terrain is required</span>
    </div>

    <!-- Trick Type Selection -->
    <div>
      <p class="font-semibold">Select Trick Type:</p>
      <div class="flex flex-wrap gap-4 mt-1">
        <label
          v-for="option in trickTypeOptions"
          :key="option"
          class="flex items-center gap-2"
        >
          <input
            type="checkbox"
            :value="option"
            v-model="selectedTypes"
            class="w-4 h-4 appearance-auto accent-primary"
          />
          <span>{{ option }}</span>
        </label>
      </div>
      <span v-if="errors.trickTypes" class="text-red-500 text-sm">At least one trick type is required</span>
    </div>

    <!-- Difficulty Slider -->
    <div>
      <p class="font-semibold mb-2">Difficulty: {{ difficulty }}</p>
      <Slider
        :model-value="[difficulty]"
        :min="1"
        :max="5"
        :step="1"
        class="w-full"
        :class="{ 'border-red-500': errors.difficulty }"
        @update:modelValue="(val) => { if (val && val[0] !== undefined) difficulty = val[0] as 1 | 2 | 3 | 4 | 5 }"
      />
      <div class="flex justify-between text-sm mt-1">
        <span>1</span>
        <span>5</span>
      </div>
      <span v-if="errors.difficulty" class="text-red-500 text-sm">Please select a valid difficulty</span>
    </div>

    <!-- Submit Button -->
    <Button type="submit" class="mt-4 hover:cursor-pointer">Add Trick</Button>
  </form>
</template>
