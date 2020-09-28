<template>
  <div class="components-container">
    <!-- header title -->
    <aside>
      <strong>Operation Control Management</strong>
    </aside>
    <!-- body contents -->
    <div class="mixin-components-container">
      <el-row>
        <!-- Scan Assy Barcode -->
        <el-card class="box-card" style="margin-bottom:10px;">
          <el-form ref="packing" :model="operationForm" label-width="180px" class="form-container">
            <el-col :span="18">
              <el-form-item id="operationname" label="Operation Name">
                <Searchselect v-model="operationForm.optype" placeholder="Operation Name" name="operation" @keyup.enter.native="findForm" />
              </el-form-item>
              <el-form-item id="operationdescription" label="Operation Description">
                <el-input v-model="operationForm.opdesc" placeholder="Operation Description" @keyup.enter.native="findForm" />
              </el-form-item>
              <el-form-item id="operationpartitem" label="Item Number">
                <el-col :span="10">
                  <el-input v-model="operationForm.itemNumber" placeholder="Item Number" @blur="setItem" @keyup.enter.native="findForm">
                    <el-button slot="prepend" icon="el-icon-search" @click="handleItemModal" />
                  </el-input>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="operationForm.item_description" disabled="disabled" />
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <Btn id="operationsearchbtn" name="search" @click="findForm" />
            </el-col>
          </el-form>
        </el-card>
      </el-row>
      <el-row>
        <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
          <el-card class="box-card" style="margin-bottom:10px;">
            <div slot="header" class="clearfix">
              <strong>
                <i class="el-icon-files" />
                <span>Operations</span>
              </strong>
            </div>
            <div style="text-align: right">
              <Exportexcel id="exportoperation" :data="operations" />
            </div>
            <el-table
              id="operationlist"
              ref="operationsTable"
              :key="tableKey"
              v-loading="listLoading"
              :data="operations"
              border
              fit
              highlight-current-row
              style="width: 100%;margin-bottom:10px;height:500px;overflow:auto;"
              @current-change="handleCurrentOperation"
            >
              <el-table-column label="Operation" width="150">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.optype }}</span>
                  <span v-else><el-input v-model="row.optype" @keyup.enter.native="modifyOpData(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="Description">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">{{ row.opdesc }}</span>
                  <span v-else><el-input v-model="row.opdesc" @keyup.enter.native="modifyOpData(row)" @keyup.esc.native="row.edit=!row.edit" /></span>
                </template>
              </el-table-column>
              <el-table-column label="Actions" width="230" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                  <span v-if="!row.edit">
                    <Btn name="edit" @click="row.edit=!row.edit" />
                    <Btn name="delete" @click="deleteOpData(row)" />
                  </span>
                  <span v-else>
                    <Btn name="confirm" @click="modifyOpData(row)" />
                    <Btn name="cancel" @click="row.edit=!row.edit" />
                  </span>
                </template>
              </el-table-column>
            </el-table>
            <Btn id="createoperationbtn" name="create" @click="handleCreateModal('o')" />
          </el-card>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12">
          <el-card class="box-card" style="margin-bottom:10px;">
            <div slot="header" class="clearfix">
              <strong>
                <i class="el-icon-files" />
                <span>Related Routings</span>
              </strong>
            </div>
            <div style="text-align: right">
              <Exportexcel id="exportrouting" :data="routings" />
            </div>
            <el-table
              id="routinglist"
              ref="routingsTable"
              :key="tableKey"
              v-loading="listLoading"
              :data="routings"
              border
              fit
              highlight-current-row
              style="width: 100%;margin-bottom:10px;"
            >
              <el-table-column label="Assy Item Number" align="left">
                <template slot-scope="{row}">
                  <span>{{ row.assy_item_number }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Routing Description" align="left">
                <template slot-scope="{row}">
                  <span>{{ row.routing_desc }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-card class="box-card" style="margin-bottom:10px;">
          <div slot="header" class="clearfix">
            <strong>
              <i class="el-icon-files" />
              <span>Traceable Parts</span>
            </strong>
          </div>
          <!-- contents -->
          <div style="text-align: right">
            <Exportexcel id="exportoperationpart" :data="operationParts" />
          </div>
          <el-table
            id="operationpartlist"
            ref="opPartsTable"
            :key="tableKey"
            v-loading="listLoading"
            :data="operationParts"
            border
            fit
            highlight-current-row
            style="width: 100%;margin-bottom:10px;"
          >
            <el-table-column label="Item Number" align="left" min-width="120" fixed>
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.item_number }}</span>
                <span v-else><el-input v-model="row.item_number" @keyup.esc.native="row.edit=!row.edit" @keyup.enter.native="modifyPartData(row)" @blur="changeItemId(row)" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Barcode Type" align="left" min-width="80">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.barcode_type }}</span>
                <span v-else><el-input v-model="row.barcode_type" @keyup.enter.native="modifyPartData(row)" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Indicator" align="left">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.indicator }}</span>
                <span v-else><el-input v-model="row.indicator" @keyup.esc.native="row.edit=!row.edit" @keyup.enter.native="modifyPartData(row)" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Location" align="left" min-width="140">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.location }}</span>
                <span v-else><el-input v-model="row.location" size="mini" @keyup.esc.native="row.edit=!row.edit" @keyup.enter.native="modifyPartData(row)" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Length" align="left" min-width="140">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.length }}</span>
                <span v-else><el-input-number v-model="row.length" size="mini" @keyup.esc.native="row.edit=!row.edit" @keyup.enter.native="modifyPartData(row)" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Routing" align="left" min-width="100">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.routing_exist }}</span>
                <span v-else><Searchselect v-model="row.routing_exist" name="yn" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Unique" align="left" min-width="100">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.unique_check }}</span>
                <span v-else><Searchselect v-model="row.unique_check" name="yn" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Traceability" align="left" min-width="100">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.traceability }}</span>
                <span v-else><Searchselect v-model="row.traceability" name="yn" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Seperator" align="left" min-width="140">
              <template slot-scope="{row}">
                <span v-if="!row.edit">{{ row.seperator }}</span>
                <span v-else><el-input-number v-model="row.seperator" size="mini" @keyup.esc.native="row.edit=!row.edit" @keyup.enter.native="modifyPartData(row)" /></span>
              </template>
            </el-table-column>
            <el-table-column label="Actions" align="center" min-width="250" class-name="small-padding fixed-width" fixed="right">
              <template slot-scope="{row}">
                <span v-if="!row.edit">
                  <Btn name="edit" @click="row.edit=true" />
                  <Btn name="delete" @click="deletePartData(row)" />
                </span>
                <span v-else>
                  <Btn name="confirm" @click="modifyPartData(row)" />
                  <Btn name="cancel" @click="row.edit=false" />
                </span>
              </template>
            </el-table-column>
          </el-table>
          <Btn id="createoperationpartbtn" name="create" @click="handleCreateModal('p')" />
        </el-card>
      </el-row>
    </div>

    <LOVItem :dialog-visible="itemDialogVisible" :input-item="operationForm.itemNumber" @applyItem="selectItem" />

    <el-dialog title="Create Operation" :visible.sync="operationDialogVisible" @before-close="operationDialogVisible=false">
      <el-row style="margin-bottom: 10px">
        <el-col :span="24">
          <p>If you add a new operation, the operation in the operation list will be applied after refreshing a page.</p>
        </el-col>
      </el-row>
      <el-form ref="coForm" :rules="oprules" :model="optemp" label-position="left" label-width="100px" style="margin-left:50px;">
        <el-col :span="12">
          <el-form-item label="Operation" prop="op">
            <el-input v-model="optemp.op" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <template prop="optype">
            <Searchselect v-model="optemp.optype" placeholder="Operation Type" name="operation" @change="copyOperation" />
          </template>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Description" prop="opdesc">
            <el-input v-model="optemp.opdesc" />
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <Btn name="confirm" @click="createOpData" />
        <Btn name="cancel" @click="operationDialogVisible = false" />
      </div>
    </el-dialog>

    <el-dialog title="Create Operation Parts" :visible.sync="opPartsDialogVisible" @before-close="opPartsDialogVisible=false">
      <el-row>
        <el-col :lg="24">
          <p>* Barcode Type value is only 'A' now. this will be updated further version.</p>
        </el-col>
      </el-row>
      <el-form ref="copForm" :rules="partrules" :model="opptemp" label-position="left" label-width="120px" style="margin-left:50px;">
        <el-form-item label="Item Number" prop="item_number">
          <el-input v-model="opptemp.item_number" @blur="setItemId" />
        </el-form-item>
        <el-form-item label="Barcode Type" prop="barcode_type">
          <el-input v-model="opptemp.barcode_type" readonly />
        </el-form-item>
        <el-form-item label="Indicator" prop="indicator">
          <el-input v-model="opptemp.indicator" />
        </el-form-item>
        <el-form-item label="Seperator" prop="seperator">
          <el-input-number v-model="opptemp.seperator" />
        </el-form-item>
        <el-form-item label="Location" prop="location">
          <el-input v-model="opptemp.location" />
        </el-form-item>
        <el-form-item label="Length" prop="length">
          <el-input-number v-model="opptemp.length" />
        </el-form-item>
        <el-form-item label="Routing Exist" prop="routing_exist">
          <Searchselect v-model="opptemp.routing_exist" name="yn" />
        </el-form-item>
        <el-form-item label="Unique Check" prop="unique_check">
          <Searchselect v-model="opptemp.unique_check" name="yn" />
        </el-form-item>
        <el-form-item label="Traceability" prop="traceability">
          <Searchselect v-model="opptemp.traceability" name="yn" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <Btn name="confirm" @click="createPartData" />
        <Btn name="cancel" @click="opPartsDialogVisible = false" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Searchselect from '@/components/Searchselect'
