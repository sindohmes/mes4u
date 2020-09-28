<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <!-- header title -->
        <aside>
          <strong>Completion Operation</strong>
        </aside>
        <!-- body contents -->
        <div class="mixin-components-container">
          <el-row>
            <!-- Scan Assy Barcode -->
            <el-card id="barcode" class="box-card" style="margin-bottom:10px;">
              <!-- title -->
              <div slot="header" class="clearfix">
                <strong>
                  <i class="el-icon-full-screen" />
                  <span>Scan Assy Barcode</span>
                </strong>
              </div>
              <!-- contents -->
              <el-row>
                <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
                  <el-input ref="barcode" v-model.trim="inputInfo.barcode" size="large" class="input-required-yellow" placeholder="Please enter an Assy Barcode" style="font-size:1rem;" clearable autofocus @keyup.enter.native="barcodeScan" />
                </el-col>
                <el-col :sm="24" :md="24" :lg="12">
                  <el-checkbox id="check" v-model="boxLabelPrintChk" style="margin-top:10px;">
                    Box Label Print
                  </el-checkbox>
                </el-col>
              </el-row>
            </el-card>
            <!-- Scan Result -->
            <el-card id="result" class="box-card" style="margin-bottom:10px; padding-bottom:20px;">
              <!-- title -->
              <div slot="header" class="clearfix">
                <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
                  <el-input v-model="inputInfo.item" size="large" class="resultbox" placeholder="Item Number" style="font-size:1rem;" readonly />
                </el-col>
                <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
                  <el-input v-model="inputInfo.serial" size="large" class="resultbox" placeholder="Serial Number" style="font-size:1rem;" readonly />
                </el-col>
              </div>
              <!-- contents -->
              <div>
                <el-col :span="24">
                  <resultbox
                    v-model="inputInfo.result"
                    :data="data"
                    placeholder="Scan Result"
                  />
                </el-col>
              </div>
            </el-card>
            <!-- Operation History -->
            <el-card id="history" class="box-card">
              <!-- title -->
              <div slot="header" class="clearfix">
                <strong>
                  <i class="el-icon-files" />
                  <span>Operation History</span>
                </strong>
              </div>
              <!-- contents -->
              <historytable :ref="historyData" :data="historyData" :list-loading="listLoading" :cols="cols" @sort-change="sortChange" />
              <pagination
                v-show="total > 0"
                :total="total"
                :page.sync="historyQuery.page"
                :limit.sync="historyQuery.limit"
                @pagination="getOpHistories"
              />
            </el-card>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import defaultSettings from '@/settings'
import { getOpHistories, createEolAssyBarcode } from '@/api/operation'
import { getItems } from '@/api/mdm'
import { getPrintingOperationPrograms } from '@/api/system'
import Historytable from '@/components/Historytable'
import Pagination from '@/components/Pagination'
import Resultbox from '@/components/Resultbox'
import { printLabel, settingValues } from '@/utils/print'

const { op_eol, op_inspection, historyTableDefault } = defaultSettings

const cols = [
  { prop: 'dispatchId', label: 'Job ID', width: 90 },
  { prop: 'lineName', label: 'Line', width: 90 },
  { prop: 'configIndicator', label: 'Assy Barcode', width: 220 },
  { prop: 'itemNumber', label: 'Item', width: 120 },
  { prop: 'serialNumber', label: 'Serial', width: 150 },
  { prop: 'timestampStr', label: 'Timestamp', width: 170 }
]

export default {
  name: 'OperationEol',
  components: { Historytable, Pagination, Resultbox },
  data() {
    return {
      boxLabelPrintChk: false, // Box Label Print Checkbox
      inputInfo: {
        barcode: '',
        item: '',
        serial: '',
        result: ''
      },
      resultDefault: true,
      resultColor1: false,
      resultColor2: false,
      resultSuccess: false,
      resultError: false,
      tableKey: 0,
      data: null,
      total: 0,
      listLoading: true,
      cols,
      historyData: null,
      historyQuery: {
        userid: null,
        optype: op_eol,
        dateFlag: 'TODAY',
        page: 1,
        limit: 10,
        sort: historyTableDefault.sort,
        sortprop: historyTableDefault.sortprop
      }
    }
  },
  computed: {
    ...mapGetters([
      'userid',
      'lang',
      'site'
    ])
  },
  mounted() {
    // vue open and inputInfo.barcode focus
    this.$refs.barcode.focus()

    // Get Operation History
    this.getOpHistories()
  },
  methods: {
    // Barcode Scan or Enter
    async barcodeScan() {
      // Barcode check
      if (this.inputInfo.barcode === '') {
        this.$message({
          message: 'Assy Barcode is required.',
          type: 'error',
          duration: 1500
        })
      } else {
        const params = {
          'p_barcode': this.fieldUpperCase(this.inputInfo.barcode),
          'p_lang': this.lang,
          'p_user_id': this.userid,
          'p_operation': op_eol,
          'p_insp_operation': op_inspection
        }
        const res = await createEolAssyBarcode(params)

        // Scan Result
        this.inputInfo.item = res.x_item_number
        this.inputInfo.serial = res.x_serial_number
        this.data = res.x_result

        if (res.x_result === 'OK') {
          this.inputInfo.result = '[' + res.x_result + '] ' + this.inputInfo.barcode

          // Box Label Print Check true - Print Call
          if (this.boxLabelPrintChk) {
            this.callPrint()
          }
        } else {
          this.inputInfo.result = '[' + res.x_result + '] ' + res.x_message
        }

        // Get Operation History
        this.getOpHistories()

        // Init inputInfo.barcode and focus
        this.inputInfo.barcode = ''
        this.$refs.barcode.focus()
      }
    },
    async callPrint() {
      // Set Printing Parameters
      const itemparams = {
        itemNumber: this.inputInfo.item,
        site: this.site
      }
      const itemlist = await getItems(itemparams)
      const itemid = itemlist[0].item_id

      // Set Printing Values
      const labelContent = await getPrintingOperationPrograms(op_eol, itemid)
      const labelValues = await settingValues(labelContent, op_eol, this.inputInfo)

      // Print Implementation
      try {
        printLabel(labelContent, labelValues)
      } catch (e) {
        this.$notify({
          title: 'Printing fail',
          message: 'No Printing Information',
          type: 'warning',
          duration: 2000
        })
      }
    },
    // get Operation History
    async getOpHistories() {
      this.listLoading = true
      this.historyQuery.userid = this.userid
      const list = await getOpHistories(this.historyQuery)

      this.historyData = list.items
      this.total = list.total
      this.listLoading = false
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
/* input required */
.input-required-yellow>>> input {
  background : #fcfc7e;
}
</style>
