<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useDark, useToggle } from "@vueuse/core";
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
  <header class="flex justify-between">
    <div class="w-full text-center">
      <h1 class="text-[4rem]">Bag Of Tricks!</h1>
      <h2 class="text-[2rem]">Whats In Your Bag?</h2>
    </div>
    <div class="mt-2 mr-4 flex flex-col gap-1">
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
  </header>
</template>
