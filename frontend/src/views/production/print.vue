<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Printout</strong>
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
                  style="width:100%; overflow:auto; height:200px;"
                  @current-change="selectedCurrentRow"
                >
                  <el-table-column label="ID" prop="id" min-width="50">
                    <template slot-scope="{row}">
                      <span>{{ row.id }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Line" align="center" min-width="90">
                    <template slot-scope="{row}">
                      <span>{{ row.line }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Family" align="center" min-width="120">
                    <template slot-scope="{row}">
                      <span>{{ row.family }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Item" align="center" min-width="120">
                    <template slot-scope="{row}">
                      <span>{{ row.item }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Date" align="center" min-width="120">
                    <template slot-scope="{row}">
                      <span>{{ row.start_date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Qty" align="center" min-width="70">
                    <template slot-scope="{row}">
                      <span>{{ row.qty }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="From S/N" align="center" min-width="120">
                    <template slot-scope="{row}">
                      <span>{{ row.min_sn }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="To S/N" align="center" min-width="120">
                    <template slot-scope="{row}">
                      <span>{{ row.max_sn }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="W/O" align="center" min-width="60">
                    <template slot-scope="{row}">
                      <span>{{ row.wo }}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card" style="margin-bottom:10px;">
              <div slot="header" class="clearfix">
                <el-row :gutter="10">
                  <el-col :lg="20">
                    <el-form label-position="left" label-width="100px">
                      <el-form-item id="labeltype" label="Label Type">
                        <Searchselect v-model="labelType" name="printingjoblabel" :itemid="selectedItemid" @labelList="getLabelContent" @change="showLabelParameters" />
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :lg="4">
                    <el-button id="serialguide" type="primary" round size="mini" style="vertical-align: text-bottom;" @click="guide" @click.prevent.stop="guide">Guide</el-button>
                  </el-col>
                </el-row>
              </div>
              <el-row id="labelparams" :gutter="10">
                <el-form ref="printForm" :model="printForm" class="form-container">
                  <el-col v-for="(item, idx) in labelViewParams" :key="idx" :span="customspan">
                    <el-form-item :label="item.label">
                      <el-input v-model="printForm.labelParams[idx]" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="customspan" :style="printbutton">
                    <Btn id="labelprintbtn" name="print" icon="el-icon-printer" @click="printLabel" />
                  </el-col>
                </el-form>
              </el-row>
            </el-card>
          </el-row>
          <el-row v-if="serialflag">
            <el-card class="box-card" style="margin-bottom:10px;">
              <div id="serialnumberguide" slot="header" class="clearfix">
                <h2>Serial Numbers</h2>
                <h4 style="margin-bottom: -10px">* If you select a serial number,</h4>
                <h5 style="margin-left: 10px; margin-bottom: -10px">First click: From S/N's value will be a selected serial number, To S/N's value will be interval serial number.</h5>
                <h5 style="margin-left: 10px; margin-bottom: 20px">Second click: To S/N's value will be updated.</h5>
                <h4>* If you change a serial interval, when To S/N's value will be From S/N's value + interval.</h4>
                <h4>* Zebra Label is printed only Internet Explorer.</h4>
              </div>
              <div>
                <el-form label-position="left" label-width="200px">
                  <el-form-item id="serialinterval" label="Serial Interval">
                    <el-row :gutter="10">
                      <el-input-number v-model="serialInterval" @input="changeInterval" />
                    </el-row>
                  </el-form-item>
                </el-form>
                <el-table
                  id="seriallist"
                  v-loading="seriallistLoading"
                  :data="seriallist"
                  height="500px"
                  border
                  fit
                  highlight-current-row
                  style="width: 100%;"
                  @current-change="selectedSerialCurrentRow"
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
                  <el-table-column label="Barcode">
                    <template slot-scope="{row}">
                      <span>{{ row.barcode }}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { mapGetters } from 'vuex'
import { parseTime } from '@/utils'
import waves from '@/directive/waves' // waves directive
import Searchselect from '@/components/Searchselect' // secondary package based on el-pagination
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'
import { getJobDispatchesV, getJobSerialNumbers } from '@/api/production'
import { printLabel } from '@/utils/print'
import parameters from '@/parameters'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from '@/steps'

const { match_parameters, const_parameters } = parameters

const listQuery = {
  item: '',
  line: '',
  wo: '',
  page: 1,
  limit: 100,
  datestart: null,
  dateend: null
}

const date = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
)

export default {
  name: 'LabelPrint',
  components: { Searchselect, Exportexcel, Btn },
  directives: { waves },
  data() {
    return {
      total: 0,
      listQuery,
      daterange: [date.getTime() - 7 * 3600 * 1000 * 24 * 5, date],
      listLoading: false,
      list: null,
      labelType: null,
      labelViewParams: [],
      labelList: null,
      labelContent: null,
      paramLength: 0,
      printForm: {
        labelParams: []
      },
      customspan: 24,
      printbutton: {
        height: null,
        'padding-top': null
      },
      selectedItemid: null,
      selectedJob: null,
      oldItemId: null,
      serialflag: false,
      seriallist: null,
      seriallistLoading: null,
      toggle: false,
      currentSelectedSerial: null,
      serialInterval: 0
    }
  },
  computed: {
    ...mapGetters(['lang', 'userid'])
  },
  methods: {
    guide() {
      if (this.labelList) {
        const driver = new Driver()
        if (this.serialflag) {
          driver.defineSteps(steps['LabelPrintDetail1'])
        } else {
          driver.defineSteps(steps['LabelPrintDetail2'])
        }
        driver.start()
      } else {
        this.$notify({
          title: 'Warning',
          message: 'Please select a label type.',
          type: 'warning',
          duration: 2000
        })
      }
    },
    getLineList(value) {
      this.linelist = value
    },
    async handleFilter() {
      this.listLoading = true
      this.listQuery.item = this.fieldUpperCase(this.listQuery.item)

      this.listQuery.datestart = parseTime(this.daterange[0])
      this.listQuery.dateend = parseTime(this.daterange[1])

      const { items, total } = await getJobDispatchesV(this.listQuery)
      this.total = total
      this.listLoading = false
      this.list = items
    },
    getLabelContent(value) {
      this.labelList = value
      this.showLabelParameters()
    },
    showLabelParameters(value) {
      if (this.labelList.length > 0) {
        this.labelContent = this.labelList.find(e => e.id === this.labelType)
        const parameters = this.labelContent.parameters.split(':')
        const labels = this.labelContent.labels.split(':')

        this.labelViewParams = []
        parameters.forEach((e, i) => {
          this.labelViewParams.push({ param: e, label: labels[i] })
        })

        this.paramLength = parameters.length

        if (this.paramLength > 0) {
          this.customspan = Math.floor(24 / (this.paramLength + 1))
        }

        if (this.labelContent.serialflag === 'Y') {
          this.serialflag = true
          this.getSerialList()
        } else {
          this.serialflag = false
        }
        this.parameterMapping()

        this.$nextTick(() => {
          // Button Height Resize
          var children = []
          this.$refs.printForm.$children.forEach(e => {
            children.push(e.$el.scrollHeight)
          })
          const maxHeight = children.reduce((a, b) => {
            return Math.max(a, b)
          })

          children = []
          this.$refs.printForm.$children.forEach(e => {
            children.push(e.$el.scrollHeight)
          })
          const minHeight = children.reduce((a, b) => {
            return Math.min(a, b)
          })

          this.printbutton.height = maxHeight + 'px'
          this.printbutton['padding-top'] = (maxHeight - minHeight - 22) + 'px'
        })
      } else {
        this.labelContent = null
        this.labelViewParams = null
        this.serialflag = false
      }
    },
    parameterMapping() {
      // Parameter Value Mapping
      this.labelViewParams.forEach((e, i) => {
        this.printForm.labelParams[i] = '' // Initialization

        const lparam = e.param
        const jparam = match_parameters.label.find(match => match.label === lparam)

        if (jparam) {
          const job = jparam.job
          this.printForm.labelParams[i] = this.selectedJob[job]
        } else if (const_parameters[lparam]) {
          this.printForm.labelParams[i] = const_parameters[lparam]
        }
      })

      this.handleParams()
    },
    selectedCurrentRow(val) {
      if (val) {
        this.selectedItemid = val.item_id
        this.selectedJob = val

        if (this.oldItemId === this.selectedItemid) {
          this.parameterMapping()
        }

        this.oldItemId = this.selectedItemid
      }
    },
    selectedSerialCurrentRow(val) {
      this.labelViewParams.forEach((e, i) => {
        if (!this.toggle) {
          if (e.param === 'p_from_sn') {
            this.printForm.labelParams[i] = val.serial
            this.handleParams()
            this.currentSelectedSerial = val
            this.changeInterval()
          }
        } else {
          if (e.param === 'p_to_sn') {
            this.printForm.labelParams[i] = val.serial
            this.handleParams()
          }
        }
      })
      this.toggle = !this.toggle
    },
    // Actually No action but for updating params, use this method.
    handleParams() {
      this.listLoading = true
      this.listLoading = false
    },
    // Print Implementation
    printLabel() {
      printLabel(
        this.labelContent,
        this.printForm.labelParams
      )
    },
    async getSerialList() {
      this.seriallistLoading = true
      this.seriallist = await getJobSerialNumbers(this.selectedJob.id)
      this.toggle = false
      this.currentSelectedSerial = this.seriallist[0]
      this.serialInterval = this.seriallist.length - 1
      this.seriallistLoading = false
    },
    changeInterval() {
      if (this.seriallist) {
        this.seriallist.forEach((e, i) => {
          if (e === this.currentSelectedSerial) {
            const intervalSerialValue = this.seriallist[i + this.serialInterval]

            if (intervalSerialValue) {
              this.labelViewParams.forEach((e, i) => {
                if (e.param === 'p_to_sn') {
                  this.printForm.labelParams[i] = intervalSerialValue.serial
                  this.handleParams()
                }
              })
            } else {
              this.$notify({
                title: 'Warning',
                message: 'Interval Value is out of range.',
                type: 'warning',
                duration: 2000
              })
            }
          }
        })
      }
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
