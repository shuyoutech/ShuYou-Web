<script setup lang="ts">

const productItems = [
  [
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
]
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center gap-2">
        <UIcon name="i-custom-logo" class="w-8 h-8"/>
        <span class="text-xl font-bold text-gray-900 dark:text-white leading-none">数游科技</span>
      </div>
    </template>

    <div class="flex items-center justify-center w-full gap-8">
      <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
        首页
      </NuxtLink>
      
      <UDropdownMenu :items="productItems" :ui="{ content: 'w-80' }">
        <UButton
          variant="ghost"
          color="neutral"
          trailing-icon="i-lucide-chevron-down"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-500"
        >
          产品服务
        </UButton>
      </UDropdownMenu>
      
      <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
        关于我们
      </NuxtLink>
    </div>

    <template #right>
      <UColorModeButton/>
    </template>
  </UHeader>
</template>

<style scoped>
/* 确保下拉菜单有足够宽度 */
:deep(.ui-dropdown-menu-content) {
  width: 20rem !important;
  min-width: 20rem !important;
  max-width: 20rem !important;
}

/* 确保菜单项有足够空间 */
:deep(.ui-dropdown-menu-item) {
  width: 100% !important;
  min-width: 18rem !important;
}

/* 确保菜单项链接有足够空间 */
:deep(.ui-dropdown-menu-item a) {
  display: flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
  padding: 0.75rem 1rem !important;
  width: 100% !important;
  white-space: nowrap !important;
  font-size: 0.95rem !important;
  font-weight: 500 !important;
}

/* 图标 */
:deep(.ui-dropdown-menu-item .ui-icon) {
  width: 1.25rem !important;
  height: 1.25rem !important;
  flex-shrink: 0 !important;
}

/* 文字 */
:deep(.ui-dropdown-menu-item span) {
  flex: 1 !important;
  white-space: nowrap !important;
  font-size: 0.95rem !important;
  font-weight: 500 !important;
}
</style>
