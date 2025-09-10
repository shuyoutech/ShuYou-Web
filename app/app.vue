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

//异步数据获取
const {data: navigation} = await useAsyncData('navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/docs')?.children || []
})
const {data: files} = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

//导航链接
const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}, {
  label: 'Pricing',
  icon: 'i-lucide-credit-card',
  to: '/pricing'
}, {
  label: 'Blog',
  icon: 'i-lucide-pencil',
  to: '/blog'
}, {
  label: 'Changelog',
  icon: 'i-lucide-history',
  to: '/changelog'
}]

// Vue 的依赖注入函数，用于向子孙组件提供数据（这里提供导航数据，以便在整个应用中使用）
provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
      <FluidCursor />
    </ClientOnly>
  </UApp>
</template>
