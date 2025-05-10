<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { TrickDirection } from "@/types/Tricks"; // Correct import

export default defineComponent({
  name: "DirectionTag",
  props: {
    direction: {
      type: String as PropType<TrickDirection>,
      required: true,
    },
  },
});
</script>

<template>
  <div
    v-if="direction && direction !== 'N/A'"
    class="inline-block text-[10px] font-semibold"
  >
    <span class="bg-primary text-primary-foreground px-2 rounded-full">
      {{ direction === "Front Side" ? "FS" : "BS" }}
    </span>
  </div>
</template>
