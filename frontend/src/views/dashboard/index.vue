<template>
  <div class="dashboard-container">
    <h1 align="center">
      {{ title }}
    </h1>
    <el-footer :span="24">
      <p style="text-align: center; font-size: 0.8em; color: #777">&copy; Copyright by Sindoh 2020, ver {{ version }}</p>
    </el-footer>
  </div>
</template>

<script>
import defaultSettings from '@/settings'
const { title, version } = defaultSettings

export default {
  name: 'Dashboard',
  data() {
    return {
      version: version,
      title: title
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
