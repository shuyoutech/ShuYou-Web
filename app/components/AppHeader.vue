<script setup lang="ts">

const items = computed(() => [{
  label: '首页',
  to: '/'
}, {
  label: '产品服务',
  active: true,
  children:[
    {
      label: 'Admin系统',
      icon: 'i-simple-icons-github',
      to: 'https://admin.shuyoutech.com',
      target: '_blank'
    },
    {
      label: 'AI系统',
      icon: 'i-simple-icons-github',
      to: 'https://ai.shuyoutech.com',
      target: '_blank'
    },
    {
      label: 'BBS系统',
      icon: 'i-simple-icons-github',
      to: 'https://bbs.shuyoutech.com',
      target: '_blank'
    },
    {
      label: 'Nav系统',
      icon: 'i-simple-icons-github',
      to: 'https://nav.shuyoutech.com',
      target: '_blank'
    },
    {
      label: 'DKP系统',
      icon: 'i-simple-icons-github',
      to: 'https://dkp.shuyoutech.com',
      target: '_blank'
    },
    {
      label: 'GAME系统',
      icon: 'i-simple-icons-github',
      to: 'https://game.shuyoutech.com',
      target: '_blank'
    }
  ]
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
      class="w-full justify-center"
    />

    <template #right>
      <UColorModeButton/>
    </template>
  </UHeader>
</template>
