<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <!-- header title -->
        <aside>
          <strong>Serial Number Rules Management</strong>
        </aside>
        <!-- body contents -->
        <div class="mixin-components-container">
          <el-row>
            <el-card class="box-card">
              <!-- title -->
              <div slot="header" class="clearfix">
                <strong>
                  <i class="el-icon-setting" />
                  <span>Serial Rules</span>
                </strong>
              </div>
              <!-- contents -->
              <div>
                <!-- Search Condition -->
                <div slot="header" class="clearfix">
                  <el-form :inline="true" :model="listQuery">
                    <el-row style="margin-bottom:20px;">
                      <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                        <el-input id="ruledescription" v-model="listQuery.desc" class="filter-item" placeholder="Rule Description" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                      </el-col>
                      <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                        <el-input id="rulemonthtype" v-model="listQuery.monthtype" class="filter-item" placeholder="Prefix Month Type" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                      </el-col>
                      <!-- Button -->
                      <Btn id="rulesearchbtn" name="search" @click="handleFilter" />
                      <Btn id="rulecreatebtn" name="create" @click="handleCreate" />
                      <Exportexcel id="exportrules" :data="listData" />
                    </el-row>
                  </el-form>
                </div>
                <!-- Search Result -->
                <el-table
                  id="rulelist"
                  v-loading="listLoading"
                  :data="listData"
                  border
                  fit
                  highlight-current-row
                  style="width: 100%;"
                >
                  <el-table-column label="ID" align="left" min-width="90">
                    <template slot-scope="{row}">
                      <span>{{ row.id }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Description" align="left" min-width="220">
                    <template slot-scope="{row}">
                      <span>{{ row.serialRuleDescription }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Prefix Month Type" align="left" min-width="80">
                    <template slot-scope="{row}">
                      <span>{{ row.prefixYearMonthType }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Shared" align="left" width="100%" min-width="80">
                    <template slot-scope="{row}">
                      <span>{{ row.sharedFlag }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Checksum" align="left" min-width="100">
                    <template slot-scope="{row}">
                      <span>{{ row.checkSum }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="End Number" align="left" min-width="110">
                    <template slot-scope="{row}">
                      <span>{{ row.endNumber }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Digit" align="left" min-width="80">
                    <template slot-scope="{row}">
                      <span>{{ row.digits }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Actions" align="left" class-name="small-padding fixed-width" min-width="180">
                    <template slot-scope="{row}">
                      <Btn name="item" icon="el-icon-suitcase" @click="getItemList(row)" />
                      <Btn name="edit" @click="handleUpdate(row)" />
                      <Btn name="delete" @click="handleDelete(row)" />
                    </template>
                  </el-table-column>
                </el-table>
                <pagination
                  v-show="total > 0"
                  :total="total"
                  :page.sync="listQuery.page"
                  :limit.sync="listQuery.limit"
                  @pagination="getItemSerialRule"
                />
              </div>
            </el-card>
          </el-row>
        </div>
        <!-- Item List Modal -->
        <el-dialog title="Item List" :visible.sync="dialogListVisible">
          <el-table
            v-loading="listLoading"
            :data="listItemData"
            border
            fit
            highlight-current-row
            style="width: 100%;"
          >
            <el-table-column label="Item" align="left" width="150%">
              <template slot-scope="{row}">
                <span>{{ row.itemnumber }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Description" align="left" width="300%">
              <template slot-scope="{row}">
                <span>{{ row.itemdescription }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Product Family" align="left" width="200%">
              <template slot-scope="{row}">
                <span>{{ row.productfamily }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Prefix Type" align="left" width="120%">
              <template slot-scope="{row}">
                <span>{{ row.prefixtype }}</span>
              </template>
            </el-table-column>
            <el-table-column label="End Number" align="left" width="120%">
              <template slot-scope="{row}">
                <span>{{ row.endnumber }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Separator" align="left" width="120%">
              <template slot-scope="{row}">
                <span>{{ row.separator }}</span>
              </template>
            </el-table-column>
          </el-table>
          <pagination
            v-show="totalItemModal > 0"
            :total="totalItemModal"
            :page.sync="listItemQuery.page"
            :limit.sync="listItemQuery.limit"
            @pagination="getItemSerialRuleItem"
          />
        </el-dialog>
        <!-- Detail Create or Update Modal  -->
        <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
          <el-row>
            <el-col :lg="24">
              <p>* Serial PG Type value is only 'NORMAL_SERIAL' now. this will be updated further version.</p>
              <p>* Serial Rule Type value is not used now, but this value will be used detail type setting.</p>
            </el-col>
          </el-row>
          <el-form ref="dataForm" :model="itemSet" :rules="valueRules" label-position="right" label-width="140px" style="margin-left:20px;margin-right:20px;">
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="ID" prop="id">
                  <el-input v-model="itemSet.id" readonly />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Daily Initialized" prop="dailyInitialized">
                  <el-checkbox v-model="itemSet.dailyInitialized" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Description" prop="serialRuleDescription">
                  <el-input v-model="itemSet.serialRuleDescription" />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Monthly Initialized" prop="monthlyInitialized">
                  <el-checkbox v-model="itemSet.monthlyInitialized" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Prefix(YEAR.MON)" prop="prefixYearMonth">
                  <el-date-picker
                    v-model="itemSet.prefixYearMonth"
                    type="date"
                    style="width:100%;"
                  />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Share Flag" prop="sharedFlag">
                  <el-checkbox v-model="itemSet.sharedFlag" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Country Code" prop="countryCode">
                  <el-input v-model="itemSet.countryCode" />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Checksum Flag" prop="checkSum">
                  <el-checkbox v-model="itemSet.checkSum" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Prefix Month Type" prop="prefixYearMonthType">
                  <el-input v-model="itemSet.prefixYearMonthType" />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Start Number" prop="startNumber">
                  <el-input-number v-model="itemSet.startNumber" size="small" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Fixed Prefix" prop="fixedPrefix">
                  <el-input v-model="itemSet.fixedPrefix" />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="End Number" prop="endNumber">
                  <el-input-number v-model="itemSet.endNumber" size="small" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Encoding" prop="encoding">
                  <el-input-number v-model="itemSet.encoding" size="small" />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Digit" prop="digits">
                  <el-input-number v-model="itemSet.digits" size="small" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Serial PG Type" prop="serialPgType">
                  <el-input v-model="itemSet.serialPgType" readonly />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Suffix" prop="suffix">
                  <el-input v-model="itemSet.suffix" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12">
                <el-form-item label="Serial Rule Type" prop="serialRuleType">
                  <el-input v-model="itemSet.serialRuleType" />
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12">
                <el-form-item label="Last Updated By" prop="lastUpdatedBy">
                  <el-input v-model="itemSet.lastUpdatedByName" readonly />
                  <el-input v-model="itemSet.lastUpdateDate" readonly />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <Btn name="confirm" @click="dialogStatus==='create'?createData():updateData()" />
            <Btn name="cancel" @click="dialogFormVisible = false" />
          </div>
        </el-dialog>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getItemSerialRules, getItemSerialRuleItems, createSerialRules, updateSerialRules, deleteSerialRules, getLastUpdatedByName } from '@/api/mdm'
import { mapGetters } from 'vuex'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'

export default {
  name: 'SerialRules',
  components: { Pagination, Exportexcel, Btn },
  data() {
    return {
      listLoading: false,
      total: 0,
      totalItemModal: 0,
      listQuery: {
        page: 1,
        limit: 10,
        sort: 1,
        desc: '',
        monthtype: ''
      },
      listData: null,
      listItemQuery: {
        page: 1,
        limit: 10,
        sort: 0,
        serialruleid: ''
      },
      listItemData: null,
      textMap: {
        update: 'Detail - Edit',
        create: 'Create'
      },
      valueRules: {
        serialRuleDescription: [
          {
            required: true,
            message: 'Please Input Description',
            trigger: 'change'
          }
        ]
      },
      itemSet: {}, // For Viewing
      itemModalSet: {},
      dialogFormVisible: false,
      dialogListVisible: false,
      dialogStatus: ''
    }
  },
  computed: {
    ...mapGetters([
      'userid'
    ])
  },
  mounted() {
    // Get Item Serial Rules
    this.getItemSerialRule()
  },
  methods: {
    // Search
    handleFilter() {
      // Get Item Serial Rules
      this.getItemSerialRule()
    },
    // Get Item Serial Rules
    async getItemSerialRule() {
      this.listLoading = true

      this.listQuery.monthtype = this.fieldUpperCase(this.listQuery.monthtype)
      const list = await getItemSerialRules(this.listQuery)
      this.listData = list.items
      this.total = list.total
      this.listLoading = false
    },
    // Get Item List
    getItemList(row) {
      this.itemModalSet = Object.assign({}, row)
      this.listItemQuery.serialruleid = this.itemModalSet.id

      this.dialogListVisible = true

      // Get Item Serial Rule Items
      this.getItemSerialRuleItem(this.listItemQuery)
    },
    // Get Item Serial Rule Items
    async getItemSerialRuleItem(id) {
      this.listLoading = true

      const list = await getItemSerialRuleItems(id)
      this.listItemData = list.items
      this.totalItemModal = list.total
      this.listLoading = false
    },
    // Add
    handleCreate() {
      this.resetSet()
      this.itemSet.serialPgType = 'NORMAL_SERIAL' // This version is only used by this value.
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // Delete
    handleDelete(row) {
      this.$confirm('This will permanently delete the Serial Rule. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // OK
        deleteSerialRules(row.id).then(() => {
          this.getItemSerialRule()
          this.$notify({
            title: 'Success',
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
        })
      }).catch(() => {
        // Cancel
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    },
    // Edit
    handleUpdate(row) {
      this.itemSet = Object.assign({}, row) // copy obj
      this.itemSet.dailyInitialized = this.itemSet.dailyInitialized === 'Y'
      this.itemSet.monthlyInitialized = this.itemSet.monthlyInitialized === 'Y'
      this.itemSet.sharedFlag = this.itemSet.sharedFlag === 'Y'
      this.itemSet.checkSum = this.itemSet.checkSum === 'Y'

      // lastUpdatedByName -> Dialog show
      this.lastUpdatedByName(this.itemSet.lastUpdatedBy)
    },
    // Get LastUpdatedByName + Dialog show
    async lastUpdatedByName(id) {
      const lastUpdatedByName = await getLastUpdatedByName(id)
      this.itemSet.lastUpdatedByName = lastUpdatedByName.name

      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // Create
    async createData() {
      this.itemSet.countryCode = this.fieldUpperCase(this.itemSet.countryCode)
      this.itemSet.prefixYearMonthType = this.fieldUpperCase(this.itemSet.prefixYearMonthType)
      this.itemSet.dailyInitialized = this.itemSet.dailyInitialized ? 'Y' : 'N'
      this.itemSet.monthlyInitialized = this.itemSet.monthlyInitialized ? 'Y' : 'N'
      this.itemSet.sharedFlag = this.itemSet.sharedFlag ? 'Y' : 'N'
      this.itemSet.checkSum = this.itemSet.checkSum ? 'Y' : 'N'
      this.itemSet.createdby = this.userid
      this.itemSet.lastUpdatedBy = this.userid

      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          await createSerialRules(this.itemSet)
          this.getItemSerialRule()
          this.dialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Created Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    // Update
    async updateData() {
      this.itemSet.countryCode = this.fieldUpperCase(this.itemSet.countryCode)
      this.itemSet.prefixYearMonthType = this.fieldUpperCase(this.itemSet.prefixYearMonthType)
      this.itemSet.dailyInitialized = this.itemSet.dailyInitialized ? 'Y' : 'N'
      this.itemSet.monthlyInitialized = this.itemSet.monthlyInitialized ? 'Y' : 'N'
      this.itemSet.sharedFlag = this.itemSet.sharedFlag ? 'Y' : 'N'
      this.itemSet.checkSum = this.itemSet.checkSum ? 'Y' : 'N'
      this.itemSet.lastUpdatedBy = this.userid

      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          await updateSerialRules(this.itemSet)
          this.getItemSerialRule()
          this.dialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Update Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    // Modal Data Reset
    resetSet() {
      const obj = {
        id: '',
        dailyInitialized: false,
        serialRuleDescription: '',
        monthlyInitialized: false,
        prefixYearMonth: '',
        sharedFlag: false,
        countryCode: '',
        checkSum: false,
        prefixYearMonthType: '',
        startNumber: '',
        fixedPrefix: '',
        endNumber: '',
        encoding: '',
        digits: '',
        serialPgType: '',
        suffix: '',
        serialRuleType: '',
        lastUpdatedBy: ''
      }

      this.itemSet = obj
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    } }
}
</script>
