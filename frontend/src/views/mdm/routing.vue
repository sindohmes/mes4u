<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Routing Masters</strong>
        </aside>
        <el-row :gutter="10">
          <div>
            <el-col :xs="24" :sm="24" :md="12">
              <div class="mixin-components-container">
                <el-row>
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <strong>
                        <i class="el-icon-full-screen" />
                        <span>Routing Information</span>
                      </strong>
                    </div>
                    <div>
                      <el-row id="routingitem" :gutter="10">
                        <el-col :span="12">
                          <el-input
                            ref="searchitem"
                            v-model="routingform.item"
                            class="filter-item search-condition-1 input-required-yellow"
                            placeholder="Item"
                            style="font-size:1rem;"
                            clearable
                            autofocus
                            @keyup.enter.native="getRouting"
                          >
                            <el-button slot="prepend" icon="el-icon-search" @click="handleItemModal('assy')" />
                          </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="12" :md="2">
                          <Btn name="search" @click="getRouting" />
                        </el-col>
                      </el-row>
                    </div>
                    <div style="margin-top: 40px">
                      <el-form class="form-container" :model="routing">
                        <el-row :gutter="10">
                          <el-col :span="12">
                            <el-form-item label="Assy Item Number">
                              <el-input
                                v-model="routing.item"
                                size="large"
                                class="customreadonly"
                                style="font-size:1rem;"
                                readonly
                              />
                            </el-form-item>
                          </el-col>
                          <el-col :span="12">
                            <el-form-item id="routingdescription" label="Routing Description">
                              <el-input
                                ref="routingitem"
                                v-model="routing.desc"
                                size="large"
                                class="input-required-yellow"
                                style="font-size:1rem;"
                                autofocus
                                @keyup.enter.native="updateRouting"
                              />
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </el-form>
                    </div>
                  </el-card>
                </el-row>
              </div>
            </el-col>
          </div>
          <div>
            <el-col :xs="24" :sm="24" :md="1">
              <div style="min-height: 1px" />
            </el-col>
          </div>
          <div>
            <el-col :xs="24" :sm="24" :md="11">
              <div class="mixin-components-container">
                <el-row>
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <strong>
                        <i class="el-icon-full-screen" />
                        <span>Operation Information</span>
                      </strong>
                    </div>
                    <div>
                      <el-form ref="operation" :model="operationform" class="form-container" label-width="100px">
                        <el-row :gutter="10">
                          <div class="postInfo-container">
                            <el-form-item id="operationname" label="Operation">
                              <el-col :span="24">
                                <Searchselect v-model="operationform.optype" name="operation" placeholder="Select" />
                              </el-col>
                            </el-form-item>
                            <el-form-item id="operationdescription" label="Description">
                              <el-col :span="24">
                                <el-input v-model="operationform.opdesc" @keyup.enter.native="getOperations" />
                              </el-col>
                            </el-form-item>
                            <el-form-item id="operationpartitem" label="Item">
                              <el-col :span="12">
                                <el-input v-model="operationform.itemNumber" class="filter-item search-condition-1" placeholder="Item" style="font-size:1rem;" clearable @keyup.enter.native="getOperations">
                                  <el-button slot="prepend" icon="el-icon-search" @click="handleItemModal('part')" />
                                </el-input>
                              </el-col>
                              <el-col :span="12">
                                <Btn name="search" @click="getOperations" />
                                <Btn id="operationeditbtn" name="edit" @click="moveOperations" />
                              </el-col>
                            </el-form-item>
                          </div>
                        </el-row>
                      </el-form>
                    </div>
                  </el-card>
                </el-row>
              </div>
            </el-col>
          </div>
        </el-row>
        <el-row :gutter="10">
          <div ref="leftcol">
            <el-col :xs="24" :sm="24" :md="12">
              <div class="mixin-components-container">
                <el-row>
                  <el-card class="box-card">
                    <div slot="header" class="clearfix" style="text-align: right">
                      <Exportexcel id="exportroutingbtn" :data="routinglist" />
                      <Btn id="saveroutingbtn" name="confirm" value="Save" @click="routingDetailSave" />
                    </div>
                    <div>
                      <el-table
                        id="routingdetaillist"
                        v-loading="listLoading"
                        :data="routinglist"
                        border
                        highlight-current-row
                        style="width: 100%;"
                        @current-change="selectedCurrentRowRouting"
                      >
                        <el-table-column label="Seq" prop="operation_seq" fixed>
                          <template slot-scope="{row}">
                            <template v-if="!row.edit">
                              <span class="link-type" @click="handleUpdateRoutingDetails(row)">{{ row.operation_seq }}</span>
                            </template>
                            <template v-else>
                              <el-input
                                v-model="row.operation_seq"
                                class="edit-input"
                                size="small"
                                @keyup.enter.native="updateRoutingDetails(row)"
                                @keyup.esc.native="row.edit=!row.edit"
                              />
                            </template>
                          </template>
                        </el-table-column>
                        <el-table-column label="Operation" prop="operation_type" width="90" fixed>
                          <template slot-scope="{row}">
                            <span>{{ row.operation_type }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Desc" prop="operation_desc" width="120">
                          <template slot-scope="{row}">
                            <span>{{ row.operation_desc }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Required" prop="required_flag" width="90">
                          <template slot-scope="{row}">
                            <template v-if="!row.edit">
                              <span class="link-type" @click="handleUpdateRoutingDetails(row)">{{ row.required_flag }}</span>
                            </template>
                            <template v-else>
                              <Searchselect v-model="row.required_flag" name="yn" />
                            </template>
                          </template>
                        </el-table-column>
                        <el-table-column label="Indicator" prop="barcode_indicator" width="90">
                          <template slot-scope="{row}">
                            <template v-if="!row.edit">
                              <span class="link-type" @click="handleUpdateRoutingDetails(row)">{{ row.barcode_indicator }}</span>
                            </template>
                            <template v-else>
                              <el-input
                                v-model="row.barcode_indicator"
                                class="edit-input"
                                size="small"
                                @keyup.enter.native="updateRoutingDetails(row)"
                                @keyup.esc.native="row.edit=!row.edit"
                              />
                            </template>
                          </template>
                        </el-table-column>
                        <el-table-column label="Part No." prop="partno">
                          <template slot-scope="{row}">
                            <template v-if="!row.edit">
                              <span class="link-type" @click="handleUpdateRoutingDetails(row)">{{ row.item_number }}</span>
                            </template>
                            <template v-else>
                              <el-input
                                v-model="row.item_number"
                                class="edit-input"
                                size="small"
                                @keyup.enter.native="updateRoutingDetails(row)"
                                @keyup.esc.native="row.edit=!row.edit"
                              />
                            </template>
                          </template>
                        </el-table-column>
                        <el-table-column label="Location" prop="location">
                          <template slot-scope="{row}">
                            <template v-if="!row.edit">
                              <span class="link-type" @click="handleUpdateRoutingDetails(row)">{{ row.location }}</span>
                            </template>
                            <template v-else>
                              <el-input
                                v-model="row.location"
                                class="edit-input"
                                size="small"
                                @keyup.enter.native="updateRoutingDetails(row)"
                                @keyup.esc.native="row.edit=!row.edit"
                              />
                            </template>
                          </template>
                        </el-table-column>
                        <el-table-column label="Length" prop="length">
                          <template slot-scope="{row}">
                            <template v-if="!row.edit">
                              <span class="link-type" @click="handleUpdateRoutingDetails(row)">{{ row.length }}</span>
                            </template>
                            <template v-else>
                              <el-input
                                v-model="row.length"
                                class="edit-input"
                                size="small"
                                @keyup.enter.native="updateRoutingDetails(row)"
                                @keyup.esc.native="row.edit=!row.edit"
                              />
                            </template>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-card>
                </el-row>
              </div>
            </el-col>
          </div>
          <div ref="midcol">
            <el-col :xs="24" :sm="24" :md="1">
              <div class="mixin-components-container" :style="arrowObject">
                <div id="deleteroutingdetails" @click="deleteRoutingDetails"><i class="el-icon-caret-right ihover" style="font-size: 30px; cursor: pointer; margin: 10px;" /></div>
                <div id="createroutingdetails" @click="createRoutingDetails"><i class="el-icon-caret-left ihover" style="font-size: 30px; cursor: pointer; margin: 10px;" /></div>
                <div id="deleteallroutingdetails" @click="deleteAllRoutingDetails"><i class="el-icon-d-arrow-right ihover" style="font-size: 30px; cursor: pointer; margin: 10px;" /></div>
              </div>
            </el-col>
          </div>
          <div ref="rightcol">
            <el-col :xs="24" :sm="24" :md="11">
              <div class="mixin-components-container">
                <el-row>
                  <el-card class="box-card">
                    <div slot="header" class="clearfix" style="text-align: right">
                      <Exportexcel id="exportoperation" :data="operationlist" />
                    </div>
                    <div>
                      <el-table
                        id="operationlist"
                        v-loading="listLoading"
                        :data="operationlist"
                        border
                        highlight-current-row
                        style="width: 100%;"
                        @current-change="selectedCurrentRowOperation"
                      >
                        <el-table-column label="Operation" prop="optype">
                          <template slot-scope="{row}">
                            <span>{{ row.optype }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Description" prop="opdesc">
                          <template slot-scope="{row}">
                            <span>{{ row.opdesc }}</span>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                    <div style="margin-top: 10px;">
                      <el-table
                        id="operationpartlist"
                        v-loading="listLoading"
                        :data="operationpartlist"
                        border
                        highlight-current-row
                        style="width: 100%;"
                      >
                        <el-table-column label="Item" prop="item_number" fixed>
                          <template slot-scope="{row}">
                            <span>{{ row.item_number }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Barcode Type" prop="barcode_type">
                          <template slot-scope="{row}">
                            <span>{{ row.barcode_type }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Indicator" prop="indicator" width="90">
                          <template slot-scope="{row}">
                            <span>{{ row.indicator }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Location" prop="location">
                          <template slot-scope="{row}">
                            <span>{{ row.location }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Length" prop="length">
                          <template slot-scope="{row}">
                            <span>{{ row.length }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Disable Date" prop="disable_date">
                          <template slot-scope="{row}">
                            <span>{{ row.disable_date }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Routing Exist" prop="routing_exist">
                          <template slot-scope="{row}">
                            <span>{{ row.routing_exist }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Unique" prop="unique_check">
                          <template slot-scope="{row}">
                            <span>{{ row.unique_check }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Traceability" prop="traceability" width="120">
                          <template slot-scope="{row}">
                            <span>{{ row.traceability }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Seperator" prop="seperator" width="100">
                          <template slot-scope="{row}">
                            <span>{{ row.seperator }}</span>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-card>
                </el-row>
              </div>
            </el-col>
          </div>
        </el-row>
        <LOVItem :dialog-visible="itemDialogVisible" :input-item="inputItem" @applyItem="selectItem" />
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getItem, getRouting, createRouting, updateRouting, getRoutingDetails, createRoutingDetails, updateRoutingDetails, deleteRoutingDetails, getOperations, getOperationParts } from '@/api/mdm'
import { mapGetters } from 'vuex'
import Searchselect from '@/components/Searchselect'
import LOVItem from '@/components/LOVItem'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'

export default {
  name: 'RoutingMaster',
  components: { Searchselect, LOVItem, Exportexcel, Btn },
  data() {
    return {
      arrowObject: {
        display: 'inline-flex',
        position: 'relative',
        flexDirection: 'column',
        height: '500px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      routingid: null,
      operationid: null,
      selectRouting: null,
      searchitem: null,
      routing: {
        item: '',
        desc: ''
      },
      listLoading: false,
      routinglist: null,
      operationlist: null,
      operationpartlist: null,
      opOptions: null,
      operationform: {
        itemNumber: '',
        itemid: null,
        optype: '',
        opdesc: ''
      },
      routingform: {
        item: null,
        site: null
      },
      rules: {
        item: [{ required: true, message: 'item is required', trigger: 'change' }]
      },
      inputItem: '',
      lovtype: null,
      itemDialogVisible: false

    }
  },
  computed: {
    ...mapGetters([
      'userid',
      'lang',
      'site'
    ])
  },
  methods: {
    async getRouting() {
      this.routingform.site = this.site

      if (this.routingform.item) {
        this.routingform.item = this.fieldUpperCase(this.routingform.item)
        this.searchitem = await getItem(this.routingform.item)

        if (this.searchitem) {
          const routing = await getRouting(this.routingform)

          if (routing) {
            this.routingid = routing.id
            this.getRoutingDetails(this.routingid)
            this.getOperations()
          } else {
            this.$confirm('Routing is not exist for Item ' + this.routingform.item + '.\n Do you want to make a routing?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(async() => {
              this.createRouting()
            }).catch(() => {
            })
          }

          if (routing) {
            this.routing = routing
          }
        } else {
          this.$message({
            message: 'No data found.',
            type: 'error',
            duration: 2000
          })
        }
      } else {
        this.$message({
          message: 'Please input an item.',
          type: 'error',
          duration: 2000
        })
        this.$refs.searchitem.focus()
      }
    },
    async getRoutingDetails(id) {
      this.routingform.site = this.site
      const list = await getRoutingDetails(id)
      this.routinglist = list

      this.routinglist.map(e => {
        this.$set(e, 'edit', false)
      })

      this.$nextTick(() => {
        this.componentHeightChange()
      })
    },
    async createRouting() {
      const data = {
        itemid: this.searchitem.id,
        item: this.searchitem.itemnumber,
        created_by: this.userid,
        last_updated_by: this.userid,
        site: this.site
      }

      const res = await createRouting(data)
      this.routinglist = null
      this.routing.id = res.id
      this.routing.item = this.routingform.item
      this.routing.desc = null

      this.$notify({
        title: 'Success',
        message: 'Routing Creation is completed',
        type: 'success',
        duration: 2000
      })

      this.getRouting()
    },
    async updateRouting() {
      if (this.routing) {
        this.routing.last_updated_by = this.userid
        this.routing.last_update_date = new Date()

        await updateRouting(this.routing)
        this.$notify({
          title: 'Success',
          message: 'Routing Update is completed',
          type: 'success',
          duration: 2000
        })
      }
    },
    async createRoutingDetails() {
      const params = {
        routingid: this.routingid,
        operationid: this.operationid,
        userid: this.userid
      }

      if (!params.routingid) {
        this.$notify({
          title: 'Error',
          message: 'Please select a routing first.',
          type: 'error',
          duration: 2000
        })
      } else if (!params.operationid) {
        this.$notify({
          title: 'Error',
          message: 'Please select a operation first.',
          type: 'error',
          duration: 2000
        })
      } else {
        await createRoutingDetails(params)
        this.getRouting()
        this.$notify({
          title: 'Success',
          message: 'Routing Detail Insert Completed',
          type: 'success',
          duration: 2000
        })
      }
    },
    async updateRoutingDetails(row) {
      const params = {
        routingid: row.routingid,
        operationid: row.operationid,
        seq: row.operation_seq,
        required: row.required_flag,
        userid: this.userid,
        indicator: row.barcode_indicator,
        partno: row.item_number,
        location: row.location,
        length: row.length
      }

      await updateRoutingDetails(params)
      row.edit = false
      this.$notify({
        title: 'Success',
        message: 'Routing Detail Update Completed',
        type: 'success',
        duration: 2000
      })
      this.getRouting()
    },
    async deleteRoutingDetails() {
      const params = {
        routingid: this.selectRouting.routingid,
        operationid: this.selectRouting.operationid,
        operation_seq: this.selectRouting.operation_seq
      }

      if (!params.routingid) {
        this.$notify({
          title: 'Error',
          message: 'Please select a routing first.',
          type: 'error',
          duration: 2000
        })
      } else {
        await deleteRoutingDetails(params)
        this.$notify({
          title: 'Success',
          message: 'Routing Detail Delete Completed',
          type: 'success',
          duration: 2000
        })
        this.getRouting()
      }
    },
    async deleteAllRoutingDetails() {
      this.routinglist.forEach(async e => {
        await deleteRoutingDetails(e)
      })

      this.$nextTick(() => {
        this.$notify({
          title: 'Success',
          message: 'Routing Detail Delete Completed',
          type: 'success',
          duration: 2000
        })
        this.getRouting()
      })
    },
    handleUpdateRoutingDetails(row) {
      row.edit = true
    },
    handleItemModal(val) {
      this.lovtype = val

      if (val === 'assy') {
        this.inputItem = this.routingform.item
      } else if (val === 'part') {
        this.inputItem = this.operationform.itemNumber
      }

      this.itemDialogVisible = true
    },
    selectItem(value) {
      if (value) {
        if (this.lovtype === 'assy') {
          this.routingform.item = value.item_number
        } else if (this.lovtype === 'part') {
          this.operationform.itemNumber = value.item_number
        }
      }
      this.itemDialogVisible = false
    },
    async getOperations() {
      this.operationlist = null
      this.operationform.itemNumber = this.fieldUpperCase(this.operationform.itemNumber)
      this.operationform.assyItemNumber = this.routingform.item
      const res = await getOperations(this.operationform)
      this.operationlist = res

      if (res.length > 0) {
        this.selectedCurrentRowOperation(res[0])
      }
    },
    async getOperationParts(val) {
      const res = await getOperationParts({ opid: val })
      this.operationpartlist = res
    },
    selectedCurrentRowRouting(val) {
      if (val) {
        this.selectRouting = val
      }
    },
    selectedCurrentRowOperation(val) {
      if (val) {
        this.getOperationParts(val.id)
        this.operationid = val.id
      }
    },
    moveOperations() {
      this.$router.push({ name: 'mdmoperation', params: { routerOperationForm: this.operationform }})
    },
    routingDetailSave() {
      if (this.routinglist) {
        this.routinglist.forEach((e, i) => {
          if (e.edit) {
            this.updateRoutingDetails(e)
          }
        })
      } else {
        this.$notify({
          title: 'Warning',
          message: 'Please search an item first.',
          type: 'warning',
          duration: 2000
        })
      }
    },
    componentHeightChange() {
      const height = [
        this.$refs.leftcol.scrollHeight,
        this.$refs.midcol.scrollHeight,
        this.$refs.rightcol.scrollHeight
      ]

      const maxheight = height.reduce((a, b) => {
        return Math.max(a, b)
      })

      this.arrowObject.height = maxheight + 'px'
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
<style scoped>
  .el-button i {
    font-size: 30px;
  }

</style>
