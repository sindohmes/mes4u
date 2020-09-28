<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Job Dispatches</strong>
        </aside>
        <div class="mixin-components-container">
          <el-row>
            <el-card class="box-card" style="margin-bottom:10px;">
              <div slot="header" class="clearfix">
                <el-row :gutter="10">
                  <el-form label-position="top" :inline="true" :model="listQuery">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                      <el-form-item id="searchitem" label="Item">
                        <el-input v-model="listQuery.item" placeholder="Item" class="filter-item" @keyup.enter.native="handleFilter" /> <!-- Text -->
                      </el-form-item>
                      <el-form-item id="searchline" label="Line">
                        <Searchselect v-model="listQuery.line" name="line" placeholder="Line" @linelist="getLineList" />
                      </el-form-item>
                      <el-form-item id="searchstatus" label="Status">
                        <Searchselect v-model="listQuery.status" name="jobstatus" placeholder="Status" />
                      </el-form-item>
                      <el-form-item id="searchjobid" label="ID">
                        <el-input v-model="listQuery.id" placeholder="ID" class="filter-item" @keyup.enter.native="handleFilter" />
                      </el-form-item>
                      <el-form-item id="searchdate" label="From-To Date">
                        <el-date-picker
                          v-model="daterange"
                          type="daterange"
                          range-separator="~"
                          start-placeholder="Start date"
                          end-placeholder="End date"
                        />
                      </el-form-item>
                      <el-form-item style="vertical-align: bottom">
                        <Btn id="searchbtn" name="search" @click="handleFilter" />
                        <Exportexcel id="exportjobs" :data="list" />
                      </el-form-item>
                    </el-col>
                  </el-form>
                </el-row>
              </div>
              <div>
                <el-table
                  id="joblist"
                  v-loading="listLoading"
                  :data="list"
                  border
                  fit
                  highlight-current-row
                  style="width: 100%;"
                >
                  <el-table-column label="ID" prop="id" min-width="50" fixed align="center">
                    <template slot-scope="{row}">
                      <span>{{ row.id }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Line" align="center" min-width="90" fixed>
                    <template slot-scope="{row}">
                      <span v-if="!row.edit" class="link-type" @click="handleUpdateJob(row)">{{ row.line }}</span>
                      <span v-else><el-input v-model="row.line" autofocus @keyup.enter.native="updateJob(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Family" align="center" min-width="150" fixed>
                    <template slot-scope="{row}">
                      <span>{{ row.family }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Item" align="center" min-width="150" fixed>
                    <template slot-scope="{row}">
                      <span>{{ row.item }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Date" align="center" min-width="150">
                    <template slot-scope="{row}">
                      <span>{{ row.start_date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Qty" align="center" min-width="70">
                    <template slot-scope="{row}">
                      <span>{{ row.qty }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="S/N Count" align="center" min-width="90">
                    <template slot-scope="{row}">
                      <span>{{ row.serialcount }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Status" align="center" min-width="150">
                    <template slot-scope="{row}">
                      <span>{{ row.status }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="W/O" align="center" min-width="120">
                    <template slot-scope="{row}">
                      <span>{{ row.wo }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Details" align="center" min-width="300" class-name="small-padding fixed-width" fixed="right">
                    <template slot-scope="{row}">
                      <Btn name="serial" icon="el-icon-document-copy" @click="getSerialList(row)" />
                      <Btn name="operation" icon="el-icon-receiving" @click="getOperationList(row)" />
                    </template>
                  </el-table-column>
                </el-table>

                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
                <el-row style="margin-top: 10px;" justify="end" type="flex">
                  <el-col :span="4">
                    <Btn id="createjobbtn" name="create" value="Create Dispatch Job" @click="handleCreateJob" />
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-row>

          <el-dialog :title="title" :visible.sync="dialogFormVisible" :before-close="closeDialog" width="90%">
            <template v-if="dialogStatus === 'serial'">
              <el-row style="margin-bottom: 10px">
                <el-col :span="12">
                  <Btn name="confirm" value="create serial numbers" @click="createSerial" />
                  <Btn name="cancel" value="cancel serial numbers" @click="cancelSerial" />
                </el-col>
                <el-col :span="12">
                  <Exportexcel :data="seriallist" />
                </el-col>
              </el-row>
              <el-table
                v-loading="seriallistLoading"
                :data="seriallist"
                height="500px"
                border
                fit
                highlight-current-row
                style="width: 100%;"
              >
                <el-table-column label="ID" type="index" min-width="60" />
                <el-table-column label="Item">
                  <template slot-scope="{row}">
                    <span>{{ row.item }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Serial">
                  <template slot-scope="{row}">
                    <span>{{ row.serial }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Seq" min-width="70">
                  <template slot-scope="{row}">
                    <span>{{ row.seq }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Status" min-width="150">
                  <template slot-scope="{row}">
                    <span>{{ row.status }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Barcode">
                  <template slot-scope="{row}">
                    <span>{{ row.barcode }}</span>
                  </template>
                </el-table-column>
              </el-table>
              <div slot="footer" class="dialog-footer">
                <Btn name="close" @click="closeDialog" />
              </div>
            </template>
            <template v-if="dialogStatus === 'operation'">
              <el-row style="margin-bottom: 10px">
                <el-col :span="12">
                  <Btn name="gn" value="Generate Operations" @click="generateOperation" />
                  <el-switch
                    v-model="operationAll"
                    active-text="All"
                    inactive-text="Active"
                    @change="changeOperation"
                  />
                </el-col>
                <el-col :span="12">
                  <Exportexcel :data="operationlist" />
                </el-col>
              </el-row>
              <el-table
                v-loading="operationlistLoading"
                :data="operationlist"
                height="500px"
                border
                fit
                highlight-current-row
                style="width: 100%;"
              >
                <el-table-column label="Seq" min-width="80" fixed>
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">{{ row.seq }}</span>
                    <span v-else><el-input v-model="row.seq" @keyup.enter.native="updateOperation(row)" /></span>
                  </template>
                </el-table-column>
                <el-table-column label="Operation" min-width="150" fixed>
                  <template slot-scope="{row}">
                    <span>{{ row.optype }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Required" min-width="90">
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">{{ row.required }}</span>
                    <span v-else><Searchselect v-model="row.required" name="yn" /></span>
                  </template>
                </el-table-column>
                <el-table-column label="Unique" min-width="80">
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">{{ row.uniquecheck }}</span>
                    <span v-else><Searchselect v-model="row.uniquecheck" name="yn" /></span>
                  </template>
                </el-table-column>
                <el-table-column label="Part Item" min-width="120">
                  <template slot-scope="{row}">
                    <span>{{ row.partitem }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Op. Desc" min-width="220">
                  <template slot-scope="{row}">
                    <span>{{ row.opdesc }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Type" min-width="60">
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">{{ row.barcodetype }}</span>
                    <span v-else><el-input v-model="row.barcodetype" @keyup.enter.native="updateOperation(row)" /></span>
                  </template>
                </el-table-column>
                <el-table-column label="Indicator" min-width="120">
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">{{ row.indicator }}</span>
                    <span v-else><el-input v-model="row.indicator" @keyup.enter.native="updateOperation(row)" /></span>
                  </template>
                </el-table-column>
                <template v-if="operationAll">
                  <el-table-column label="Disable Date" min-width="150">
                    <template slot-scope="{row}">
                      <span>{{ row.disabledate }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Operator" min-width="220">
                    <template slot-scope="{row}">
                      <span>{{ row.modifier }}</span>
                    </template>
                  </el-table-column>
                </template>
                <el-table-column label="Location" min-width="80">
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">{{ row.location }}</span>
                    <span v-else><el-input v-model="row.location" @keyup.enter.native="updateOperation(row)" /></span>
                  </template>
                </el-table-column>
                <el-table-column label="Length" min-width="80">
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">{{ row.length }}</span>
                    <span v-else><el-input v-model="row.length" @keyup.enter.native="updateOperation(row)" /></span>
                  </template>
                </el-table-column>
                <el-table-column label="Actions" align="center" min-width="270" class-name="small-padding fixed-width" fixed="right">
                  <template slot-scope="{row}">
                    <span v-if="!row.edit">
                      <Btn name="edit" @click="row.edit=!row.edit" />
                      <Btn name="delete" @click="deleteConfirm(row)" />
                    </span>
                    <span v-else>
                      <Btn name="confirm" @click="updateOperation(row)" />
                      <Btn name="cancel" @click="row.edit=!row.edit" />
                    </span>
                  </template>
                </el-table-column>
              </el-table>
              <div slot="footer" class="dialog-footer">
                <Btn name="close" @click="closeDialog" />
              </div>
            </template>
            <template v-if="dialogStatus === 'create'">
              <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="150px" style="margin-left:50px;">
                <el-form-item label="Item Number" prop="item">
                  <el-input ref="createItem" v-model="temp.item" />
                </el-form-item>
                <el-form-item label="Line" prop="line">
                  <Searchselect v-model="temp.line" name="line" placeholder="Line" @linelist="getLineList" />
                </el-form-item>
                <el-form-item label="Start Date" prop="start_date">
                  <el-date-picker v-model="temp.start_date" type="date" placeholder="Please pick a date" />
                </el-form-item>
                <el-form-item label="Quantity" prop="qty">
                  <el-input-number v-model="temp.qty" @keyup.enter.native="createJob()" />
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <Btn name="confirm" @click="createJob()" />
                <Btn name="cancel" @click="closeDialog" />
              </div>
            </template>
          </el-dialog>

        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getJobDispatchesV,
  getJobSerialNumbers,
  getJobDispatchOperations,
  updateJobDispatches,
  updateOperations,
  deleteOperations,
  createJobDispatch,
  createJobSerialNumbers,
  cancelJobSerialNumbers,
  createJobDpOperations
} from '@/api/production'
import { getLastUpdatedByName } from '@/api/mdm'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Searchselect from '@/components/Searchselect'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'
import defaultSettings from '@/settings'

const { not_delete_operation } = defaultSettings

const textMap = {
  create: 'Create W/O',
  operation: 'Operations',
  serial: 'Serial Numbers'
}

const listQuery = {
  item: '',
  line: '',
  wo: '',
  page: 1,
  limit: 10,
  datestart: null,
  dateend: null
}

const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

export default {
  name: 'JobDispatches',
  components: { Pagination, Searchselect, Exportexcel, Btn },
  directives: { waves },
  data() {
    return {
      total: 0,
      list: null,
      linelist: null,
      seriallist: null,
      operationlist: null,
      listQuery,
      daterange: [
        date.getTime() - 7 * 3600 * 1000 * 24,
        date.getTime() + 1 * 3600 * 1000 * 24
      ],
      testline: '',
      title: '',
      dialogFormVisible: false,
      dialogStatus: '',
      textMap,
      listLoading: false,
      seriallistLoading: false,
      operationlistLoading: false,
      operationAll: false,
      currentjob: null,
      oldline: null,
      temp: {
        item: '',
        line: '',
        start_date: new Date(),
        qty: ''
      },
      rules: {
        item: [{ required: true, message: 'item is required', trigger: 'change' }],
        line: [{ required: true, message: 'line is required', trigger: 'change' }],
        qty: [{ required: true, message: 'qty is required', trigger: 'change' }]
      },
      createjdObj: {
        line_name: '',
        lang: '',
        item_number: '',
        start_date: '',
        qty: '',
        userid: '',
        site: ''
      },
      detailjdObj: {
        dispatch_id: '',
        lang: '',
        userid: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'lang',
      'site',
      'userid'
    ])
  },
  methods: {
    getLineList(value) {
      this.linelist = value
    },
    handleFilter() {
      this.listQuery.page = 1
      this.listQuery.item = this.fieldUpperCase(this.listQuery.item)
      this.getList()
    },
    closeDialog() {
      this.dialogFormVisible = false
      if (this.dialogStatus !== 'create') {
        this.getList()
      }
    },
    handleCreateJob() {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.title = this.textMap[this.dialogStatus]

      this.$nextTick(() => {
        this.$refs.dataForm.resetFields()
        this.temp.line = this.listQuery.line
      })
    },
    async createSerial() {
      this.$confirm('Do you create serial numbers?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        const res = await createJobSerialNumbers(this.detailjdObj)
        if (res.result === 'OK') {
          this.$notify({
            title: 'Success',
            message: 'Serial Generate Successfully, ID:' + res.dispatch_id,
            type: 'success',
            duration: 2000
          })
        } else {
          this.$notify({
            title: 'Error',
            message: res.message,
            type: 'error',
            duration: 2000
          })
        }

        this.getSerialList(this.currentjob)
      })
    },
    async cancelSerial() {
      this.$confirm('Do you cancel serial numbers?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        const res = await cancelJobSerialNumbers(this.detailjdObj)
        if (res.result === 'OK') {
          this.$notify({
            title: 'Success',
            message: 'Cancel Successfully, ID:' + res.dispatch_id,
            type: 'success',
            duration: 2000
          })
        } else {
          this.$notify({
            title: 'Error',
            message: res.message,
            type: 'error',
            duration: 2000
          })
        }

        this.getSerialList(this.currentjob)
      })
    },
    async createJob() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          this.temp.item = this.fieldUpperCase(this.temp.item) // If item is null then it is not valid, so only apply uppercase.
          const line_name = this.linelist.find(line => line.id === this.temp.line).name
          this.createjdObj = {
            line_name: line_name,
            lang: this.lang,
            item_number: this.temp.item,
            start_date: parseTime(this.temp.start_date),
            qty: this.temp.qty,
            userid: this.userid,
            site: this.site
          }

          // Procedure
          const res = await createJobDispatch(this.createjdObj)

          if (res.result === 'OK') {
            this.$notify({
              title: 'Success',
              message: 'Generate Successfully, ID:' + res.dispatch_id,
              type: 'success',
              duration: 2000
            })

            this.listQuery.item = this.temp.item
            this.listQuery.line = this.temp.line

            this.daterange = [
              this.temp.start_date,
              this.temp.start_date.getTime() + 1 * 3600 * 1000 * 24
            ]
          } else {
            this.$notify({
              title: 'Error',
              message: res.message,
              type: 'error',
              duration: 2000
            })
          }

          this.dialogFormVisible = false
          this.handleFilter()
        }
      })
    },
    handleUpdateJob(row) {
      row.edit = !row.edit
      this.oldline = row.line
    },
    async updateJob(row) {
      if (row.line) {
        if (row.line !== this.oldline) {
          row.line = this.fieldUpperCase(row.line)

          this.$confirm('Do you change a line?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(async() => {
            await updateJobDispatches({ line: row.line }, row.id)
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          }).catch(() => {
            row.line = this.oldline
          })
        }
      } else {
        this.$notify({
          title: 'Error',
          message: 'Please input a line',
          type: 'error',
          duration: 2000
        })
        row.line = this.oldline
      }
      row.edit = false
    },
    async generateOperation() {
      const oldoplist = this.operationlist
      const res = await createJobDpOperations(this.detailjdObj)

      if (res.result === 'OK') {
        await this.getOperationList(this.currentjob)

        if (this.operationlist.length === 0) {
          this.$notify({
            title: 'Warning',
            message: 'No Registered Operation. ID:' + res.dispatch_id,
            type: 'warning',
            duration: 2000
          })
        } else if (JSON.stringify(this.operationlist) === JSON.stringify(oldoplist)) {
          this.$notify({
            title: 'Warning',
            message: 'No Change Detected, ID:' + res.dispatch_id,
            type: 'warning',
            duration: 2000
          })
        } else {
          this.$notify({
            title: 'Success',
            message: 'Operation Generate Successfully, ID:' + res.dispatch_id,
            type: 'success',
            duration: 2000
          })
        }
      } else {
        this.$notify({
          title: 'Error',
          message: res.message,
          type: 'error',
          duration: 2000
        })
      }
    },
    async updateOperation(row) {
      try {
        row.lastupdatedby = this.userid
        await updateOperations(row)
        this.getOperationList(this.currentjob)
        this.$notify({
          title: 'Success',
          message: 'Update Successfully',
          type: 'success',
          duration: 2000
        })
      } catch (e) {
        this.$notify({
          title: 'Error',
          message: 'Invalid Value is updated.',
          type: 'error',
          duration: 2000
        })
      }
    },
    deleteConfirm(row) {
      if (not_delete_operation.includes(row.optype)) {
        this.$notify({
          title: 'Error',
          message: 'Specific Operation is not deleted.',
          type: 'error',
          duration: 2000
        })
      } else {
        this.$confirm('Do you delete this operation?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.deleteOperation(row)
        })
      }
    },
    async deleteOperation(row) {
      await deleteOperations(row.id)

      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })

      this.getOperationList(this.currentjob)
    },
    async getList() {
      this.listLoading = true

      this.listQuery.datestart = parseTime(this.daterange[0]).substring(0, 10)
      this.listQuery.dateend = parseTime(this.daterange[1]).substring(0, 10)

      const { items, total } = await getJobDispatchesV(this.listQuery)
      this.total = total
      this.listLoading = false

      this.list = items.map(v => {
        this.$set(v, 'edit', false)
        return v
      })
    },
    async getSerialList(row) {
      this.detailjdObj = {
        dispatch_id: row.id,
        lang: this.lang,
        fixed_prefix: undefined,
        fixed_prod: undefined,
        userid: this.userid
      }
      this.currentjob = row
      this.seriallistLoading = true
      this.dialogStatus = 'serial'
      this.dialogFormVisible = true
      this.title = 'Job #' + row.id + ' ' + this.textMap[this.dialogStatus]

      this.seriallist = await getJobSerialNumbers(row.id)
      this.seriallistLoading = false
    },
    async getOperationList(row) {
      this.detailjdObj = {
        dispatch_id: row.id,
        lang: this.lang,
        userid: this.userid
      }
      this.operationlist = null
      this.currentjob = row
      this.operationlistLoading = true
      this.dialogStatus = 'operation'
      this.dialogFormVisible = true
      this.title = 'Job #' + row.id + ' ' + this.textMap[this.dialogStatus]

      const param = {
        id: row.id,
        flag: this.operationAll
      }

      const list = await getJobDispatchOperations(param)
      this.operationlistLoading = false

      this.operationlist = list.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        return v
      })

      if (this.operationAll) {
        await Promise.all(
          this.operationlist.map(async v => {
            const modifier = await getLastUpdatedByName(v.lastupdatedby)
            this.$set(v, 'modifier', modifier.name)
          })
        )
      }
    },
    changeOperation() {
      this.getOperationList(this.currentjob)
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
