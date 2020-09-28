<template>
  <el-button v-waves size="small" :loading="downloadLoading" class="filter-item" type="info" plain icon="el-icon-download" :data="data" @click="handleDownload">
    Export
  </el-button>
</template>

<script>
import waves from '@/directive/waves' // waves directive

export default {
  name: 'Exportexcel',
  directives: { waves },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      downloadLoading: false
    }
  },
  methods: {
    handleDownload() {
      if (this.data) {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          try {
            const tHeader = Object.keys(this.data[0])
            const filterVal = Object.keys(this.data[0])

            if (tHeader.indexOf('edit') > -1) {
              tHeader.splice(tHeader.indexOf('edit'), 1)
            }

            if (filterVal.indexOf('edit') > -1) {
              filterVal.splice(filterVal.indexOf('edit'), 1)
            }

            const data = this.formatJson(filterVal)
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: 'table-list'
            })
          } catch (e) {
            this.$notify({
              title: 'Warning',
              message: 'No Data for downloaing',
              type: 'warning',
              duration: 2000
            })
          }
          this.downloadLoading = false
        })
      } else {
        this.$notify({
          title: 'Warning',
          message: 'No Data for downloaing',
          type: 'warning',
          duration: 2000
        })
      }
    },
    formatJson(filterVal) {
      return this.data.map(v => filterVal.map(j => {
        return v[j]
      }))
    }
  }
}
</script>
