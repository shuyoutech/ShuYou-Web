<script setup lang="ts">

import {GlowBorder} from "~~/components/ui/glow-border";

const {data: page} = await useAsyncData('about', () => queryCollection('about').first())

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

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
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left text-4xl md:text-5xl font-bold',
        description: '!mx-0 text-left text-lg md:text-xl text-gray-600 dark:text-gray-300',
        links: 'justify-start'
      }"
    >
    </UPageHero>

    <UPageSection :ui="{
        container: '!pt-0'
      }">
      
      <!-- 核心内容区域 -->
      <div class="relative min-h-[800px] w-full overflow-hidden rounded-2xl mb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <GlowBorder
          :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
          :border-radius="16"
        />
        <div class="w-full flex justify-center p-8 relative z-10">
          <div class="prose prose-xl prose-gray dark:prose-invert max-w-4xl text-center about-content">
            <MDC
              :value="page.content"
              unwrap="p"
            />
          </div>
        </div>
        <!-- 背景装饰 -->
        <div class="absolute inset-0 opacity-5 dark:opacity-10">
          <div class="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div class="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
        </div>
      </div>

      <!-- 联系我们区域 -->
      <div v-if="page.images && page.images.length" class="mt-20">
        <div class="text-center mb-12">
          <h3 class="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">联系我们</h3>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">扫码添加微信，获取更多技术资讯和AI解决方案</p>
        </div>
        <div class="flex justify-center">
          <div class="relative group">
            <div class="relative p-4">
              <!-- 外层光晕效果 -->
              <div class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <img
                v-for="(image, index) in page.images"
                :key="index"
                :src="image.src"
                :alt="image.alt"
                class="relative w-64 h-64 rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl z-10"
              />
              
              <!-- 悬停遮罩 -->
              <div class="absolute inset-4 bg-gradient-to-t from-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
              
              <!-- 边框光效 -->
              <div class="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-purple-400/60 transition-all duration-300 z-30"></div>
              
              <!-- 扫描线效果 -->
              <div class="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 底部装饰 -->
        <div class="mt-12 text-center">
          <div class="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span class="text-sm">专业AI技术服务</span>
            <div class="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
            <span class="text-sm">快速响应支持</span>
            <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style="animation-delay: 1s"></div>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>

<style scoped>
.about-content :deep(h2) {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  background: linear-gradient(to right, rgb(147 51 234), rgb(219 39 119));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.dark .about-content :deep(h2) {
  color: rgb(255 255 255);
}

.about-content :deep(h3) {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: rgb(31 41 55);
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}

.dark .about-content :deep(h3) {
  color: rgb(229 231 235);
}

.about-content :deep(p) {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(55 65 81);
  margin-bottom: 1rem;
  line-height: 1.625;
}

.dark .about-content :deep(p) {
  color: rgb(209 213 219);
}

.about-content :deep(strong) {
  font-weight: 600;
  color: rgb(147 51 234);
}

.dark .about-content :deep(strong) {
  color: rgb(196 181 253);
}

.about-content :deep(ul) {
  list-style: none;
  margin: 1.5rem 0;
}

.about-content :deep(ul) > * + * {
  margin-top: 0.75rem;
}

.about-content :deep(li) {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgb(55 65 81);
}

.dark .about-content :deep(li) {
  color: rgb(209 213 219);
}

.about-content :deep(li::before) {
  content: "✨";
  color: rgb(147 51 234);
  margin-right: 0.5rem;
  flex-shrink: 0;
}
</style>
