<template>
  <div class="components-container">
    <aside><strong>Inline Repair</strong></aside>
    <el-row>
      <el-col :sm="24" :md="24" :lg="24">
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
            <Resultbox
              id="result"
              v-model="out_message"
              :data="data"
              placeholder="Scan Result"
            />
            <el-table
              id="repairlist"
              ref="tableData"
              :data="tableData"
              border
              class="maintab"
              style="width: 100%"
              highlight-current-row
              :row-class-name="tableRowClassName"
            >
              <el-table-column
                prop="operation_desc"
                label="Inspection Name"
                width="180"
              />
              <el-table-column
                prop="time_stamp"
                label="Time Stamp"
                width="180"
              />
              <el-table-column
                prop="user_name"
                label="User"
                width="180"
              />
              <el-table-column
                label="Actions"
                align="center"
              >
                <div slot-scope="{row}">
                  <template>
                    <Btn name="create" value="Create Repair" @click="createRepair(row.index)" />
                  </template>
                </div>
              </el-table-column>
            </el-table>
          </div>
          <div id="repairitem" style="margin-top:-30px;">
            <el-row>
              <el-col :lg="12">
                <el-input v-model="itemNumber" size="large" class="resultbox toupper" placeholder="Item Number" style="width:100%;" readonly />
              </el-col>
              <el-col :lg="12">
                <el-input v-model="serialNumber" size="large" class="resultbox toupper" placeholder="Serial Number" style="width:100%;" readonly />
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- Repair Modal  -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="repairrules" :model="repairSet" label-position="right" label-width="180px" style="margin-left:20px;margin-right:20px;">
        <el-form-item label="Operation" prop="inspection">
          <el-input v-model="repairSet.inspection" class="toupper" placeholder="Inspection" required readonly />
        </el-form-item>

        <el-form-item label="Defect Code" prop="defectcode">
          <el-input v-model="repairSet.defectcode" class="toupper" placeholder="Defect code" required readonly />
          <DefectCodeList v-model="repairSet.defectcode" placeholder="Defect Code" :defaultvalue="repairSet.defectcode" required @setDefectCode="setDefectCode" />
        </el-form-item>

        <el-form-item label="Repair Code" prop="repaircode">
          <el-input v-model="repairSet.repaircode" class="toupper" placeholder="Repair code" required readonly />
          <RepairCodeList v-model="repairSet.repaircode" placeholder="Repair Code" :defaultvalue="repairSet.repaircode" required @setRepairCode="setRepairCode" />
        </el-form-item>

        <el-form-item label="Severity" prop="severity">
          <el-select v-model="repairSet.severity" value-key="value" filterable placeholder="Severity">
            <el-option
              v-for="item in [{value:'Minor', label:'Minor'}, {value:'Major', label:'Major'}, {value:'Critical', label:'Critical'}]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Defect type" prop="defectocdeflag">
          <el-select v-model="repairSet.defecttype" value-key="value" filterable placeholder="Defect Type">
            <el-option
              v-for="item in [{value:'Event'}, {value:'Intervention'}, {value:'Failure'}]"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Repair Part Barcode" prop="partbarcode">
          <el-input v-model="repairSet.partbarcode" class="toupper" />
        </el-form-item>

        <el-form-item label="Comments" prop="comments">
          <el-input v-model="repairSet.comments" />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <Btn name="confirm" @click="dialogStatus==='create'?createData():updateData()" />
        <Btn name="cancel" @click="dialogFormVisible = false" />
      </div>
    </el-dialog>
    <el-row>
      <el-col :sm="24" :md="24" :lg="24">
        <el-card id="history" class="box-card">
          <div slot="header" class="clearfix">
            <strong><span><i class="el-icon-reading" />Repair History</span></strong>
          </div>
          <el-table
            ref="repairData"
            :data="repairData"
            border
            style="width: 100%"
            highlight-current-row
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="inspection" label="Inspection" width="180" />
            <el-table-column prop="defectcode" label="Defect Code" width="180" />
            <el-table-column prop="repaircode" label="Repair Code" width="180" />
            <el-table-column prop="severity" label="Severity" width="180" />
            <el-table-column prop="defecttype" label="Defect Type" width="180" />
            <el-table-column prop="partbarcode" label="Part Barcode" width="280" />
            <el-table-column prop="worker" label="Worker" width="180" />
            <el-table-column prop="timestamp" label="Time Stamp" width="180" />
            <el-table-column prop="comments" label="Comments" width="280" />

            <el-table-column
              fixed="right"
              label="Actions"
              width="180"
              align="center"
              class-name="small-padding fixed-width"
            >
              <div slot-scope="{row}">
                <template>
                  <Btn name="edit" value="update" @click="updateRepair(row.index)" />
                </template>
              </div>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getOpFailed, checkBoxBarcode, createRepairOperation, updateRepairOperation, repairHistoryView } from '@/api/operation'
