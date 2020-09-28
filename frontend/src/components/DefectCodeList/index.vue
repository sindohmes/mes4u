<template>
  <el-select
    v-model="defect_code"
    :placeholder="placeholder"
    :class="classProps"
    style="width:100%; font-size:1rem;"
    filterable
    clearable
    remote
    :remote-method="remoteMethod"
    :loading="loading"
    value-key="defect_code"
    @change="selectDefectCode"
  >
    <el-option
      v-for="item in defectCodeList"
      :key="item.defect_code + item.defect_name"
      :label="item.defect_name"
      :value="item"
    >
      <span style="float: left">{{ item.defect_code }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.defect_name }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { getDefectCodes } from '@/api/operation'

export default {
  name: 'DefectCode',
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
      defect_code: '',
      defectCodeList: '',
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
        this.defectCodeList = []
        this.defect_code = {}
      }
    }
  },
  mounted() {
    if (this.defaultvalue !== undefined && this.defaultvalue !== null && this.defaultvalue !== '') {
      this.getPropsData(this.defaultvalue)
    } else {
      this.defectCodeList = []
      this.defect_code = {}
    }
  },
  methods: {
    getPropsData(val) {
      getDefectCodes(val).then(response => {
        this.list = response.map(item => {
          return { value: 'value:${item}' }
        })
        this.defectCodeList = response
        this.defect_code = response[0]
      })
    },
    getDefectCode(val) {
      getDefectCodes(val).then(response => {
        this.list = response.map(item => {
          return { value: 'value:${item}' }
        })
        this.defectCodeList = response
      })
    },
    selectDefectCode() {
      this.$emit('setDefectCode', this.defect_code)
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        this.getDefectCode(query)
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
