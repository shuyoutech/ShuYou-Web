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
      <UIcon name="i-custom-logo"/>
      <span class="text-xl font-bold text-gray-900 dark:text-white leading-none pb-1">数游科技</span>
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
