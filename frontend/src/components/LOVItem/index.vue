<template>
  <div>
    <el-dialog title="Select an item" :dialog-visible="dialogVisible" :visible.sync="dialogFormVisible" :before-close="cancelItem">
      <el-form :ref="itemForm" :rules="ruleItems" :model="itemForm" label-position="left" label-width="70px" style="margin-left:50px;" @submit.native.prevent>
        <el-col :span="20">
          <el-form-item label="Item" prop="item_number">
            <el-input v-model="itemForm.item_number" @keyup.enter.native="getItemList" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button style="margin-left: 10px;" type="success" @click="getItemList">
            Find
          </el-button>
        </el-col>
      </el-form>
      <el-table
        ref="itemTable"
        v-loading="listLoading"
        :data="items"
        border
        fit
        highlight-current-row
        style="width: 100%; height: 500px; overflow: auto"
        @current-change="handleCurrentItem"
      >
        <el-table-column label="Item ID" align="left">
          <template slot-scope="{row}">
            <span>{{ row.item_id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Item Number" align="left">
          <template slot-scope="{row}">
            <span>{{ row.item_number }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Description" align="left">
          <template slot-scope="{row}">
            <span>{{ row.item_description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Product Family" align="left">
          <template slot-scope="{row}">
            <span>{{ row.product_family }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelItem">
          Cancel
        </el-button>
        <el-button type="primary" @click="selectItem">
          Select
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getItems } from '@/api/mdm'

export default {
  name: 'Lovitem',
  props: {
    inputItem: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    },
    dialogVisible: Boolean
  },
  data() {
    return {
      ruleItems: {},
      listLoading: false,
      items: null,
      dialogFormVisible: this.visible,
      listOptions: null,
      currentItem: null,
      itemForm: {
        item_number: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'site'
    ])
  },
  watch: {
    dialogVisible(value) {
      this.dialogFormVisible = value
      this.itemForm.item_number = this.inputItem
      this.items = null

      if (this.itemForm.item_number) {
        this.getItemList()
      }
    }
  },
  methods: {
    async getItemList() {
      this.listLoading = true
      this.itemForm.item_number = this.fieldUpperCase(this.itemForm.item_number)

      const params = {
        itemNumber: this.itemForm.item_number,
        site: this.site
      }
      const res = await getItems(params)
      this.listLoading = false
      this.items = res
      this.listLoading = false
    },
    handleCurrentItem(val) {
      this.currentItem = val
    },
    selectItem() {
      if (this.currentItem) {
        this.$emit('applyItem', this.currentItem)
      } else {
        this.$notify({
          title: 'Error',
          message: 'Please select a item.',
          type: 'error',
          duration: 2000
        })
      }
    },
    cancelItem() {
      this.currentItem = null
      this.$emit('applyItem', this.currentItem)
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
