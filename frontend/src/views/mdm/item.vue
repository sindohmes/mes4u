<template>
  <div class="components-container">
    <aside><strong>Item Master</strong></aside>
    <el-card class="box-card">
      <el-form label-width="30%" class="form-container" @submit.prevent.native="checkEnter">
        <el-row>
          <el-col :lg="10">
            <el-form-item id="searchitemtext" label="Item Number">
              <el-input v-model="itemNumber" placeholder="Item Number" autofocus @change="setItem" @keyup.enter.native="findItems" />
            </el-form-item>
          </el-col>
          <el-col :lg="14">
            <Btn id="searchitembtn" name="search" @click="findItems" />
            <Btn id="createitembtn" name="create" @click="handleCreate" />
            <Exportexcel id="exportitembtn" :data="itemTable" />
          </el-col>
        </el-row>
      </el-form>

      <el-table
        id="itemlist"
        ref="itemTable"
        :data="itemTable"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        :row-class-name="tableRowClassName"
        @current-change="selectedCurrentRow"
        @sort-change="sortChange"
      >
        <el-table-column label="Item ID" prop="id" sortable="custom" width="100" />
        <el-table-column label="Item" prop="itemnumber" sortable="custom" width="120" />
        <el-table-column label="Description" prop="itemdescription" width="230" />
        <el-table-column label="Item Type" prop="itemtype" sortable="custom" width="110" />
        <el-table-column label="Separator" prop="separator" width="110" />
        <el-table-column label="Product Family" prop="productfamily" sortable="custom" width="150" />
        <el-table-column label="Status" prop="status" sortable="custom" width="100" />
        <el-table-column label="Serial Rule" prop="serialruledescription" sortable="custom" width="230" />
        <el-table-column label="Net Weight" prop="netweight" width="140" />
        <el-table-column label="Gross Weight" prop="grossweight" width="140" />
        <el-table-column label="Comments" prop="comments" width="230" />
        <el-table-column label="End Number" prop="endnumber" width="120" />
        <el-table-column label="Customer Item1" prop="customeritemnumber1" width="140" />
        <el-table-column label="Customer Item2" prop="customeritemnumber2" width="140" />
        <el-table-column label="Customer Item3" prop="customeritemnumber3" width="140" />
        <el-table-column label="Team code" prop="teamcode" width="140" />
        <el-table-column label="Created by" prop="createdbydesc" width="140" />
        <el-table-column label="Created" prop="creationdateformat" width="140" />
        <el-table-column label="Updated By" prop="lastupdatedbydesc" width="140" />
        <el-table-column label="Updated" prop="lastupdatedateformat" width="140" />
        <el-table-column fixed="right" label="Actions" align="center" width="110" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <Btn name="edit" @click="handleUpdate(row)" />
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        v-show="listQuery.total>0"
        background
        :current-page.sync="listQuery.currentpage"
        :total.sync="listQuery.total"
        :page-size="3"
        layout="total, prev, pager, next, jumper"
        @current-change="findItems"
      />

      <div v-show="false">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
          <el-input v-model="selectedItem" placeholder="Item Number" readonly class="customreadonly" />
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="padding-right:20px;">
          <el-input v-model="selectedItemid" placeholder="Item Id" readonly class="customreadonly" />
        </el-col>
      </div>

    </el-card>

    <!-- Item List Create or Update Modal -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="itemSet" label-position="right" label-width="140px" style="margin-left:20px;margin-right:20px;" @submit.prevent.native="checkEnter">
        <el-row>
          <el-col :lg="20" :md="20">
            <el-form-item label="Item Number" prop="itemnumber">
              <template v-if="dialogStatus==='create'">
                <el-input v-model="itemSet.itemnumber" />
              </template>
              <template v-else>
                {{ itemSet.itemnumber }}
              </template>
            </el-form-item>
          </el-col>
          <el-col :lg="4" :md="4">
            <el-form-item label-width="0" prop="itemid">
              <el-input v-model="itemSet.id" placeholder="Item Id" :readonly="(dialogStatus!=='create')" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="Description" prop="itemdescription">
          <el-input v-model="itemSet.itemdescription" />
        </el-form-item>
        <el-row>
          <el-col :lg="11" :md="11">
            <el-form-item label="Product Family" prop="productfamily">
              <el-input v-model="itemSet.productfamily" />
            </el-form-item>
          </el-col>
          <el-col :lg="11" :md="11">
            <el-form-item label="Status" prop="status">
              <el-input v-model="itemSet.status" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="20" :md="20">
            <el-form-item label="Serial Rule Name" prop="serialruledescription">
              <SerialRuleList
                v-model="itemSet.serialruledescription"
                placeholder="Serial Rule Name"
                :defaultvalue="Number(itemSet.serialruleid)"
                required
                @setSerialRule="setSerialRule"
              />
              <!-- <el-input v-model="itemSet.serialruledescription"/> -->
            </el-form-item>
          </el-col>
          <el-col :lg="4" :md="4">
            <el-input v-model="itemSet.serialruleid" placeholder="Serial Rule Id" :readonly="(dialogStatus!=='create')" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="11" :md="11">
            <el-form-item label="End Number" prop="endnumber">
              <el-input-number v-model="itemSet.endnumber" size="small" />
            </el-form-item>
          </el-col>
          <el-col :lg="11" :md="11">
            <el-form-item label="Separator" prop="separator">
              <el-input v-model="itemSet.separator" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item v-show="false" label="Site" prop="site">
          <el-input v-model="itemSet.site" readonly class="customreadonly" />
        </el-form-item>
        <el-row>
          <el-col :lg="11" :md="11">
            <el-form-item label="Net Weight" prop="netweight">
              <el-input-number v-model="itemSet.netweight" size="small" />
            </el-form-item>
          </el-col>
          <el-col :lg="11" :md="11">
            <el-form-item label="Gross Weight" prop="grossweight">
              <el-input-number v-model="itemSet.grossweight" size="small" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="11" :md="11">
            <el-form-item label="Customer Item1" prop="customeritemnumber1">
              <el-input v-model="itemSet.customeritemnumber1" />
            </el-form-item>
          </el-col>
          <el-col :lg="11" :md="11">
            <el-form-item label="Customer Item2" prop="customeritemnumber2">
              <el-input v-model="itemSet.customeritemnumber2" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="11" :md="11">
            <el-form-item label="Customer Item3" prop="customeritemnumber3">
              <el-input v-model="itemSet.customeritemnumber3" />
            </el-form-item>
          </el-col>
          <el-col :lg="11" :md="11">
            <el-form-item label="Prefix Type" prop="prefixtype">
              <el-input v-model="itemSet.prefixtype" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <Btn name="confirm" @click="dialogStatus==='create'?createData():updateData()" />
        <Btn name="cancel" @click="dialogFormVisible = false" />
      </div>
    </el-dialog>

    <!-- Item Packing List  -->
    <el-card class="box-card">
      <el-form label-width="30%" class="form-container" @submit.prevent.native="checkEnter">
        <div class="clearfix" style="margin :10px;">
          <el-row>
            <el-col :lg="12">
              <strong>
                <i class="el-icon-menu" />
                <span>Packing Rule</span>
              </strong>
            </el-col>
            <el-col :lg="12">
              <strong><span class="selectedRef">{{ selectedItem }}</span></strong>
            </el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :lg="4">
            <Btn id="createpackingbtn" name="create" @click="handlepackingCreate" />
            <Exportexcel id="exportpackingbtn" :data="packTable" />
          </el-col>
          <el-col id="copyfrompacking" :lg="5" :md="10">
            <el-form label-position="right" label-width="100px" @submit.prevent.native="checkEnter">
              <el-form-item label="Copy from">
                <ItemList v-model="copypackingItem" placeholder=" " required @setItem="setCopyfromPacking" />
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :lg="2" :md="2">
            <Btn id="copyfrompackingbtn" name="confirm" @click="copyfromPacking" />
          </el-col>
        </el-row>
      </el-form>

      <el-table
        id="packinglist"
        :data="packTable"
        border
        fit
        style="width: 100%;"
        :row-class-name="tableRowClassName"
      >
        <el-table-column label="Packing Type" prop="packingtype" sortable min-width="150" />
        <el-table-column label="Qty" prop="packingqty" min-width="110" />
        <el-table-column label="Subpacking Type" prop="subpackingtype" sortable min-width="180" />
        <el-table-column label="LPN instanced" prop="lpninstanced" min-width="150" />
        <el-table-column label="Created" prop="creationdate" min-width="160" />
        <el-table-column label="Updated" prop="lastupdatedate" min-width="160" />
        <el-table-column label="Item Number" min-width="160">
          <p>{{ selectedItem }}</p>
        </el-table-column>
        <el-table-column label="Actions" align="center" min-width="180" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <Btn name="edit" @click="handlepackingUpdate(row)" />
            <Btn name="delete" @click="handlepackingDelete(row)" />
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Item Packing Create or Update Modal -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="pdialogFormVisible">
      <el-row>
        <el-col :lg="24">
          <p>* Packing Type value is activated when you input 'PALLET' or 'BOX'.</p>
          <p>* Sub Packing Type value is activated when you input 'BOX' or 'EA'.</p>
        </el-col>
      </el-row>
      <el-form ref="pdataForm" :rules="packingrules" :model="packingSet" label-position="right" label-width="170px" style="margin-left:20px;margin-right:20px;" @submit.prevent.native="checkEnter">
        <el-form-item label="Packing ID" prop="id">
          <el-input v-model="packingSet.id" placeholder="Packing Id" readonly class="customreadonly" />
        </el-form-item>

        <el-form-item label="Item ID" prop="itemid">
          <el-input v-model="packingSet.itemid" placeholder="Item Id" readonly class="customreadonly" />
        </el-form-item>

        <el-form-item label="Packing Type" prop="packingtype">
          <el-input v-model="packingSet.packingtype" required class="customfocus" />
        </el-form-item>

        <el-form-item label="Quantity" prop="packingqty">
          <el-input-number v-model="packingSet.packingqty" size="small" required />
        </el-form-item>

        <el-form-item label="Sub Packing Type" prop="subpackingtype">
          <el-input v-model="packingSet.subpackingtype" required />
        </el-form-item>

        <el-form-item label="LPN Instanced" prop="lpninstanced">
          <span><Searchselect v-model="packingSet.lpninstanced" name="yn" /></span>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <Btn name="confirm" @click="dialogStatus==='create'?createpackingData():updatepackingData()" />
        <Btn name="cancel" @click="pdialogFormVisible = false" />
      </div>
    </el-dialog>

    <!-- Item Label List -->
    <el-card class="box-card">
      <el-form label-width="30%" class="form-container" @submit.prevent.native="checkEnter">
        <div class="clearfix" style="margin :10px;">
          <el-row>
            <el-col :lg="12">
              <strong>
                <i class="el-icon-s-order" />
                <span>Label Rule</span>
              </strong>
            </el-col>
            <el-col :lg="12">
              <strong><span class="selectedRef">{{ selectedItem }}</span></strong>
            </el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :lg="10">
            <Btn id="createlabelbtn" name="create" @click="handlelabelCreate" />
            <Exportexcel id="exportlabelbtn" :data="labelTable" />
            <Searchselect
              id="searchlabel"
              v-model="selectedLabelType"
              name="printinglabel"
              @change="selectLabelContent"
            />
          </el-col>
          <el-col id="copyfromlabel" :lg="5" :md="10">
            <el-form label-position="right" label-width="100px" @submit.prevent.native="checkEnter">
              <el-form-item label="Copy from">
                <ItemList v-model="copylabelItem" required @setItem="setCopyfromLabel" />
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :lg="2" :md="2">
            <Btn id="copyfromlabelbtn" name="confirm" @click="copyfromLabel" />
          </el-col>
        </el-row>
      </el-form>

      <el-table
        id="labellist"
        :data="labelTable"
        border
        style="width: 100%; height: 500px; overflow:auto"
        :row-class-name="tableRowClassName"
      >

        <el-table-column label="Label Name" prop="labelname" sortable min-width="150" />
        <el-table-column label="Label Description" prop="labeldesc" min-width="150" />
        <el-table-column label="Use Attribute Name" prop="useattributename" sortable min-width="180" />
        <el-table-column label="Use Attribute Value" prop="useattributevalue" min-width="280" />
        <el-table-column label="Created" prop="creationdate" min-width="160" />
        <el-table-column label="Updated" prop="lastupdatedate" min-width="160" />
        <el-table-column label="Item Number" min-width="160">
          <p>{{ selectedItem }}</p>
        </el-table-column>
        <el-table-column label="Actions" align="center" min-width="180" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <Btn name="edit" @click="handlelabelUpdate(row)" />
            <Btn name="delete" @click="handlelabelDelete(row)" />
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Item Label Create or Update Modal  -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="ldialogFormVisible">
      <el-form ref="ldataForm" :rules="labelrules" :model="labelSet" label-position="right" label-width="170px" style="margin-left:20px;margin-right:20px;" @submit.prevent.native="checkEnter">
        <el-form-item label="Label Id" prop="id">
          <el-input v-model="labelSet.id" placeholder="Label Id" readonly class="customreadonly" />
        </el-form-item>

        <el-form-item label="Item ID" prop="itemid">
          <el-input v-model="labelSet.itemid" placeholder="Item Id" readonly class="customreadonly" />
        </el-form-item>

        <el-form-item label="Label Name" prop="labelname">
          <el-input v-model="labelSet.labelname" required />
        </el-form-item>

        <el-form-item label="Label Description" prop="labeldesc">
          <el-input v-model="labelSet.labeldesc" required />
        </el-form-item>

        <el-form-item label="Use Attribute Name" prop="useattributename">
          <el-input v-model="labelSet.useattributename" required />
        </el-form-item>

        <el-form-item label="Use Attribute Value" prop="useattributevalue">
          <el-input v-model="labelSet.useattributevalue" required />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <Btn name="confirm" @click="dialogStatus==='create'?createlabelData():updatelabelData()" />
        <Btn name="cancel" @click="ldialogFormVisible = false" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getItemList, createItem, updateItem, getItemPacking, createpackingItem, updatepackingItem, deletepackingItem,
  getItemLabel, createlabelItem, updatelabelItem, deletelabelItem, copyfromPacking, copyfromLabel } from '@/api/mdm'
