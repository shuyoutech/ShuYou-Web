<script setup lang="ts">
import {Vortex} from "~~/components/ui/vortex";
import {SparklesText} from "~~/components/ui/sparkles-text";

const features = ref([
  {
    title: 'AI',
    description: '数游AI创意平台集成了最前沿的人工智能生成技术，为您提供全方位的智能内容创作服务。无论是智能对话、AI绘画还是视频生成，我们都能通过先进的算法模型，将您的想法瞬间转化为高质量的数字内容。',
    icon: 'i-lucide-message-circle',
    to: 'https://ai.shuyoutech.com'
  },
  {
    title: 'BBS',
    description: '数游BBS专为游戏爱好者打造的综合性论坛社区。我们专注于游戏角色造型设计、外观分享、攻略交流与官方资讯，为每一位玩家提供展示个性、学习技巧、交流心得的完美平台。',
    icon: 'i-lucide-message-square',
    to: 'https://bbs.shuyoutech.com'
  },
  {
    title: 'NAV',
    description: '数游NAV专为用户收录并分类整理了互联网上所有热门、实用、优质的网站资源。无论您需要访问综合门户、官方平台、工具网站还是特色资源，这里都能为您提供最快捷、最全面的入口服务。',
    icon: 'i-lucide-compass',
    to: 'https://nav.shuyoutech.com'
  },
  {
    title: 'ADMIN',
    description: '数游ADMIN通用后台权限管理系统致力于为企业和组织提供全面、安全、高效的访问控制解决方案。通过精细化的权限管理、完善的系统配置和实时操作监控，确保系统资源得到合理分配与使用，有效防范数据泄露风险，提升整体运维管理效率。',
    icon: 'i-lucide-shield-check',
    to: 'https://admin.shuyoutech.com'
  },
  {
    title: 'DKP',
    description: '数游DKP管理系统——专为游戏公会、团队组织打造的智能积分统计与奖励平台。我们通过精准的活动参与记录、公平的积分分配机制和丰富的奖励兑换体系，帮助管理者高效运营团队，激励成员积极参与活动，营造更加活跃和谐的社群氛围。',
    icon: 'i-lucide-trophy',
    to: 'https://dkp.shuyoutech.com'
  },
  {
    title: 'GAME',
    description: '数游GAME专为深度玩家打造的一站式游戏生态平台。这里不仅汇聚了全网热门游戏资讯，更创新地整合了多平台交易比价功能和工会社交体系，为您提供从游戏发现、资产交易到社群归属的全流程服务。',
    icon: 'i-lucide-gamepad-2',
    to: 'https://game.shuyoutech.com'
  }
])

</script>

<template>
  <div class="mx-auto h-[30rem] w-full overflow-hidden">
    <Vortex
      background-color="black"
      class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <SparklesText
        text="数游科技"
        :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
        :sparkles-count="20"
        class="mt-8 max-w-xl text-center text-sm text-white md:text-2xl"
      />
      <!--      <h2 class="text-center text-2xl font-bold text-white md:text-6xl">The hell is this?</h2>-->
      <p class="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
        是一家专注于AI应用解决方案的高新技术企业，致力于为企业提供智能化转型的核心技术支撑。
      </p>
    </Vortex>
  </div>
  <USeparator/>
  <UPageSection
    title="产品功能"
    description="数游科技打造了一系列高效便捷的数字化工具系统，无缝衔接您的生活、工作与学习场景。无论是日常事务处理、专业工作任务还是学习管理，我们的产品都能帮助您节省时间、减少繁琐操作，让效率提升触手可及。"
    :features="features"
  />

</template>
