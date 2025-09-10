<script setup lang="ts">

const { data: page } = await useAsyncData('about', () => queryCollection('about').first())


</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
    >
    </UPageHero>
    <UPageSection>
       12313
    </UPageSection>
  </UPage>
</template>
