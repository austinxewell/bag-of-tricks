<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useVModel } from "@vueuse/core";
import EditTrickList from "@/components/features/EditTrickList.vue";

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
        <SheetTitle>Edit Your Bag!</SheetTitle>
        <SheetDescription> Remove Tricks From Your Bag. </SheetDescription>
      </SheetHeader>
      <EditTrickList />
    </SheetContent>
  </Sheet>
</template>
