<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useVModel } from "@vueuse/core";
import AddTrickForm from "@/components/features/AddTrickForm.vue";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const open = useVModel(props, "modelValue", emit);
</script>

<template>
  <Sheet v-model:open="open">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Add a Trick To The Bag!</SheetTitle>
        <SheetDescription>
          Describe the trick you want to add to your bag.
        </SheetDescription>
      </SheetHeader>
      <AddTrickForm class="p-4" />
    </SheetContent>
  </Sheet>
</template>
