<template>
  <el-select
    v-model="id"
    :placeholder="placeholder"
    :class="classProps"
    style="width:100%; font-size:1rem;"
    filterable
    clearable
    remote
    reserve-keyword
    :remote-method="remoteMethod"
    :loading="loading"
    value-key="id"
    @change="selectSerialRule"
  >
    <el-option
      v-for="item in serialRuleList"
      :key="item.id"
      :label="item.serialRuleDescription"
      :value="item"
    >
      <span style="float: left">{{ item.id }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.serialRuleDescription }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { serialruleList } from '@/api/mdm'

export default {
  name: 'SerialRule',
  props: {
    defaultvalue: {
      type: Number,
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
      id: '',
      serialRuleList: '',
      options: [],
      list: [],
      loading: false
    }
  },
  watch: {
    defaultvalue() {
      if (this.defaultvalue !== undefined && this.defaultvalue !== null && this.defaultvalue !== '') {
        this.getPropsData('', this.defaultvalue)
      } else {
        this.serialRuleList = []
        this.id = {}
      }
    }
  },
  mounted() {
    if (this.defaultvalue !== undefined && this.defaultvalue !== null && this.defaultvalue !== '') {
      this.getPropsData('', this.defaultvalue)
    } else {
      this.serialRuleList = []
      this.id = {}
    }
  },
  methods: {
    getPropsData(val, id) {
      const params = {
        'rule': val,
        'id': id
      }
      serialruleList(params).then(response => {
        this.list = response.map(item => {
          return { value: 'value:${item}' }
        })
        this.serialRuleList = response
        this.id = response[0]
      })
    },
    async getSerialRule(val, id) {
      const params = {
        'rule': val,
        'id': id
      }
      const response = await serialruleList(params)
      this.list = response.map(item => {
        return { value: 'value:${item}' }
      })
      this.serialRuleList = response
    },
    selectSerialRule() {
      this.$emit('setSerialRule', this.id)
    },
    async remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        await this.getSerialRule(query, null)
        this.loading = false
        this.options = this.list.filter(item => {
          return item.value.indexOf(query) > -1
        })
      } else {
        this.options = []
      }
    }
  }
}
</script>