import Resultbox from '@/components/Resultbox'
import DefectCodeList from '@/components/DefectCodeList'
import RepairCodeList from '@/components/RepairCodeList'
import Btn from '@/components/Btn'
import defaultSettings from '@/settings'

const { op_inspection } = defaultSettings

export default {
  name: 'OperationRepair',
  components: { Resultbox, DefectCodeList, RepairCodeList, Btn },
  data() {
    return {
      inputConfig: '',
      itemNumber: '',
      serialNumber: '',
      out_message: 'Scan Assy Barcode',
      tableData: [],
      repairData: [],
      resultDefault: true,
      resultSuccess: false,
      resultError: false,
      data: null,
      total: 0,
      listLoading: false,
      dialogFormVisible: false,
      downloadLoading: false,
      dialogStatus: '',
      textMap: {
        update: 'Repair Edit',
        create: 'Repair Create'
      },
      repairrules: {
        defectcode: [{ required: true, message: 'defect code is required', trigger: 'change' }],
        repaircode: [{ required: true, message: 'repair code is required', trigger: 'change' }],
        severity: [{ required: true, message: 'severity is required', trigger: 'change' }]
      },
      repairSet: {}
    }
  },
  computed: {
    ...mapGetters([
      'userid', 'lang'
    ])
  },
  methods: {
    setDefectCode(val) {
      this.repairSet.defectcode = val.defect_code
    },
    setRepairCode(val) {
      this.repairSet.repaircode = val.repair_code
    },
    resetInfo() {
      this.inputConfig = ''
      this.itemNumber = ''
      this.serialNumber = ''
      this.out_message = ''
      this.currentRow = 0
      this.tableData = []
      this.selectedOperation = ''
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
      return ''
    },
    updateRepair(val) {
      this.repairSet = this.repairData[val]
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    async updateData() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          const params = {
            'p_item_number': this.fieldUpperCase(this.itemNumber),
            'p_repair_history_id': this.repairSet.id,
            'p_qa_history_id': null,
            'p_lang': this.lang,
            'p_defect_type': this.repairSet.defecttype,
            'p_degree': this.repairSet.severity,
            'p_fault': this.repairSet.fault,
            'p_serial_number': this.fieldUpperCase(this.serialNumber),
            'p_defect_code': this.fieldUpperCase(this.repairSet.defectcode),
            'p_repair_code': this.fieldUpperCase(this.repairSet.repaircode),
            'p_item_barcode': this.fieldUpperCase(this.repairSet.partbarcode),
            'p_subsystem_code': this.repairSet.subsystem,
            'p_pagecount': this.repairSet.pagecount,
            'p_comments': this.repairSet.comments,
            'p_inspection': this.fieldUpperCase(this.repairSet.inspection),
            'p_user_id': this.userid
          }
          const res = await updateRepairOperation(params)

          if (res.x_repair_result === 'OK') {
            this.out_message = '[' + res.x_repair_result + ']'
            this.findRepairs()
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          } else {
            this.out_message = '[' + res.x_repair_result + '] ' + res.x_repair_message
            this.$notify({
              title: 'Error',
              message: res.x_repair_message,
              type: 'error',
              duration: 2000
            })
          }
          this.dialogFormVisible = false
        }
      })
    },
    createRepair(val) {
      if (val < 0) {
        this.$notify({
          title: 'Error',
          message: 'There are no failed inspection.',
          type: 'error',
          duration: 2000
        })
      } else {
        this.resetSet()
        this.repairSet.inspection = this.tableData[val].operation_desc
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      }
    },
    resetSet() {
      this.repairSet = {
        defectcode: '',
        repaircode: '',
        comments: '',
        severity: '',
        defecttype: '',
        partboarcode: '',
        fault: '',
        subsystem: '',
        pagecount: '',
        inspection: '',
        id: ''
      }
    },
    async createData() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          const params = {
            'p_item_number': this.fieldUpperCase(this.itemNumber),
            'p_repair_history_id': null,
            'p_qa_history_id': null,
            'p_lang': this.lang,
            'p_defect_type': this.repairSet.defecttype,
            'p_degree': this.repairSet.severity,
            'p_fault': this.repairSet.fault,
            'p_serial_number': this.fieldUpperCase(this.serialNumber),
            'p_defect_code': this.fieldUpperCase(this.repairSet.defectcode),
            'p_repair_code': this.fieldUpperCase(this.repairSet.repaircode),
            'p_item_barcode': this.fieldUpperCase(this.repairSet.partbarcode),
            'p_subsystem_code': this.repairSet.subsystem,
            'p_pagecount': this.repairSet.pagecount,
            'p_comments': this.repairSet.comments,
            'p_inspection': this.fieldUpperCase(this.repairSet.inspection),
            'p_user_id': this.userid
          }
          const res = await createRepairOperation(params)

          if (res.x_repair_result === 'OK') {
            this.out_message = '[' + res.x_repair_result + ']'
            this.findRepairs()
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          } else {
            this.out_message = '[' + res.x_repair_result + '] ' + res.x_repair_message
            this.$notify({
              title: 'Error',
              message: res.x_repair_message,
              type: 'error',
              duration: 2000
            })
          }
          this.dialogFormVisible = false
        }
      })
    },
    findRepairs() {
      repairHistoryView(this.itemNumber, this.serialNumber, this.selectedOperation).then(response => {
        this.repairData = response.items
      })
    },
    async checkAssyInfo() {
      if (this.inputConfig) {
        this.inputConfig = this.fieldUpperCase(this.inputConfig)
        const res = await checkBoxBarcode(this.inputConfig, this.lang)
        this.itemNumber = res.x_item_number
        this.serialNumber = res.x_serial_number
        this.data = res.x_box_chk_result

        if (res.x_box_chk_result === 'OK') {
          this.out_message = '[' + res.x_box_chk_result + '] ' + this.serialNumber

          const insp_params = {
            'item': res.x_item_number,
            'serial': res.x_serial_number,
            'operation': op_inspection
          }
          const opfailed = await getOpFailed(insp_params)
          this.tableData = opfailed
          this.findRepairs()
        } else {
          this.out_message = '[' + res.x_box_chk_result + '] ' + res.x_box_chk_message
        }
      } else {
        this.out_message = 'Scan Barcode First'
      }
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}

</script>
<style scoped>
  .toupper>>> input{
    text-transform: uppercase;
  }
  .toupper>>> input:read-only{
    background-color: #f0f0f0 !important;
  }
  .toupper>>> input:focus{
    background-color: #ffffc1;
  }
  .el-table>>> .warning-row>>> {
    background: #e7ecef;
  }
  .maintab>>> th{
    color: white;
    background-color: #307671;
  }
  .box-card>>> {
    margin-bottom: 15px;
  }
  .el-form-item>>>{
    margin: 2px;
  }
</style>
