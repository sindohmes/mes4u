<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <!-- header title -->
        <aside>
          <strong>Start Operation</strong>
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
                  <el-input ref="barcode" v-model.trim="inputBarcode" size="large" class="input-required-yellow" placeholder="Please enter an Assy Barcode" style="font-size:1rem;" clearable autofocus @keyup.enter.native="barcodeScan" />
                </el-col>
              </el-row>
            </el-card>
            <!-- Scan Result -->
            <el-card id="result" class="box-card" style="margin-bottom:10px; padding-bottom:20px;">
              <!-- title -->
              <div slot="header" class="clearfix">
                <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
                  <el-input v-model="inputItem" size="large" class="resultbox" placeholder="Item Number" style="font-size:1rem;" readonly />
                </el-col>
                <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
                  <el-input v-model="inputSerial" size="large" class="resultbox" placeholder="Serial Number" style="font-size:1rem;" readonly />
                </el-col>
              </div>
              <!-- contents -->
              <div>
                <el-col :span="24">
                  <resultbox
                    v-model="inputResult"
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
import { getOpHistories, createSolAssyBarcode } from '@/api/operation'
import Historytable from '@/components/Historytable'
import Pagination from '@/components/Pagination'
import Resultbox from '@/components/Resultbox'

const { op_sol, historyTableDefault } = defaultSettings

const cols = [
  { prop: 'dispatchId', label: 'Job ID', width: 90 },
  { prop: 'lineName', label: 'Line', width: 90 },
  { prop: 'itemNumber', label: 'Item', width: 120 },
  { prop: 'serialNumber', label: 'Serial', width: 150 },
  { prop: 'timestampStr', label: 'Timestamp', width: 170 },
  { prop: 'recentFlag', label: 'Recent Flag', width: 100 }
]

export default {
  name: 'OperationSol',
  components: { Historytable, Pagination, Resultbox },
  data() {
    return {
      inputBarcode: '',
      inputItem: '',
      inputSerial: '',
      inputResult: '',
      tableKey: 0,
      total: 0,
      listLoading: true,
      cols,
      data: null,
      historyData: null,
      historyQuery: {
        userid: null,
        optype: op_sol,
        dateFlag: 'TODAY',
        recent_flag: 'All',
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
      'lang'
    ])
  },
  mounted() {
    // vue open and inputBarcode focus
    this.$refs.barcode.focus()

    // Get Operation History
    this.getOpHistories()
  },
  methods: {
    // Barcode Scan or Enter
    async barcodeScan() {
      // Barcode check
      if (this.inputBarcode === '') {
        this.$message({
          message: 'Assy Barcode is required.',
          type: 'error',
          duration: 1500
        })
      } else {
        const params = {
          'p_barcode': this.fieldUpperCase(this.inputBarcode),
          'p_lang': this.lang,
          'p_operation': op_sol,
          'p_user_id': this.userid,
          'p_operation_chk': 'Y',
          'p_previous_operation_chk': 'Y',
          'p_work_station': '',
          'p_comments': ''
        }
        const response = await createSolAssyBarcode(params)

        // Scan Result
        this.inputItem = response.x_item_number
        this.inputSerial = response.x_serial_number
        this.data = response.x_result

        if (response.x_result === 'OK') {
          this.inputResult = '[' + response.x_result + '] ' + this.inputBarcode
        } else {
          this.inputResult = '[' + response.x_result + '] ' + response.x_message
        }

        // Get Operation History
        this.getOpHistories()

        // Init inputBarcode and focus
        this.inputBarcode = ''
        this.$refs.barcode.focus()
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
