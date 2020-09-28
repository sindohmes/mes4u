<template>
  <el-select
    v-model="itemnumber"
    :placeholder="placeholder"
    :class="classProps"
    style="width:100%; font-size:1rem;"
    filterable
    clearable
    remote
    reserve-keyword
    :remote-method="remoteMethod"
    :loading="loading"
    value-key="itemnumber"
    @change="selectItem"
  >
    <el-option
      v-for="item in itemList"
      :key="item.id"
      :label="item.itemnumber"
      :value="item"
    >
      <span style="float: left">{{ item.itemnumber }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.itemdescription }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { itemSelectList } from '@/api/mdm'

export default {
  name: 'ItemNumber',
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
      itemnumber: '',
      itemList: '',
      options: [],
      list: [],
      loading: false
    }
  },
  methods: {
    getItem(val) {
      itemSelectList(val).then(response => {
        this.list = response.map(item => {
          return { value: 'value:${item}' }
        })
        this.itemList = response
      })
    },
    selectItem() {
      this.$emit('setItem', this.itemnumber)
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        this.getItem(query)
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
