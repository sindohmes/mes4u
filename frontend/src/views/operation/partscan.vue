<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Part Scan</strong>
        </aside>
        <div class="mixin-components-container">
          <el-row>
            <el-card class="box-card" style="margin-bottom:10px;">
              <div id="status">
                <el-row>
                  <el-col :span="12">
                    Operation Status: {{ status }}
                    <Btn id="reset" name="reset" icon="el-icon-setting" @click="resetStatus" />
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <el-card id="barcode" class="box-card" style="margin-bottom:10px;">
              <div slot="header" class="clearfix">
                <strong>
                  <i class="el-icon-full-screen" />
                  <span>Scan Assy Barcode</span>
                </strong>
              </div>
              <div>
                <el-row>
                  <el-col :span="12">
                    <el-input
                      ref="assy"
                      v-model="assybarcode"
                      size="large"
                      class="input-required-yellow"
                      placeholder="Please enter an Assy Barcode"
                      style="font-size:1rem;"
                      autofocus
                      @keyup.enter.native="handleAssyBarcodeScan"
                    />
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <el-card class="box-card" style="margin-bottom:10px;">
              <div slot="header" class="clearfix">
                <strong>
                  <i class="el-icon-full-screen" />
                  <span>Part Scan List</span>
                </strong>
              </div>
              <div>
                <el-row>
                  <el-col :span="24">
                    <el-table
                      id="partscanlist"
                      ref="parttable"
                      v-loading="listLoading"
                      :data="list"
                      border
                      fit
                      highlight-current-row
                      :row-class-name="tableRowClassName"
                      @select="handleSelect"
                    >
                      <el-table-column type="selection" />
                      <el-table-column label="Seq" type="index" align="center" />
                      <el-table-column label="Part Item" align="center">
                        <template slot-scope="{row}">
                          <span>{{ row.part }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Description" align="center">
                        >
                        <template slot-scope="{row}">
                          <span>{{ row.description }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Scan Part Barcode" align="center">
                        <template slot-scope="{row,$index}">
                          <template v-if="row.edit">
                            <el-input
                              :ref="'partdata'+row.index"
                              v-model="row.barcode"
                              class="edit-input"
                              size="small"
                              @keyup.enter.native="handlePartScan(row, $index)"
                            />
                          </template>
                          <span v-else>{{ row.barcode }}</span>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <el-card id="result" class="box-card" style="margin-bottom:10px;">
              <div>
                <resultbox
                  v-model="result"
                  :data="data"
                  placeholder="Scan Result"
                />
              </div>
            </el-card>
          </el-row>
          <el-row>
            <el-card id="history" class="box-card" style="margin-bottom:10px;">
              <div slot="header" class="clearfix">
                <strong>
                  <span>
                    <i class="el-icon-reading" /> Operation Histories
                  </span>
                </strong>
                <historytable :ref="historyData" :data="historyData" :list-loading="listLoading" :cols="cols" @sort-change="sortChange" />
                <pagination
                  v-show="total > 0"
                  :total="total"
                  :page.sync="historyQuery.page"
                  :limit.sync="historyQuery.limit"
                  @pagination="getOpHistories"
                />
              </div>
            </el-card>
          </el-row>
        </div>
      </div>

      <!-- Modal -->
      <el-dialog title="Operation Setting" :visible.sync="dialogFormVisible" width="90%">
        <el-row style="margin-bottom: 10px" :gutter="10">
          <el-col :span="12">
            <el-input v-model="settingbarcode" size="large" readonly style="font-size:1rem;" />
          </el-col>
          <el-col :span="12">
            <Btn name="confirm" value="set" @click="setOperation" />
          </el-col>
        </el-row>
        <el-table
          ref="settingtable"
          :data="settinglist"
          border
          fit
          highlight-current-row
          style="width: 100%;"
        >
          <el-table-column type="selection" />
          <el-table-column label="ID">
            <template slot-scope="{row}">
              <span>{{ row.dispatch_operation_id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Seq">
            <template slot-scope="{row}">
              <span>{{ row.operation_seq_num }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Operation Desc">
            <template slot-scope="{row}">
              <span>{{ row.operation_desc }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Required">
            <template slot-scope="{row}">
              <span>{{ row.required_flag }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Part Item">
            <template slot-scope="{row}">
              <span>{{ row.part_item_number }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Indicator">
            <template slot-scope="{row}">
              <span>{{ row.barcode_indicator }}</span>
            </template>
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <Btn name="close" @click="dialogFormVisible=false" />
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import defaultSettings from '@/settings'
import {
  getPartStatus,
  checkAssyBarcode,
  getOpHistories,
  getJobDispatchOperationList,
  getUserOperation,
  createUserOperation,
  createTraceOpHistory,
  dispatchOpHisChk,
  deleteUserOperation
} from '@/api/operation'
import Historytable from '@/components/Historytable'
import Pagination from '@/components/Pagination'
import Resultbox from '@/components/Resultbox'
import Btn from '@/components/Btn'

const { op_trace, historyTableDefault } = defaultSettings

const cols = [
  { prop: 'dispatchId', label: 'Job ID', width: 90 },
  { prop: 'lineName', label: 'Line', width: 90 },
  { prop: 'itemNumber', label: 'Item', width: 120 },
  { prop: 'serialNumber', label: 'Serial', width: 150 },
  { prop: 'timestampStr', label: 'Timestamp', width: 160 },
  { prop: 'operationDesc', label: 'Desc', width: 270 },
  { prop: 'partItemNumber', label: 'Part Item', width: 120 },
  { prop: 'resultValue', label: 'Part Barcode', width: 220 }
]
const statusList = ['Assigned', 'Not Assigned']

export default {
  name: 'OperationPartscan',
  components: { Historytable, Pagination, Resultbox, Btn },
  data() {
    return {
      assybarcode: null,
      status: '',
      list: null,
      settinglist: null,
      result: null,
      dialogFormVisible: false,
      settingbarcode: '',
      scanitem: '',
      scanserial: '',
      listLoading: false,
      data: null,
      dispatchoperationid: null,
      cols,
      total: 0,
      historyData: null,
      historyQuery: {
        userid: null,
        optype: op_trace,
        dateFlag: 'TODAY',
        page: 1,
        limit: 10,
        sort: historyTableDefault.sort,
        sortprop: historyTableDefault.sortprop
      }
    }
  },
  computed: {
    ...mapGetters(['userid', 'lang'])
  },
  mounted() {
    this.getStatus()
    this.getOpHistories()
  },
  methods: {
    async getStatus() {
      await this.getPartStatus(this.userid)

      if (this.list) {
        this.$refs['parttable'].toggleAllSelection()

        this.list.forEach(element => {
          this.$set(element, 'edit', true)
        })
      }

      this.setAssyFocus()
    },
    async getPartStatus() {
      const partlist = await getPartStatus(this.userid)

      if (partlist.length > 0) {
        this.status = statusList[0]
        this.list = partlist
        this.scanitem = partlist[0].assy
      } else {
        this.status = statusList[1]
      }
    },
    resetStatus() {
      this.status = statusList[1]
      this.assybarcode = ''
      this.list = null
      this.setAssyFocus()
    },
    async getOpHistories() {
      this.listLoading = true
      this.historyQuery.userid = this.userid

      const list = await getOpHistories(this.historyQuery)
      this.historyData = list.items
      this.total = list.total
      this.listLoading = false
    },
    async setOperation() {
      const selection = this.$refs['settingtable'].selection
      var idx = 1

      // Previous Operation Recent Flag No Change
      await deleteUserOperation(this.userid)

      await selection.reduce(async(a, b) => {
        return a.then(async() => {
          const params = {
            userid: this.userid,
            seq: idx++,
            opid: b.operation_id,
            item: b.assy_item_number
          }

          await createUserOperation(params)
        })
      }, Promise.resolve())

      this.dialogFormVisible = false
      this.resetStatus()
      this.getStatus()
    },
    setAssyFocus() {
      this.$refs['assy'].focus()
    },
    handleSelect(select, row) {
      if (row.edit === true) {
        row.edit = false
      } else {
        row.edit = true
      }
    },
    resultMessage(res, msg, barcode) {
      this.data = res

      if (res === 'OK') {
        this.result = '[' + res + '] ' + barcode
      } else {
        this.result = '[' + res + '] ' + msg
      }
    },
    async handleAssyBarcodeScan() {
      this.assybarcode = this.fieldUpperCase(this.assybarcode)
      const info = await checkAssyBarcode(this.assybarcode, this.lang)
      const previtem = this.scanitem
      this.scanitem = info.x_item_number
      this.scanserial = info.x_serial_number

      if (this.status === statusList[0]) {
        this.resultMessage(info.x_result, info.x_message, this.assybarcode)

        if (info.x_result === 'OK') {
          if (previtem !== info.x_item_number) {
            const params = {
              userid: this.userid,
              item: this.scanitem
            }

            const useropresult = await getUserOperation(params)

            this.$nextTick(() => {
              if (useropresult === 'NG') {
                this.handleOperationSetting()
              } else {
                this.resetStatus()
                this.getStatus()

                this.$notify({
                  title: 'Success',
                  message: 'The setted item is changed. please re-scan a barcode.',
                  type: 'success',
                  duration: 2000
                })
              }
            })
          } else {
            this.getRecentPartBarcode()
            this.$refs['partdata0'].focus()
          }
        } else {
          this.assybarcode = ''
          this.$refs['assy'].focus()
        }
      } else {
        this.handleOperationSetting()
      }
    },
    async getRecentPartBarcode() {
      await Promise.all(
        this.list.map(async e => {
          this.$set(e, 'barcode', '')

          const param = {
            opid: e.operation_id,
            lang: this.lang,
            item: this.scanitem,
            serial: this.scanserial
          }

          const res = await dispatchOpHisChk(param)
          this.$set(e, 'barcode', res)

          return e
        })
      )
    },
    async handleOperationSetting() {
      this.dialogFormVisible = true
      this.settingbarcode = this.assybarcode

      const param = {
        item: this.scanitem,
        serial: this.scanserial,
        operation: op_trace
      }

      const oplist = await getJobDispatchOperationList(param)
      this.settinglist = oplist
    },
    async handlePartScan(row, index) {
      row.barcode = this.fieldUpperCase(row.barcode)
      const param = {
        item: this.scanitem,
        lang: this.lang,
        serial: this.scanserial,
        partbarcode: row.barcode,
        opid: row.operation_id,
        userid: this.userid
      }

      const val = await createTraceOpHistory(param)
      this.resultMessage(val.result, val.message, row.barcode)

      if (val.result === 'OK') {
        this.nextPart(row)
      } else {
        row.barcode = ''
        this.$refs['partdata' + index].focus()
      }
    },
    nextPart(row) {
      var nextflag = false
      var nextrow = null

      this.$refs['parttable'].selection.forEach((e, i) => {
        if (nextflag === true) {
          nextrow = e
          nextflag = false
        }
        if (row === e) {
          nextflag = true
        }
      })

      if (nextrow) {
        this.$refs['parttable'].data.forEach((e, i) => {
          if (e === nextrow) {
            this.$refs['partdata' + i].focus()
          }
        })
      } else {
        this.resetStatus()
        this.getStatus()
        this.getOpHistories()
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
    },
    sortChange(val) {
      this.historyQuery.sortprop = val.column
      this.historyQuery.sort = val.order
      this.getOpHistories()
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
<style>
.el-table .warning-row {
  background: #e7ecef;
}
.el-table th {
  color: white;
  background-color: #324157;
}
</style>
