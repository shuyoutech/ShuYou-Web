<script setup lang="ts">
import {Vortex} from "~~/components/ui/vortex";

const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<!--<template>
  <div v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.hero.links"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC
          :value="page.title"
          unwrap="p"
        />
      </template>

      <PromotionalVideo />
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <ImagePlaceholder />
    </UPageSection>

    <UPageSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns class="xl:columns-4">
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="lg"
            />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>-->

<template>
  <div class="mx-auto h-[30rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
    <Vortex
      background-color="black"
      class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <h2 class="text-center text-2xl font-bold text-white md:text-6xl">The hell is this?</h2>
      <p class="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
        This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been burned and
        you&apos;ll have a scar.
      </p>
      <div class="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <button
          class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Order now
        </button>
        <button
          class="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
        >
          Watch trailer
        </button>
      </div>
    </Vortex>
  </div>
</template>
