<template>
  <el-select
    v-model="repair_code"
    :placeholder="placeholder"
    :class="classProps"
    style="width:100%; font-size:1rem;"
    filterable
    clearable
    remote
    reserve-keyword
    :remote-method="remoteMethod"
    :loading="loading"
    value-key="repair_code"
    @change="selectRepairCode"
  >
    <el-option
      v-for="item in repairCodeList"
      :key="item.repair_code + item.repair_name"
      :label="item.repair_name"
      :value="item"
    >
      <span style="float: left">{{ item.repair_code }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.repair_name }}</span>
    </el-option>

  </el-select>
</template>

<script>
import { getRepairCodes } from '@/api/operation'

export default {
  name: 'RepairCode',
  props: {
    defaultvalue: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    classProps: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      repair_code: '',
      repairCodeList: '',
      options: [],
      list: [],
      loading: false
    }
  },
  watch: {
    defaultvalue() {
      if (this.defaultvalue !== undefined && this.defaultvalue !== null && this.defaultvalue !== '') {
        this.getPropsData(this.defaultvalue)
      } else {
        this.repairCodeList = []
        this.repair_code = {}
      }
    }
  },
  mounted() {
    if (this.defaultvalue !== undefined && this.defaultvalue !== null && this.defaultvalue !== '') {
      this.getPropsData(this.defaultvalue)
    } else {
      this.repairCodeList = []
      this.repair_code = {}
    }
  },
  methods: {
    getRepairCode(val) {
      getRepairCodes(val).then(response => {
        this.list = response.map(item => {
          return { value: 'value:${item}' }
        })
        this.repairCodeList = response
      })
    },
    selectRepairCode() {
      this.$emit('setRepairCode', this.repair_code)
    },
    getPropsData(val) {
      getRepairCodes(val).then(response => {
        this.list = response.map(item => {
          return { value: 'value:${item}' }
        })
        this.repairCodeList = response
        this.repair_code = response[0]
      })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        this.getRepairCode(query)
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.value.indexOf(query) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>
