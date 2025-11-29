<script setup lang="ts">
import {Vortex} from "~~/components/ui/vortex";
import {SparklesText} from "~~/components/ui/sparkles-text";

const features = ref([
  {
    title: 'AI',
    description: '数游AI平台为您聚合了包括OpenAI、Google、Anthropic、Grok、DeepSeek、通义千问在内的众多前沿大模型。无论您面临智能对话、AI绘画还是视频生成的复杂需求，我们都能为您提供全方位、持续进化的智能创作服务。',
    icon: 'i-lucide-message-circle',
    to: 'https://ai.shuyoutech.com'
  },
  {
    title: 'API',
    description: '数游API，您的一站式AI模型网关。我们已聚合全球顶尖模型，您只需一个统一的API即可轻松调用。将您从繁琐的管理工作中解放出来，把宝贵的开发精力重新投入到真正的创新之上，无需再为繁琐的管理与切换而分心。',
    icon: 'i-lucide-gamepad-2',
    to: 'https://doc.shuyoutech.com'
  },
  {
    title: 'NAV',
    description: '数游NAV为您收录并分类了互联网上所有热门、实用、优质的网站资源。从综合门户、官方平台到工具网站与特色资源，我们为您提供最全面的分类整理。同时您可以随心打造专属导航页，将高频访问的网站一网打尽，真正实现最快捷、最个性化的入口服务。',
    icon: 'i-lucide-compass',
    to: 'https://nav.shuyoutech.com'
  },
  {
    title: 'BBS',
    description: '数游BBS专为游戏爱好者打造的综合性论坛社区。我们专注于游戏角色造型设计、外观分享、攻略交流与官方资讯，为每一位玩家提供展示个性、学习技巧、交流心得的完美平台。无论你是痴迷于捏脸的艺术大师，还是专注于速通的技术高手，这里都有你的一席之地。',
    icon: 'i-lucide-message-square',
    to: 'https://bbs.shuyoutech.com'
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