import waves from '@/directive/waves' // waves directive
import { mapGetters } from 'vuex'
import moment from 'moment'
import SerialRuleList from '@/components/ItemSerialRule'
import ItemList from '@/components/ItemNumber'
import Searchselect from '@/components/Searchselect'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'

export default {
  name: 'ItemMaster',
  components: { SerialRuleList, Searchselect, Exportexcel, Btn, ItemList },
  directives: { waves },
  data() {
    return {
      listLoading: true,
      itemNumber: '',
      selectedItem: '',
      selectedItemid: '',
      itemTable: [],
      packTable: [],
      labelTable: [],
      copypackingItem: '',
      copylabelItem: '',
      dialogFormVisible: false, // Item Modal
      pdialogFormVisible: false, // Packing Modal
      ldialogFormVisible: false, // Label Modal
      dialogStatus: '', // Modal Create or Update
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      listQuery: { // Search variable
        pagesize: 1,
        currentpage: 0,
        totalpage: 0,
        total: 0,
        prop: 'id',
        sort: 0,
        limit: 3,
        item: ''
      },
      labelList: null,
      selectedLabelType: '',
      rules: {
        itemnumber: [{ required: true, message: 'item number is required', trigger: 'change' }],
        itemid: [{ type: 'number', message: 'item id must be a number' }]

      },
      packingrules: {
        packingtype: [{ required: true, message: 'Packing type is required', trigger: 'change' }],
        packingqty: [{ required: true, message: 'Packing qty is required', trigger: 'change' }],
        subpackingtype: [{ required: true, message: 'Sub Packing qty is required', trigger: 'change' }]
      },
      labelrules: {
        labelname: [{ required: true, message: 'Label Name is required', trigger: 'change' }],
        useattributename: [{ required: true, message: 'Use Attribute Name is required', trigger: 'change' }]
      },
      itemSet: {},
      packingSet: {},
      labelSet: {}
    }
  },
  computed: {
    ...mapGetters([
      'userid', 'site', 'lang'
    ])
  },
  methods: {
    setCopyfromPacking(val) {
      this.copypackingItem = val.itemnumber
    },
    setCopyfromLabel(val) {
      this.copylabelItem = val.itemnumber
    },
    setSerialRule(val) {
      this.itemSet.serialruleid = val.id
      this.itemSet.serialruledescription = val.serialRuleDescription
    },
    async selectedCurrentRow(val) {
      if (val) {
        this.selectedItem = val.itemnumber
        this.selectedItemid = val.id
        this.findPacking()
        this.findLabel()
      }
    },
    setItem() {
      this.listQuery.item = this.itemNumber
    },
    to_date(value) {
      if (value) {
        return moment(String(value)).format('YYYY-MM-DD')
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
    },
    async findLabel() {
      if (this.selectedItemid) {
        const params = {
          itemid: this.selectedItemid,
          type: this.selectedLabelType
        }
        this.labelTable = await getItemLabel(params)
        this.resetlabelSet()
      }
    },
    async findPacking() {
      const id = { id: this.selectedItemid }
      this.packTable = await getItemPacking(id)
      this.resetpackingSet()
    },
    async findItems() {
      var param = this.listQuery
      this.itemNumber = this.fieldUpperCase(this.itemNumber)
      param.item = (this.itemNumber === undefined) ? '' : this.itemNumber

      const res = await getItemList(param)
      this.itemTable = res.items.content
      this.listQuery.totalpage = res.items.totalPages
      this.listQuery.total = res.items.totalElements

      if (res.items.content.length > 0) {
        this.itemTable.map(v => {
          this.$set(v, 'creationdateformat', this.to_date(v.creationdate))
          this.$set(v, 'lastupdatedateformat', this.to_date(v.lastupdatedate))
        })
        this.$refs.itemTable.setCurrentRow(this.itemTable[0])
      } else {
        this.packTable = []
        this.labelTable = []
      }
      this.resetSet()
    },
    sortChange(val) {
      this.listQuery.prop = val.prop
      if (val.order === 'ascending') {
        this.listQuery.sort = 1
      } else {
        this.listQuery.sort = 0
      }
      this.findItems()
    },
    handleCreate() {
      if (this.itemTable.length === 0) {
        this.findItems()
      }
      this.resetSet()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.itemSet = Object.assign({}, row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handlelabelCreate() {
      if (this.selectedItemid) {
        this.resetlabelSet()
        this.dialogStatus = 'create'
        this.ldialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['ldataForm'].clearValidate()
        })
      } else {
        this.$notify({
          title: 'Error',
          message: 'Select item first',
          type: 'error',
          duration: 2000
        })
      }
    },
    selectLabelContent() {
      this.findLabel()
    },
    handlelabelUpdate(row) {
      this.labelSet = Object.assign({}, row)
      this.labelSet.lastupdatedby = this.userid
      this.dialogStatus = 'update'
      this.ldialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['ldataForm'].clearValidate()
      })
    },
    handlepackingCreate() {
      if (this.selectedItemid) {
        this.resetpackingSet()
        this.dialogStatus = 'create'
        this.pdialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['pdataForm'].clearValidate()
        })
      } else {
        this.$notify({
          title: 'Error',
          message: 'Select item first',
          type: 'error',
          duration: 2000
        })
      }
    },
    handlepackingUpdate(row) {
      this.packingSet = Object.assign({}, row)
      this.packingSet.lastupdatedby = this.userid
      this.dialogStatus = 'update'
      this.pdialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['pdataForm'].clearValidate()
      })
    },
    updateData() {
      this.itemSet.lastupdatedby = this.userid

      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          this.itemSet.itemnumber = this.fieldUpperCase(this.itemSet.itemnumber)
          this.itemSet.productfamily = this.fieldUpperCase(this.itemSet.productfamily)
          this.itemSet.customeritemnumber1 = this.fieldUpperCase(this.itemSet.customeritemnumber1)
          this.itemSet.customeritemnumber2 = this.fieldUpperCase(this.itemSet.customeritemnumber2)
          this.itemSet.customeritemnumber3 = this.fieldUpperCase(this.itemSet.customeritemnumber3)
          this.itemSet.lastupdatedby = this.userid

          await updateItem(this.itemSet, this.itemSet.id)
          this.findItems()
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
    updatepackingData() {
      this.$refs['pdataForm'].validate(async(valid) => {
        if (valid) {
          this.packingSet.lastupdatedby = this.userid
          await updatepackingItem(this.packingSet, this.packingSet.id)
          this.findPacking()
          this.pdialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Update Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    updatelabelData() {
      this.$refs['ldataForm'].validate(async(valid) => {
        if (valid) {
          await updatelabelItem(this.labelSet, this.labelSet.id)
          this.findLabel()
          this.ldialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Update Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    createlabelData() {
      this.$refs['ldataForm'].validate(async(valid) => {
        if (valid) {
          this.labelSet.createdby = this.userid
          this.labelSet.lastupdatedby = this.userid
          await createlabelItem(this.labelSet)
          this.findLabel()
          this.ldialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Created Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    createpackingData() {
      this.$refs['pdataForm'].validate((valid) => {
        if (valid) {
          this.packingSet.createdby = this.userid
          this.packingSet.lastupdatedby = this.userid
          createpackingItem(this.packingSet).then(() => {
            this.findPacking()
            this.pdialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    createData() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          this.itemSet.itemnumber = this.fieldUpperCase(this.itemSet.itemnumber)
          this.itemSet.productfamily = this.fieldUpperCase(this.itemSet.productfamily)
          this.itemSet.customeritemnumber1 = this.fieldUpperCase(this.itemSet.customeritemnumber1)
          this.itemSet.customeritemnumber2 = this.fieldUpperCase(this.itemSet.customeritemnumber2)
          this.itemSet.customeritemnumber3 = this.fieldUpperCase(this.itemSet.customeritemnumber3)
          this.itemSet.createdby = this.userid
          this.itemSet.lastupdatedby = this.userid

          await createItem(this.itemSet)
          this.itemNumber = this.itemSet.itemnumber
          this.listQuery.item = this.itemNumber
          this.findItems()
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
    resetlabelSet() {
      const obj = {
        itemid: this.selectedItemid,
        createdby: this.userid,
        lastupdatedby: this.userid,
        site: this.site,
        labelname: '',
        labeldesc: '',
        useattributename: '',
        useattributevalue: ''
      }

      this.labelSet = obj
    },
    resetpackingSet() {
      const obj = {
        itemid: this.selectedItemid,
        createdby: this.userid,
        lastupdatedby: this.userid,
        site: this.site,
        packingtype: '',
        packingqty: '',
        subpackingtype: '',
        lpninstanced: ''
      }

      this.packingSet = obj
    },
    resetSet() {
      const obj = {
        comments: '',
        createdby: this.userid,
        customeritemnumber1: '',
        customeritemnumber2: '',
        customeritemnumber3: '',
        grossweight: '',
        id: '',
        index: '',
        itemdescription: '',
        itemnumber: '',
        itemtype: '',
        lastupdatedby: this.userid,
        site: this.site,
        netweight: '',
        prefixtype: '',
        productfamily: '',
        separator: '',
        serialruleid: '',
        status: '',
        teamcode: '',
        endnumber: ''
      }

      this.itemSet = obj
    },
    copyfromPacking() {
      if (!this.copypackingItem) {
        this.$notify({
          title: 'Error',
          message: 'Select copy from item first',
          type: 'error',
          duration: 2000
        })
      } else if (!this.selectedItem) {
        this.$notify({
          title: 'Error',
          message: 'Select item first',
          type: 'error',
          duration: 2000
        })
      } else {
        const params = {
          'p_user_id': this.userid,
          'p_lang': this.lang,
          'p_from_item_number': this.copypackingItem,
          'p_to_item_number': this.selectedItem
        }
        copyfromPacking(params).then(() => {
          this.findPacking()
          this.$notify({
            title: 'Success',
            message: 'Created Successfully',
            type: 'success',
            duration: 2000
          })
        })
      }
    },
    copyfromLabel() {
      if (!this.copylabelItem) {
        this.$notify({
          title: 'Error',
          message: 'Select copy from item first',
          type: 'error',
          duration: 2000
        })
      } else if (!this.selectedItem) {
        this.$notify({
          title: 'Error',
          message: 'Select item first',
          type: 'error',
          duration: 2000
        })
      } else {
        const params = {
          'p_user_id': this.userid,
          'p_lang': this.lang,
          'p_from_item_number': this.copylabelItem,
          'p_to_item_number': this.selectedItem
        }
        copyfromLabel(params).then(() => {
          this.findLabel()
          this.$notify({
            title: 'Success',
            message: 'Created Successfully',
            type: 'success',
            duration: 2000
          })
        })
      }
    },
    async handlelabelDelete(row) {
      this.labelSet = Object.assign({}, row)

      this.$confirm('Do you really want to delete this?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        await deletelabelItem(this.labelSet, this.labelSet.id)
        this.findLabel()
        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })
      }).catch(() => {

      })
    },
    handlepackingDelete(row) {
      this.packingSet = Object.assign({}, row)

      this.$confirm('Do you really want to delete this?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        deletepackingItem(this.packingSet, this.packingSet.id).then(() => {
          this.findPacking()
          this.$notify({
            title: 'Success',
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
        })
      }).catch(() => {

      })
    },
    checkEnter() {

    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}

</script>

