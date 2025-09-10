<script setup lang="ts">
import {Vortex} from "~~/components/ui/vortex";
import {SparklesText} from "~~/components/ui/sparkles-text";

</script>

<template>
  <div class="mx-auto h-[30rem] w-full overflow-hidden">
    <Vortex
      background-color="black"
      class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <SparklesText
        text="数游科技"
        :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
        :sparkles-count="20"
        class="mt-8 max-w-xl text-center text-sm text-white md:text-2xl"
      />
<!--      <h2 class="text-center text-2xl font-bold text-white md:text-6xl">The hell is this?</h2>-->
      <p class="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
        是一家专注于AI应用解决方案的高新技术企业，致力于为企业提供智能化转型的核心技术支撑。
      </p>
    </Vortex>
  </div>
  <USeparator />


</template>
