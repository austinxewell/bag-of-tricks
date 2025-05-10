<script setup lang="ts">
import TrickTable from "@/components/features/TrickTable.vue";
import { defineProps, defineEmits } from "vue";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <Drawer
    :open="props.modelValue"
    @update:open="emit('update:modelValue', $event)"
    class="z-50"
  >
    <DrawerContent
      class="fixed bottom-0 left-0 right-0 h-[calc(100vh-60px)] max-w-full rounded-t-2xl bg-white dark:bg-zinc-900 shadow-lg"
    >
      <Button
        variant="ghost"
        size="icon"
        class="absolute top-4 right-4 z-10 hover:cursor-pointer"
        @click="emit('update:modelValue', false)"
      >
        ✕
      </Button>

      <DrawerHeader class="pr-10">
        <DrawerTitle>View Your Bag</DrawerTitle>
        <DrawerDescription>
          Here you can see all the tricks in your bag.
        </DrawerDescription>
      </DrawerHeader>
      <!-- Trick Table will go here. -->
      <TrickTable class="p-4" />
    </DrawerContent>
  </Drawer>
</template>
