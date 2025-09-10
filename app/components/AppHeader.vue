<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: '首页',
  to: '/docs',
  active: route.path.startsWith('/docs')
}, {
  label: '产品服务',
  to: '/pricing'
}, {
  label: '技术创新',
  to: '/blog'
}, {
  label: '关于我们',
  to: '/changelog'
}])
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
    />

    <template #right>
      <UColorModeButton/>
    </template>
  </UHeader>
</template>
