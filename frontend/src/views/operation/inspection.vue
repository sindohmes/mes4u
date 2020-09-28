<template>
  <div class="components-container">
    <aside><strong>Inline Inspection</strong></aside>
    <el-row>
      <el-col :sm="24" :md="24" :lg="14">
        <!-- <div class="components-container"> -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <strong>
              <i class="el-icon-full-screen" />
              <span>Scan Assy Barcode</span>
            </strong>
          </div>
          <div id="barcode" style="margin-bottom:15px;">
            <el-row>
              <el-col :xs="24" :sm="24" :md="6" class="text-center">
                <Btn id="reset" name="reset" icon="el-icon-setting" @click="resetInfo" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="18">
                <el-input ref="config" v-model="inputConfig" size="large" class="toupper" placeholder="Please input Config Label" clearable autofocus @keyup.enter.native="checkAssyInfo" />
              </el-col>
            </el-row>
          </div>
          <div style="margin-bottom:50px;">
            <resultbox
              id="result"
              v-model="out_message"
              :data="data"
              placeholder="Scan Result"
            />

            <el-table
              id="inspectionlist"
              ref="tableData"
              :data="tableData"
              border
              style="width: 100%"
              highlight-current-row
              :row-class-name="tableRowClassName"
              @select="handleSelection"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                type="selection"
                align="center"
                width="80"
              />
              <el-table-column
                prop="operation_desc"
                label="Operation Name"
                width="180"
              />
              <el-table-column
                label="Result"
              >
                <div slot-scope="{row}">
                  <!--{{row}}-->
                  <template>
                    <el-input :ref="'result' + row.index" v-model="row.result" :readonly="row.isReadonly" class="toupper" @keyup.enter.native="createInspection(row.index)" />
                  </template>
                </div>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
        <!-- </div>     -->
      </el-col>
      <el-col id="inspectionitem" :sm="24" :md="24" :lg="10">
        <el-form label-width="30%" class="form-container">
          <el-form-item label="Item Number">
            <el-input v-model="itemNumber" class="resultbox" placeholder="Item Number" style="width:80%" readonly />
          </el-form-item>
          <el-form-item label="Serial Number">
            <el-input v-model="serialNumber" class="resultbox" placeholder="Serial Number" style="width:80%" readonly />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :sm="24" :md="24" :lg="24">
        <el-card id="history" class="box-card">
          <div slot="header" class="clearfix">
            <strong><span><i class="el-icon-reading" /> [Today] Inspection Histories  </span></strong>
          </div>
          <historytable
            :data="historyData"
            :cols="cols"
            :list-loading="listLoading"
            @sort-change="sortChange"
          />
          <pagination
            v-show="total > 0"
            :total="total"
            :page.sync="historyQuery.page"
            :limit.sync="historyQuery.limit"
            @pagination="getOpHistories"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { checkAssyBarcode, getInspectionList, getOpHistories, createInspectionOperation } from '@/api/operation'
import moment from 'moment'
import defaultSettings from '@/settings'
import { mapGetters } from 'vuex'
import Historytable from '@/components/Historytable'
import Pagination from '@/components/Pagination'
import Resultbox from '@/components/Resultbox'
import Btn from '@/components/Btn'

const { op_inspection, historyTableDefault } = defaultSettings

const cols =
[
  { prop: 'dispatchId', label: 'Job ID', width: 90 },
  { prop: 'lineName', label: 'Line', width: 90 },
  { prop: 'itemNumber', label: 'Item', width: 120 },
  { prop: 'serialNumber', label: 'Serial', width: 150 },
  { prop: 'operationDesc', label: 'Desc', width: 220 },
  { prop: 'timestampStr', label: 'Timestamp', width: 170 },
  { prop: 'passfail', label: 'Passfail', width: 100 }
]