import Exportexcel from '@/components/Exportexcel'
import LOVItem from '@/components/LOVItem'
import Btn from '@/components/Btn'

import {
  getItems,
  getOperations,
  insertOperation,
  modifyOperation,
  deleteOperation,
  getOperationParts,
  insertOperationPart,
  modifyOperationPart,
  deleteOperationPart,
  getRoutings
} from '@/api/mdm'

const defaultForm = {
  itemNumber: '',
  itemid: null,
  optype: '',
  opdesc: '',
  item_description: ''
}

export default {
  name: 'OperationControl',
  components: { Searchselect, LOVItem, Exportexcel, Btn },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    routerOperationForm: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      operationForm: Object.assign({}, defaultForm),
      tableKey: 0,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        sort: 0,
        site: undefined,
        name: undefined,
        alias: undefined
      },
      itemForm: null,
      operations: [],
      operationParts: [],
      routings: [],
      currentItem: null,
      currentOperation: null,
      optemp: {},
      opptemp: {},
      opOptions: [
        {
          value: 'Y',
          label: 'Y'
        }, {
          value: 'N',
          label: 'N'
        }, {
          value: '',
          label: ''
        }
      ],
      itemDialogVisible: false,
      operationDialogVisible: false,
      opPartsDialogVisible: false,
      oprules: {
        op: [{ required: true, message: 'operation name is required', trigger: 'change' }],
        opdesc: [{ required: true, message: 'description is required', trigger: 'blur' }]
      },
      partrules: {
        item_number: [{ required: true, message: 'item number is required', trigger: 'change' }]
      }

    }
  },
  computed: {
    ...mapGetters([
      'site',
      'userid',
      'lang'
    ])
  },
  mounted() {
    this.operationSearchInitialize()
  },
  methods: {
    async operationSearchInitialize() {
      if (this.routerOperationForm) {
        this.operationForm.optype = this.routerOperationForm.optype
        this.operationForm.opdesc = this.routerOperationForm.opdesc
        this.operationForm.itemNumber = this.routerOperationForm.itemNumber

        await this.setItem()
        await this.findForm()
      }
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    },
    resetTemp() {
      this.optemp = {
        op: '',
        optype: '',
        opdesc: '',
        site: this.site,
        userid: this.userid
      }

      this.opptemp = {
        opid: undefined,
        item_number: '',
        itemid: undefined,
        barcode_type: '',
        indicator: '',
        seperator: '',
        location: null,
        length: null,
        routing_exist: '',
        unique_check: '',
        traceability: '',
        site: this.site,
        userid: this.userid
      }
    },
    handleItemModal() {
      this.itemDialogVisible = true
    },
    handleCreateModal(flag) {
      this.resetTemp()

      if (flag === 'o') {
        this.operationDialogVisible = true

        this.$nextTick(() => {
          this.$refs.coForm.resetFields()
          this.optemp.optype = null
        })
      } else {
        if (this.currentOperation) {
          this.opPartsDialogVisible = true

          this.$nextTick(() => {
            this.$refs.copForm.resetFields()
            this.opptemp.barcode_type = 'A' // This version is only used by this value.
          })
        } else {
          this.$notify({
            title: 'Error',
            message: 'Please select an operation.',
            type: 'error',
            duration: 2000
          })
        }
      }
    },
    async handleCurrentOperation(val) {
      if (val) {
        // Initialization
        this.routings = []
        this.operationParts = []

        this.currentOperation = val

        const res = await getRoutings(this.currentOperation.id)
        this.routings = res

        const res2 = await getOperationParts({ opid: this.currentOperation.id })
        this.operationParts = res2.map(v => {
          this.$set(v, 'edit', false)
          return v
        })
      }
    },
    async setItem() {
      this.operationForm.item_description = ''

      if (this.operationForm.itemNumber) {
        const params = {
          itemNumber: this.operationForm.itemNumber,
          site: this.site
        }
        const res = await getItems(params)
        if (res[0].item_description != null) {
          this.operationForm.item_description = res[0].item_description
        }
      }
    },
    async setItemId() {
      if (this.opptemp.item_number) {
        const params = {
          itemNumber: this.opptemp.item_number,
          site: this.site
        }
        const res = await getItems(params)
        this.opptemp.itemid = res[0].item_id
      }
    },
    selectItem(value) {
      if (value) {
        this.operationForm.itemNumber = value.item_number
      }
      this.itemDialogVisible = false
    },

    getSelectOpType: function(value) {
      this.operationForm.optype = value
    },
    async findForm() {
      // Initialization
      this.operations = []
      this.routings = []
      this.operationParts = []

      this.operationForm.itemNumber = this.fieldUpperCase(this.operationForm.itemNumber)
      const list = await getOperations(this.operationForm)

      if (list.length > 0) {
        this.operations = list.map(v => {
          this.$set(v, 'edit', false)
          return v
        })
        this.handleCurrentOperation(list[0])
      }
    },
    async createOpData() {
      this.$refs['coForm'].validate(async(valid) => {
        if (valid) {
          this.optemp.op = this.fieldUpperCase(this.optemp.op)
          this.optemp.site = this.site
          this.optemp.userid = this.userid

          await insertOperation(this.optemp)
          this.operationForm.opdesc = this.optemp.opdesc
          this.findForm()
          this.operationDialogVisible = false
        }
      })
    },
    async modifyOpData(row) {
      if (row.optype && row.opdesc) {
        const params = {
          id: row.id,
          opdesc: row.opdesc,
          optype: this.fieldUpperCase(row.optype),
          site: this.site,
          userid: this.userid
        }

        await modifyOperation(params)
        this.findForm()
        this.$notify({
          title: 'Success',
          message: 'Update Successfully',
          type: 'success',
          duration: 2000
        })
      } else {
        this.$notify({
          title: 'Error',
          message: 'Operation Type and Description must not be empty.',
          type: 'error',
          duration: 2000
        })
      }
    },
    async deleteOpData(row) {
      if (this.operationParts.length > 0) {
        this.$notify({
          title: 'Error',
          message: 'If you want to delete the operation, please delete its operation parts information first.',
          type: 'error',
          duration: 2000
        })
      } else {
        this.$confirm('This will permanently be deleted. Continue?', 'Warning', {
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(async() => {
          await deleteOperation(row.id)
          this.findForm()
          this.$notify({
            title: 'Success',
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
          this.operationDialogVisible = false
        }).catch(() => {

        })
      }
    },

    async createPartData() {
      this.$refs['copForm'].validate(async(valid) => {
        if (valid) {
          if (this.opptemp.itemid) {
            this.opptemp.item_number = this.fieldUpperCase(this.opptemp.item_number)
            this.opptemp.userid = this.userid
            this.opptemp.opid = this.currentOperation.id

            await insertOperationPart(this.opptemp)
            this.handleCurrentOperation(this.currentOperation)
            this.opPartsDialogVisible = false
          } else {
            this.$notify({
              title: 'Error',
              message: 'Please correct item number.',
              type: 'error',
              duration: 2000
            })
          }
        }
      })
    },
    async changeItemId(row) {
      const params = {
        itemNumber: row.item_number,
        site: this.site
      }

      const res = await getItems(params)
      row.old_itemid = row.itemid
      row.itemid = res[0].item_id
    },
    async modifyPartData(row) {
      row.item_number = this.fieldUpperCase(row.item_number)

      const params = row
      params.userid = this.userid

      await modifyOperationPart(params)
      row.edit = false
      this.$notify({
        title: 'Success',
        message: 'Update Successfully',
        type: 'success',
        duration: 2000
      })
      this.opPartsDialogVisible = false
    },
    async deletePartData(row) {
      this.$confirm('This will permanently be deleted. Continue?', 'Warning', {
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        await deleteOperationPart(row)

        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })

        this.handleCurrentOperation(this.currentOperation)
      }).catch(() => {

      })
    },
    copyOperation() {
      this.optemp.op = this.optemp.optype
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
