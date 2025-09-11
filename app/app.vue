<script setup lang="ts">
//颜色模式管理,根据当前颜色模式返回背景色 暗模式为 #020618，亮模式为 white
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

//用于动态设置页面头部的 HTML 标签（如 <meta>、<link> 等）。
useHead({
  title: '首页',
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {
      name: 'description',
      content: '数游科技 - 打造无缝衔接生活、工作与学习的数字化工具系统。旗下拥有AI创意平台、游戏BBS社区、网址导航、权限管理系统、DKP公会积分工具及一站式游戏平台，致力于以创新工具提升您的效率，释放您的创造力。'
    },
    {
      name: 'keywords',
      content: '数游科技, 数字化工具, 效率软件, AI创作, 游戏社区, 网址导航, 后台管理系统, DKP系统, 游戏资讯, 工作效率, 学习工具'
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
  ogDescription: '数游科技 - 打造无缝衔接生活、工作与学习的数字化工具系统。旗下拥有AI创意平台、游戏BBS社区、网址导航、权限管理系统、DKP公会积分工具及一站式游戏平台，致力于以创新工具提升您的效率，释放您的创造力。',
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