export default {
  name: 'OperationInspection',
  components: { Historytable, Pagination, Resultbox, Btn },
  data() {
    return {
      inputConfig: '',
      itemNumber: '',
      serialNumber: '',
      consecutiveFlag: false,
      out_message: 'Scan Assy Barcode',
      currentRow: 0,
      tableData: [],
      historyData: [],
      resultDefault: true,
      resultSuccess: false,
      resultError: false,
      data: null,
      cols,
      total: 0,
      listLoading: false,
      historyQuery: {
        userid: null,
        optype: op_inspection,
        dateFlag: 'TODAY',
        page: 1,
        limit: 10,
        sort: historyTableDefault.sort,
        sortprop: historyTableDefault.sortprop,
        recentFlag: 'All'
      }
    }
  },
  computed: {
    ...mapGetters([
      'userid', 'lang'
    ])
  },
  mounted() {
    this.getOpHistories()
  },
  methods: {
    resetInfo() {
      this.inputConfig = ''
      this.itemNumber = ''
      this.serialNumber = ''
      this.out_message = ''
      this.currentRow = 0
      this.tableData = []
      this.historyData = []
      this.consecutiveFlag = false
    },
    moment: function(date) {
      return moment(date).format('YYYY-MM-DD')
    },
    async createInspection(currentRow) {
      this.currentRow = currentRow + 1
      const txn_date = this.moment(new Date())
      const params = {
        'p_item_number': this.itemNumber,
        'p_lang': this.lang,
        'p_serial_number': this.serialNumber,
        'p_passfail': this.fieldUpperCase(this.tableData[this.currentRow - 1].result),
        'p_operation_id': this.tableData[this.currentRow - 1].operation_id,
        'p_user_id': this.userid,
        'p_txn_date': txn_date,
        'p_op_chk_flag': 'Y'
      }
      const res = await createInspectionOperation(params)
      this.data = res.x_result

      if (res.x_result === 'OK') {
        this.out_message = '[' + res.x_result + '] ' + this.tableData[this.currentRow - 1].result.toUpperCase()
        this.tableData[this.currentRow - 1].result = ''
        this.nextInspection()
        this.getOpHistories()
      } else {
        this.tableData[this.currentRow - 1].result = ''
        this.out_message = '[' + res.x_result + '] ' + res.x_message
      }
    },
    async getOpHistories() {
      this.listLoading = true
      this.historyQuery.userid = this.userid

      const list = await getOpHistories(this.historyQuery)
      this.historyData = list.items
      this.total = list.total
      this.listLoading = false
    },
    async checkAssyInfo() {
      this.inputConfig = this.fieldUpperCase(this.inputConfig)
      const res = await checkAssyBarcode(this.inputConfig, this.lang)
      if (this.itemNumber === res.x_item_number) {
        this.consecutiveFlag = true
      } else {
        this.consecutiveFlag = false
      }
      this.itemNumber = res.x_item_number
      this.serialNumber = res.x_serial_number
      this.data = res.x_result

      if (res.x_result === 'OK') {
        this.out_message = '[' + res.x_result + '] ' + this.serialNumber

        const insp_params = {
          'item': res.x_item_number,
          'serial': res.x_serial_number,
          'operation': op_inspection
        }

        const listres = await getInspectionList(insp_params)

        if (listres.length === 0) {
          this.data = 'NG'
          this.out_message = '[' + 'NG' + '] ' + 'There is no inspection operation for this item.'
        }

        if (!this.consecutiveFlag) {
          this.tableData = listres
        }
        this.currentRow = 0
        this.nextInspection(!this.consecutiveFlag)
        this.getOpHistories()
      } else {
        this.out_message = '[' + res.x_result + '] ' + res.x_message
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
      return ''
    },
    handleSelection(allRow, targetRow) {
      this.tableData[targetRow.index].isReadonly = !this.tableData[targetRow.index].isReadonly
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    nextInspection(drawLines) {
      if (this.currentRow === this.tableData.length) {
        this.currentRow = 0
        this.$refs.config.focus()
        this.inputConfig = ''
        this.$refs.tableData.setCurrentRow()
      } else {
        this.$refs.tableData.setCurrentRow(this.tableData[this.currentRow])

        if (drawLines) {
          this.$nextTick(function() {
            if (this.tableData) {
              this.tableData.forEach((e, i) => {
                this.$refs.tableData.toggleRowSelection(e)
                e.isReadonly = false
              })
            }
          })
        }
        this.$nextTick(function() {
          if (this.tableData[this.currentRow].isReadonly === true) {
            this.currentRow = this.currentRow + 1
            this.nextInspection()
          } else {
            this.$refs['result' + (this.currentRow)].focus()
            this.currentRow = this.currentRow + 1
          }
        })
      }
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

<style scoped>
  .toupper>>> input{
    text-transform : uppercase;
  }
  .toupper>>> input:read-only{
    background-color : #f0f0f0 !important;
  }
  .toupper>>> input:focus{
    background-color : #ffffc1;
  }
  .el-table>>> .warning-row>>> {
    background: #e7ecef;
  }
  .el-table>>> th {
    color : white;
    background-color: #324157;
  }
  .box-card>>> {
    margin-bottom : 15px;
  }
  .el-form-item>>>{
    margin : 2px;
  }

</style>
