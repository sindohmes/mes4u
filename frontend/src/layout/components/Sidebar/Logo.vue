<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
import defaultSettings from '@/settings'
const { title } = defaultSettings

export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: title,
      logo: 'data:image/png;base64,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'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 48px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
