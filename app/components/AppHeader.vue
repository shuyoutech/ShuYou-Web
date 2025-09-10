<script setup lang="ts">

import type {NavigationMenuItem} from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: '首页',
    to: '/'
  },
  {
    label: '产品服务',
    children: [
      {
        label: 'Admin管理',
        icon: 'i-lucide-shield-check',
        to: 'https://admin.shuyoutech.com',
        target: '_blank'
      },
      {
        label: 'AI智能',
        icon: 'i-lucide-message-circle',
        to: 'https://ai.shuyoutech.com',
        target: '_blank'
      },
      {
        label: 'BBS论坛',
        icon: 'i-lucide-message-square',
        to: 'https://bbs.shuyoutech.com',
        target: '_blank'
      },
      {
        label: 'Nav导航',
        icon: 'i-lucide-compass',
        to: 'https://nav.shuyoutech.com',
        target: '_blank'
      },
      {
        label: 'DKP积分',
        icon: 'i-lucide-trophy',
        to: 'https://dkp.shuyoutech.com',
        target: '_blank'
      },
      {
        label: 'Game游戏',
        icon: 'i-lucide-gamepad-2',
        to: 'https://game.shuyoutech.com',
        target: '_blank'
      }
    ]
  },
  {
    label: '关于我们',
    to: '/about'
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center gap-2">
        <UIcon name="i-custom-logo" class="w-8 h-8"/>
        <span class="text-xl font-bold text-gray-900 dark:text-white leading-none">数游科技</span>
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      class="w-full justify-center"
    />

    <template #right>
      <UColorModeButton/>
    </template>
  </UHeader>
</template>

<style scoped>

</style>
