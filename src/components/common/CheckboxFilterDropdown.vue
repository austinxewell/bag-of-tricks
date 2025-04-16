<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { computed } from "vue";

interface Props {
  label: string;
  options: string[];
  modelValue: string[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void;
}>();

// Computed binding for reactivity
const selected = computed({
  get: () => props.modelValue,
  set: (val: string[]) => emit("update:modelValue", val),
});

function toggleSelection(option: string, checked: boolean) {
  if (checked && !selected.value.includes(option)) {
    selected.value = [...selected.value, option];
  } else if (!checked) {
    selected.value = selected.value.filter((item) => item !== option);
  }
}

function clearAll() {
  selected.value = [];
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="hover:cursor-pointer" variant="outline">
        {{ label }}
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>{{ label }}</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuCheckboxItem
        v-for="option in options"
        :key="option"
        :model-value="selected.includes(option)"
        @update:model-value="(checked) => toggleSelection(option, checked)"
        @select="(e) => e.preventDefault()"
      >
        {{ option }}
      </DropdownMenuCheckboxItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem
        @click="clearAll"
        @select="(e) => e.preventDefault()"
        class="font-semibold text-red-500 pl-2 hover:cursor-pointer"
      >
        Clear All
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
