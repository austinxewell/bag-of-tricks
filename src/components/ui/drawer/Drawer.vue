<script lang="ts" setup>
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerRoot } from 'vaul-vue'

// Define props with defaults
const props = withDefaults(defineProps<DrawerRootProps>(), {
  shouldScaleBackground: true,
})

// Define emits
const emits = defineEmits<DrawerRootEmits>()

// Forward props and emits and explicitly type it
const forwarded: Record<string, any> = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerRoot
    data-slot="drawer"
    v-bind="forwarded"
  >
    <slot />
  </DrawerRoot>
</template>
