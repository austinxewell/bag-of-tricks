<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav class="flex gap-6 mt-2 mr-4">
    <div class="flex gap-4">
      <p class="h-fit">link</p>
      <p class="h-fit">link</p>
      <p class="h-fit">link</p>
    </div>

    <div class="flex flex-col gap-1">
      <Button class="hover:cursor-pointer" @click="toggleDark()">
        {{ isDark ? "🌙 Dark Mode" : "☀️ Light Mode" }}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>Modify Your Bag</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Add To Bag</DropdownMenuItem>
          <DropdownMenuItem>Edit The Goods</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
</template>
