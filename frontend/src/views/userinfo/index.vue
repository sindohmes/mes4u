<template>
  <div class="app-container">
    <div v-if="name">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
              <span>User Info</span>
            </div>

            <div class="user-profile">
              <div class="box-center">
                <div class="user-name text-center">{{ name }}</div>
              </div>
            </div>

            <div class="user-bio">
              <div class="user-education user-bio-section">
                <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>E-mail</span></div>
                <div class="user-bio-section-body">
                  <div class="text-muted">
                    {{ email }}
                  </div>
                </div>
              </div>

              <div class="user-education user-bio-section">
                <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Manufacturing Site</span></div>
                <div class="user-bio-section-body">
                  <div class="text-muted">
                    {{ site_name }}
                  </div>
                </div>
              </div>

              <div class="user-education user-bio-section">
                <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Language</span></div>
                <div class="user-bio-section-body">
                  <div class="text-muted">
                    {{ lang }}
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSites } from '@/api/mdm'

export default {
  data() {
    return {
      avatar: '@assets/images/avatar.jpg',
      user_name: '',
      user_id: '',
      team_code: '',
      user_mfgsite: '',
      language: '',
      site_name: ''
    }
  },
  computed: {
    ...mapGetters([
      'lang',
      'mfgid',
      'name',
      'email',
      'site'
    ])
  },
  mounted() {
    this.getSite()
  },
  methods: {
    async getSite() {
      const sites = await getSites()
      const site = sites.find(s => s.id === this.site)
      this.site_name = site.name + ' (' + site.location + ', ' + site.country + ')'
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
