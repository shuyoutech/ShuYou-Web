<script setup lang="ts">
//颜色模式管理,根据当前颜色模式返回背景色 暗模式为 #020618，亮模式为 white
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

//用于动态设置页面头部的 HTML 标签（如 <meta>、<link> 等）。
useHead({
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {name: 'theme-color', content: color}
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
  ogImage: 'https://ui4.nuxt.com/assets/templates/nuxt/saas-light.png',
  twitterImage: 'https://ui4.nuxt.com/assets/templates/nuxt/saas-light.png',
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
      <FluidCursor />
    </ClientOnly>
  </UApp>
</template>
