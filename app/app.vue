<script setup lang="ts">
//颜色模式管理,根据当前颜色模式返回背景色 暗模式为 #020618，亮模式为 white
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

//用于动态设置页面头部的 HTML 标签（如 <meta>、<link> 等）。
useHead({
  title: '数游AI | AI工具聚合平台与API服务',
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {
      name: 'description',
      content: '数游科技 - 专注于提供领先的AI解决方案，聚合各类AI工具与API服务，并提供专业的AI论文、网址导航、后台管理系统及DKP系统，致力于为游戏行业提供全面的技术与资讯服务。'
    },
    {
      name: 'keywords',
      content: '数游科技, 数游AI, AI工具, AI论文, API接口, 网址导航, 后台管理系统, DKP系统'
    },
    {name: 'theme-color', content: color},
  ],
  link: [
    {rel: 'icon', href: '/favicon.ico'}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

//SEO元数据配置
useSeoMeta({
  titleTemplate: '%s - 数游科技',
  ogTitle: '数游科技',
  ogDescription: '数游科技 - 专注于提供领先的AI解决方案，聚合各类AI工具与API服务，并提供专业的AI论文、网址导航、后台管理系统及DKP系统，致力于为游戏行业提供全面的技术与资讯服务。',
  ogUrl: 'https://www.shuyoutech.com/',
  ogType: 'website',
  ogImage: 'https://www.shuyoutech.com/favicon.ico',
  twitterImage: 'https://www.shuyoutech.com/favicon.ico',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <UApp>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <ClientOnly>
      <FluidCursor/>
    </ClientOnly>
  </UApp>
</template>
