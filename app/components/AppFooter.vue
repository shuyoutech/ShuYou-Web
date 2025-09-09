<script setup lang="ts">

</script>
<!--https://ui4.nuxt.com/docs/components/footer-->
<template>
  <USeparator/>

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #default>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} 苏州数游科技有限公司 版权所有 <a href="https://beian.miit.gov.cn/"
                                                                                    target="_blank"
                                                                                    style="text-decoration: none">苏ICP备2025197988号</a>
      </p>
    </template>
  </UFooter>
</template>
