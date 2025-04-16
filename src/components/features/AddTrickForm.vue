<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "@/stores/useMainStore";
import type { Trick, Terrain, TrickType } from "@/types/Tricks";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/composables/useToast";

const { showSuccess, showError } = useToast();
const store = useMainStore();

// Form fields
const trickName = ref("");
const selectedTerrains = ref<Terrain[]>([]);
const selectedTypes = ref<TrickType[]>([]);
const difficulty = ref(1);

// Validation
const errors = ref({
  trickName: false,
  terrains: false,
  trickTypes: false,
  difficulty: false,
});

const terrainOptions: Terrain[] = store.defaultTerrains;
const trickTypeOptions: TrickType[] = store.defaultTrickTypes;

const resetForm = () => {
  trickName.value = "";
  selectedTerrains.value = [];
  selectedTypes.value = [];
  difficulty.value = 1;
};

const validateForm = (): boolean => {
  // Reset all errors
  errors.value = {
    trickName: false,
    terrains: false,
    trickTypes: false,
    difficulty: false,
  };

  let isValid = true;

  if (!trickName.value) {
    errors.value.trickName = true;
    isValid = false;
  }

  if (selectedTerrains.value.length === 0) {
    errors.value.terrains = true;
    isValid = false;
  }

  if (selectedTypes.value.length === 0) {
    errors.value.trickTypes = true;
    isValid = false;
  }

  if (difficulty.value < 1 || difficulty.value > 5) {
    errors.value.difficulty = true;
    isValid = false;
  }

  return isValid;
};

const submitTrick = () => {
  if (!validateForm()) {
    showError("Please fill out all required fields.");
    return;
  }

  const newTrick: Trick = {
    name: trickName.value,
    terrain: selectedTerrains.value,
    trickType: selectedTypes.value,
    difficulty: difficulty.value,
  };

  store.addToBag(newTrick);
  showSuccess("Trick added!");
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
      <span v-if="errors.trickName" class="text-red-500 text-sm"
        >Trick name is required</span
      >
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
      <span v-if="errors.terrains" class="text-red-500 text-sm"
        >At least one terrain is required</span
      >
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
      <span v-if="errors.trickTypes" class="text-red-500 text-sm"
        >At least one trick type is required</span
      >
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
        @update:modelValue="difficulty = $event[0]"
      />
      <div class="flex justify-between text-sm mt-1">
        <span>1</span>
        <span>5</span>
      </div>
      <span v-if="errors.difficulty" class="text-red-500 text-sm"
        >Please select a valid difficulty</span
      >
    </div>

    <!-- Submit Button -->
    <Button type="submit" class="mt-4 hover:cursor-pointer">Add Trick</Button>
  </form>
</template>
