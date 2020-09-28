<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <el-button type="primary" round size="mini" style="vertical-align: text-bottom;" @click="guide" @click.prevent.stop="guide">{{ route_name }} Guide</el-button>
      <template v-if="device!=='mobile'">
        <div id="user-status" class="right-menu-item hover-effect">{{ name }} 접속 중</div>
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
      </template>

      <el-dropdown class="avatar-container" trigger="click">
        <div id="activity" class="avatar-wrapper">
          <img src="@/assets/images/avatar.jpg" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <router-link to="/userinfo">
            <el-dropdown-item>User Info</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from '@/steps'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull
  },
  data() {
    return {
      user_name: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'name'
    ]),
    route_name: function() {
      return this.$route.name
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    guide() {
      const driver = new Driver()
      driver.defineSteps(steps[this.route_name])
      driver.start()
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
