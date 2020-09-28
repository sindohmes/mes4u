<template>
  <div class="components-container">
    <!-- header title -->
    <aside>
      <strong>Defect / Repair Codes Management</strong>
    </aside>
    <!-- body contents -->
    <div class="mixin-components-container">
      <el-row>
        <!-- Scan Assy Barcode -->
        <el-card class="box-card" style="margin-bottom:10px;">
          <el-row :gutter="10">
            <el-form ref="dataForm" :inline="true" :model="findForm" class="demo-form-inline" label-position="top">
              <el-form-item id="searchtype" label="Type">
                <el-select v-model="findForm.changeType" clearable placeholder="Type" @change="changeType">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item id="searchparentcode" label="Parent Code">
                <el-select v-model="findForm.topLevelCode" clearable placeholder="Parent Code">
                  <el-option
                    v-for="item in topLevelCodes"
                    :key="item.code"
                    :label="item.code"
                    :value="item.code"
                  />
                </el-select>
              </el-form-item>
              <el-form-item id="searchcode" label="Defect Code">
                <el-input v-model="findForm.code" placeholder="Code" @keyup.enter.native="onFind" />
              </el-form-item>
              <el-form-item style="vertical-align:bottom">
                <Btn id="searchbtn" name="search" @click="onFind" />
                <Exportexcel id="exportcodes" :data="list" />
              </el-form-item>
            </el-form>
          </el-row>
          <el-row>
            <el-table
              id="codelist"
              v-loading="listLoading"
              :data="list"
              border
              fit
              highlight-current-row
              style="width: 100%;"
              @sort-change="sortChange"
            >
              <el-table-column label="ID" prop="id" sortable="custom" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column label="CODE" sortable="custom">
                <template slot-scope="{row}">
                  <span>{{ row.code }}</span>
                </template>
              </el-table-column>
              <el-table-column label="NAME" align="center">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.name }}</span>
                  <span v-else><el-input v-model="row.name" @keyup.enter.native="modifyCode(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="ALARM COUNT" align="center">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.alarmCount }}</span>
                  <span v-else><el-input v-model="row.alarmCount" @keyup.enter.native="modifyCode(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="LV1 CODE" align="center">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.parentCodeLv1 }}</span>
                  <span v-else><el-input v-model="row.parentCodeLv1" @keyup.enter.native="modifyCode(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="LV2 CODE" align="center" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.parentCodeLv2 }}</span>
                  <span v-else><el-input v-model="row.parentCodeLv2" @keyup.enter.native="modifyCode(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="LV3 CODE">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.parentCodeLv3 }}</span>
                  <span v-else><el-input v-model="row.parentCodeLv3" @keyup.enter.native="modifyCode(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="LV4 CODE">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.parentCodeLv4 }}</span>
                  <span v-else><el-input v-model="row.parentCodeLv4" @keyup.enter.native="modifyCode(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">
                    <Btn name="edit" @click="row.edit=!row.edit" />
                    <Btn name="delete" @click="deleteCode(row)" />
                  </span>
                  <span v-else>
                    <Btn name="confirm" @click="modifyCode(row)" />
                    <Btn name="cancel" @click="row.edit=!row.edit" />
                  </span>
                </template>
              </el-table-column>
            </el-table>

            <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="onFind" />
            <Btn id="createcodebtn" name="create" @click="handleCreate" />
          </el-row>
        </el-card>
      </el-row>
    </div>

    <el-dialog title="Create Code" :visible.sync="createDialogVisible">
      <el-form ref="createForm" :rules="rules" :model="temp" label-position="left" label-width="100px" style="margin-left:50px;">
        <el-form-item label="Type">
          <el-select v-model="temp.type" clearable placeholder="Type" @change="onCreateTypeChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Level">
          <el-input-number v-model="temp.codeLevel" :min="1" :max="5" @change="onLevelChange" />
        </el-form-item>
        <el-form-item label="Code" prop="code">
          <el-input v-model="temp.code" />
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="Alarm Count">
          <el-input-number v-model="temp.alarmCount" />
        </el-form-item>
        <el-form-item label="Level #1">
          <el-select v-model="temp.parentCodeLv1" placeholder="Select" :disabled="lv1Disabled">
            <el-option
              v-for="item in lv1Options"
              :key="item.code"
              :label="item.code"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Level #2">
          <el-select v-model="temp.parentCodeLv2" placeholder="Select" :disabled="lv2Disabled" @change="onCodeLv2Change">
            <el-option
              v-for="item in lv2Options"
              :key="item.code"
              :label="item.code"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Level #3">
          <el-select v-model="temp.parentCodeLv3" placeholder="Select" :disabled="lv3Disabled" @change="onCodeLv3Change">
            <el-option
              v-for="item in lv3Options"
              :key="item.code"
              :label="item.code"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Level #4">
          <el-select v-model="temp.parentCodeLv4" placeholder="Select" :disabled="lv4Disabled" @change="onCodeLv4Change">
            <el-option
              v-for="item in lv4Options"
              :key="item.code"
              :label="item.code"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <Btn name="confirm" @click="createData" />
        <Btn name="cancel" @click="createDialogVisible = false" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'

