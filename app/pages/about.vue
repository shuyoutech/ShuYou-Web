<script setup lang="ts">

import {GlowBorder} from "~~/components/ui/glow-border";

const {data: page} = await useAsyncData('about', () => queryCollection('about').first())

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
    >
    </UPageHero>

    <UPageSection :ui="{ container: '!px-0 !pt-0' }">
      <!-- 核心内容区域 -->
      <div class="relative w-full overflow-hidden rounded-none mb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-6 -mt-8">
        <GlowBorder
          :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
          :border-radius="0"
        />
        <div class="relative z-10">
          <div class="prose prose-lg prose-gray dark:prose-invert w-full about-content">
            <div v-if="page.content">
              <MDC
                :value="page.content"
                unwrap="p"
              />
            </div>
            <div v-else class="text-center text-gray-500">
              <p>内容加载中...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 联系我们区域 -->
      <div v-if="page.images && page.images.length" class="mt-8 px-4">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">联系我们</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">扫码添加微信，获取更多技术资讯</p>
        </div>
        <div class="flex justify-center">
          <div class="relative group">
            <img
              v-for="(image, index) in page.images"
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="w-40 h-40 rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>

<style scoped>
.about-content {
  max-width: none !important;
}

.about-content :deep(h2) {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  background: linear-gradient(to right, #9333ea, #db2777);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.about-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
  color: #374151;
}

.dark .about-content :deep(h3) {
  color: #e5e7eb;
}

.about-content :deep(p) {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #374151;
}

.dark .about-content :deep(p) {
  color: #d1d5db;
}

.about-content :deep(strong) {
  font-weight: 600;
  color: #9333ea;
}

.dark .about-content :deep(strong) {
  color: #c4b5fd;
}

.about-content :deep(ul) {
  list-style: none;
  margin: 1rem 0;
}

.about-content :deep(ul) > * + * {
  margin-top: 0.5rem;
}

.about-content :deep(li) {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #374151;
}

.dark .about-content :deep(li) {
  color: #d1d5db;
}

.about-content :deep(li::before) {
  content: "✨";
  color: #9333ea;
  margin-right: 0.5rem;
  flex-shrink: 0;
}
</style>
