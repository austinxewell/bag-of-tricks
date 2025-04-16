<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import AddTrick from "@/components/features/AddTrickSheet.vue";
import ViewBag from "@/components/features/ViewBag.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const isDark = useDark();
const toggleDark = useToggle(isDark);

// Control the Sheet
const isAddTrickOpen = ref(false);
const isViewBagOpen = ref(false);
</script>

<template>
  <nav class="flex gap-6 mt-2 mr-4">
    <div class="flex gap-4">
      <p
        class="h-fit whitespace-nowrap hover:cursor-pointer"
        @click="isViewBagOpen = true"
      >
        View Bag
      </p>
    </div>

    <div class="flex flex-col gap-1">
      <Button class="hover:cursor-pointer" @click="toggleDark()">
        {{ isDark ? "🌙 Dark Mode" : "☀️ Light Mode" }}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>Modify Your Bag</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem @click="isAddTrickOpen = true">
            Add Trick
          </DropdownMenuItem>

          <DropdownMenuItem>Edit The Goods</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>

  <AddTrick v-model="isAddTrickOpen" />
  <ViewBag v-model="isViewBagOpen" />
</template>