import {
  topLevelDefectCodes,
  topLevelRepairCodes,
  defectCodes,
  repairCodes,
  addDefectCode,
  addRepairCode,
  updateDefectCode,
  updateRepairCode,
  deleteDefectCode,
  deleteRepairCode
} from '@/api/mdm'

const defaultForm = {
  changeType: '',
  topLevelCode: '',
  code: ''
}
const tempForm = {
  type: undefined,
  codeLevel: 1,
  code: '',
  name: '',
  alarmCount: '',
  parentCodeLv1: '',
  parentCodeLv2: '',
  parentCodeLv3: '',
  parentCodeLv4: ''
}
export default {
  name: 'DefectCodes',
  components: { Pagination, Exportexcel, Btn },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      findForm: Object.assign({}, defaultForm),

      list: null,
      listLoading: false,
      listQuery: {
        page: 1,
        size: 10,
        sort: 'ascending',
        sortprop: 'code',
        toplevelcode: undefined,
        code: undefined
      },
      total: 0,
      options: [
        {
          value: 'DEFECT',
          label: 'DEFECT'
        }, {
          value: 'REPAIR',
          label: 'REPAIR'
        }
      ],
      topLevelCodes: [],
      dCodes: [],
      rCodes: [],
      createDialogVisible: false,
      temp: Object.assign({}, tempForm),
      lv1Options: [],
      lv2Options: [],
      lv3Options: [],
      lv4Options: [],
      lv1Disabled: true,
      lv2Disabled: true,
      lv3Disabled: true,
      lv4Disabled: true,
      rules: {
        code: [{ required: true, message: 'code is required', trigger: 'change' }]
      }
    }
  },
  computed: {
  },
  created() {
    this.getTopLevelCode()
  },
  methods: {
    async getTopLevelCode() {
      this.dCodes = await topLevelDefectCodes(1)
      this.rCodes = await topLevelRepairCodes(1)
    },
    sortChange(data) {
      const { prop, order } = data
      this.listQuery.sortprop = prop
      this.listQuery.sort = order
      this.onFind()
    },
    async onFind() {
      const params = Object.assign({}, this.listQuery)
      params.toplevelcode = this.findForm.toplevelcode ? this.findForm.topLevelCode : ''
      params.code = this.findForm.code ? this.findForm.code : ''

      let res = null
      this.listLoading = true

      if (this.findForm.changeType) {
        if (this.findForm.changeType === 'DEFECT') {
          res = await defectCodes(params)
          this.topLevelCodes = this.dCodes
        } else if (this.findForm.changeType === 'REPAIR') {
          res = await repairCodes(params)
          this.topLevelCodes = this.rCodes
        }

        const list = res.items
        this.list = list.map(v => {
          this.$set(v, 'edit', false)
          return v
        })
        this.total = res.total
      } else {
        this.$notify({
          title: 'Warning',
          message: 'Please select a type',
          type: 'warning',
          duration: 2000
        })
      }

      this.listLoading = false
    },
    handleCreate() {
      this.temp = Object.assign({}, tempForm)
      this.createDialogVisible = true

      this.$nextTick(() => {
        this.$refs.dataForm.resetFields()
        this.temp.type = this.findForm.changeType
        this.onCreateTypeChange()
        this.onLevelChange()
      })
    },
    onLevelChange() {
      if (this.temp.codeLevel === 5) {
        this.lv4Disabled = false
        this.lv3Disabled = false
        this.lv2Disabled = false
        this.lv1Disabled = false
      } else if (this.temp.codeLevel === 4) {
        this.temp.parentCodeLv4 = ''
        this.lv4Disabled = true
        this.lv3Disabled = false
        this.lv2Disabled = false
        this.lv1Disabled = false
      } else if (this.temp.codeLevel === 3) {
        this.temp.parentCodeLv3 = ''
        this.temp.parentCodeLv4 = ''
        this.lv4Disabled = true
        this.lv3Disabled = true
        this.lv2Disabled = false
        this.lv1Disabled = false
      } else if (this.temp.codeLevel === 2) {
        this.temp.parentCodeLv2 = ''
        this.temp.parentCodeLv3 = ''
        this.temp.parentCodeLv4 = ''
        this.lv4Disabled = true
        this.lv3Disabled = true
        this.lv2Disabled = true
        this.lv1Disabled = false
      } else if (this.temp.codeLevel === 1) {
        this.temp.parentCodeLv1 = ''
        this.temp.parentCodeLv2 = ''
        this.temp.parentCodeLv3 = ''
        this.temp.parentCodeLv4 = ''
        this.lv4Disabled = true
        this.lv3Disabled = true
        this.lv2Disabled = true
        this.lv1Disabled = true
      }
    },
    async onCodeLv1Change() {

    },
    async onCodeLv2Change() {
      const params = Object.assign({}, this.listQuery)
      params.toplevelcode = ''
      params.code = this.temp.parentCodeLv2 ? this.temp.parentCodeLv2 : ''
      let res = null
      if (this.temp.type === 'DEFECT') {
        res = await defectCodes(params)
      } else if (this.temp.type === 'REPAIR') {
        res = await repairCodes(params)
      }

      if (res.items.length > 0) {
        this.temp.parentCodeLv1 = res.items[0].parentCodeLv1
      }
    },
    async onCodeLv3Change() {
      const params = Object.assign({}, this.listQuery)
      params.toplevelcode = ''
      params.code = this.temp.parentCodeLv3 ? this.temp.parentCodeLv3 : ''

      let res = null
      if (this.temp.type === 'DEFECT') {
        res = await defectCodes(params)
      } else if (this.temp.type === 'REPAIR') {
        res = await repairCodes(params)
      }

      if (res.items.length > 0) {
        this.temp.parentCodeLv1 = res.items[0].parentCodeLv1
        this.temp.parentCodeLv2 = res.items[0].parentCodeLv2
      }
    },
    async onCodeLv4Change() {
      const params = Object.assign({}, this.listQuery)
      params.toplevelcode = ''
      params.code = this.temp.parentCodeLv4 ? this.temp.parentCodeLv4 : ''

      let res = null
      if (this.temp.type === 'DEFECT') {
        res = await defectCodes(params)
      } else if (this.temp.type === 'REPAIR') {
        res = await repairCodes(params)
      }

      if (res.items.length > 0) {
        this.temp.parentCodeLv1 = res.items[0].parentCodeLv1
        this.temp.parentCodeLv2 = res.items[0].parentCodeLv2
        this.temp.parentCodeLv3 = res.items[0].parentCodeLv3
      }
    },
    async onCreateTypeChange() {
      this.temp.parentCodeLv1 = ''
      this.temp.parentCodeLv2 = ''
      this.temp.parentCodeLv3 = ''
      this.temp.parentCodeLv4 = ''
      if (this.temp.type === 'DEFECT') {
        this.lv1Options = await topLevelDefectCodes(1)
        this.lv2Options = await topLevelDefectCodes(2)
        this.lv3Options = await topLevelDefectCodes(3)
        this.lv4Options = await topLevelDefectCodes(4)
      } else if (this.temp.type === 'REPAIR') {
        this.lv1Options = await topLevelRepairCodes(1)
        this.lv2Options = await topLevelRepairCodes(2)
        this.lv3Options = await topLevelRepairCodes(3)
        this.lv4Options = await topLevelRepairCodes(4)
      }
    },
    async createData() {
      this.$refs['createForm'].validate(async(valid) => {
        if (valid) {
          if (this.temp.type) {
            if (this.temp.type === 'DEFECT') {
              await addDefectCode(this.temp)
            } else if (this.temp.type === 'REPAIR') {
              await addRepairCode(this.temp)
            }

            this.$notify({
              title: 'Success',
              message: this.temp.type + ' Code is Added Successfully',
              type: 'success',
              duration: 2000
            })
            this.createDialogVisible = false
            this.findForm.changeType = this.temp.type
            this.findForm.topLevelCode = null
            this.findForm.code = this.temp.code
            this.temp = {}
            this.onFind()
          } else {
            this.$notify({
              title: 'Warning',
              message: 'Please select a type.',
              type: 'warning',
              duration: 2000
            })
          }
        }
      })
    },
    async modifyCode(row) {
      if (this.findForm.changeType === 'DEFECT') {
        await updateDefectCode(row)
        this.$notify({
          title: 'Success',
          message: 'DEFECT Code is Updated Successfully',
          type: 'success',
          duration: 2000
        })
      } else if (this.findForm.changeType === 'REPAIR') {
        await updateRepairCode(row)
        this.$notify({
          title: 'Success',
          message: 'REPAIR Code is Updated Successfully',
          type: 'success',
          duration: 2000
        })
      }
      row.edit = false
      this.onFind()
    },
    async deleteCode(row) {
      this.$confirm('Do you delete the code?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        if (this.findForm.changeType === 'DEFECT') {
          await deleteDefectCode(row.id)
          this.$notify({
            title: 'Success',
            message: 'DEFECT Code is Deleted Successfully',
            type: 'success',
            duration: 2000
          })
        } else if (this.findForm.changeType === 'REPAIR') {
          await deleteRepairCode(row.id)
          this.$notify({
            title: 'Success',
            message: 'REPAIR Code is Deleted Successfully',
            type: 'success',
            duration: 2000
          })
        }
        this.onFind()
      })
    },
    async changeType() {
      this.findForm.topLevelCode = null
      this.findForm.code = null
      this.onFind()
    }
  }
}
</script>
<style lang="scss" scoped>
.el-input.is-disabled .el-input__inner {
    background-color: #1256de !important;
}
</style>
