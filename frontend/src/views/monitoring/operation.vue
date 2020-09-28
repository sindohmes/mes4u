<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <!-- header title -->
        <aside>
          <strong>Assembly History</strong>
        </aside>
        <!-- body contents -->
        <div class="mixin-components-container">
          <el-row>
            <el-card class="box-card">
              <!-- Search Condition -->
              <div slot="header" class="clearfix">
                <el-form :inline="true" :model="historyQuery">
                  <el-row id="lineduration">
                    <el-col :sm="24" :md="24" :lg="2">
                      <label class="el-form-item__label">Line/Duration</label>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="3" style="padding-right:10px;">
                      <Searchselect v-model="historyQuery.lineId" name="line" placeholder="Line" />
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="12">
                      <el-date-picker
                        v-model="daterange"
                        type="daterange"
                        range-separator="~"
                        start-placeholder="From date"
                        end-placeholder="To date"
                      />
                    </el-col>
                  </el-row>
                  <el-row id="assy">
                    <el-col :sm="24" :md="24" :lg="2">
                      <label class="el-form-item__label">Assy Items</label>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.itemNumber" class="filter-item search-condition-1" placeholder="Item" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter">
                        <el-button slot="prepend" icon="el-icon-search" @click="handleItemModal('assy')" />
                      </el-input>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.serialNumber" class="filter-item search-condition-1" placeholder="Serial" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.configIndicator" class="filter-item search-condition-1" placeholder="Barcode" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <Searchselect v-model="historyQuery.productFamily" name="family" placeholder="Family" class="search-condition-1" />
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.resultValue" class="filter-item search-condition-1" placeholder="Result Value" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                    </el-col>
                  </el-row>
                  <el-row id="part">
                    <el-col :sm="24" :md="24" :lg="2">
                      <label class="el-form-item__label">Part Items</label>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.partItemNumber" class="filter-item search-condition-2" placeholder="Item" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter">
                        <el-button slot="prepend" icon="el-icon-search" @click="handleItemModal('part')" />
                      </el-input>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.partSerialNumber" class="filter-item search-condition-2" placeholder="Serial" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                    </el-col>
                  </el-row>
                  <el-row id="operation">
                    <el-col :sm="24" :md="24" :lg="2">
                      <label class="el-form-item__label">Operations</label>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <Searchselect v-model="historyQuery.optype" name="operation" placeholder="Operation" class="search-condition-3" />
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.userName" class="filter-item search-condition-3" placeholder="Operator" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="4" style="padding-right:10px;">
                      <el-input v-model="historyQuery.operationDesc" class="filter-item search-condition-3" placeholder="Part Barcode" style="font-size:1rem;" clearable @keyup.enter.native="handleFilter" />
                    </el-col>
                    <!-- Button -->
                    <Btn id="searchbtn" name="search" @click="handleFilter" />
                    <Exportexcel id="exportlist" :data="historyData" />
                  </el-row>
                </el-form>
              </div>
              <!-- Search Result -->
              <el-table
                id="assemblylist"
                ref="assemblyHistory"
                :key="tableKey"
                v-loading="listLoading"
                :data="historyData"
                border
                fit
                highlight-current-row
                style="width: 100%;"
                @sort-change="sortChange"
              >
                <el-table-column type="expand">
                  <template slot-scope="{row}">
                    <p>Item Description : {{ row.itemDescription }}</p>
                    <p>W/O : {{ row.interfacedWoNum }}</p>
                    <p>Operator : {{ row.userName }}</p>
                    <p>Part Item : {{ row.partItemNumber }}</p>
                    <p>Part Item Desc. : {{ row.partDescription }}</p>
                    <p>Part S/N : {{ row.partSerialNumber }}</p>
                    <p>Comments : {{ row.comments }}</p>
                    <p>Barcode : {{ row.configIndicator }}</p>
                    <p>Product Family : {{ row.productFamily }}</p>
                  </template>
                </el-table-column>
                <el-table-column label="ID" align="left" min-width="80" sortable="custom" prop="id">
                  <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Job ID" align="left" min-width="90" sortable="custom" prop="dispatchId">
                  <template slot-scope="{row}">
                    <span>{{ row.dispatchId }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Flag" align="left" min-width="80" sortable="custom" prop="recentFlag">
                  <template slot-scope="{row}">
                    <span>{{ row.recentFlag }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Line" align="left" min-width="120" sortable="custom" prop="lineName">
                  <template slot-scope="{row}">
                    <span>{{ row.lineName }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Item Number" align="left" min-width="150" sortable="custom" prop="itemNumber">
                  <template slot-scope="{row}">
                    <span>{{ row.itemNumber }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Serial Number" align="left" min-width="150" sortable="custom" prop="serialNumber">
                  <template slot-scope="{row}">
                    <span>{{ row.serialNumber }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Time Stamp" align="left" min-width="170" sortable="custom" prop="timestampStr">
                  <template slot-scope="{row}">
                    <span>{{ row.timestampStr }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Operation" align="left" min-width="150" sortable="custom" prop="optype">
                  <template slot-scope="{row}">
                    <span>{{ row.optype }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Operation Desc" align="left" min-width="300" sortable="custom" prop="operationDesc">
                  <template slot-scope="{row}">
                    <span>{{ row.operationDesc }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Result Value" align="left" min-width="300" sortable="custom" prop="resultValue">
                  <template slot-scope="{row}">
                    <span>{{ row.resultValue }}</span>
                  </template>
                </el-table-column>
              </el-table>
              <pagination
                v-show="total > 0"
                :total="total"
                :page.sync="historyQuery.page"
                :limit.sync="historyQuery.limit"
                @pagination="getJobDispatchOpHistories"
              />
            </el-card>
          </el-row>

          <LOVItem :dialog-visible="itemDialogVisible" :input-item="inputItem" @applyItem="selectItem" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getOpHistories } from '@/api/operation'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
import Searchselect from '@/components/Searchselect'
import LOVItem from '@/components/LOVItem'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'

const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

export default {
  name: 'AssemblyHistory',
  components: { Pagination, Searchselect, LOVItem, Exportexcel, Btn },
  data() {
    return {
      tableKey: 0,
      total: 0,
      listLoading: false,
      historyData: null,
      historyQuery: {
        page: 1,
        limit: 10,
        sort: 'ascending',
        sortprop: 'timestampStr',
        lineId: '',
        datestart: '',
        dateend: '',
        itemNumber: '',
        serialNumber: '',
        configIndicator: '',
        productFamily: '',
        resultValue: '',
        partItemNumber: '',
        partSerialNumber: '',
        optype: '',
        nonoptype: '',
        userName: '',
        operationDesc: ''
      },
      lovtype: '',
      itemDialogVisible: false,
      inputItem: null,
      daterange: [
        date.getTime(),
        date.getTime()
      ],
      lineOptions: null
    }
  },
  methods: {
    handleItemModal(val) {
      this.lovtype = val

      if (val === 'assy') {
        this.inputItem = this.historyQuery.itemNumber
      } else if (val === 'part') {
        this.inputItem = this.historyQuery.partItemNumber
      }

      this.itemDialogVisible = true
    },
    selectItem(value) {
      if (value) {
        if (this.lovtype === 'assy') {
          this.historyQuery.itemNumber = value.item_number
        } else if (this.lovtype === 'part') {
          this.historyQuery.partItemNumber = value.item_number
        }
      }
      this.itemDialogVisible = false
    },
    // Search
    handleFilter() {
      // Get Assembly History
      this.historyQuery.datestart = parseTime(this.daterange[0])
      this.historyQuery.dateend = parseTime(this.daterange[1])

      this.getJobDispatchOpHistories()
    },
    // Get Assembly History
    async getJobDispatchOpHistories() {
      this.listLoading = true

      this.historyQuery.itemNumber = this.fieldUpperCase(this.historyQuery.itemNumber)
      this.historyQuery.configIndicator = this.fieldUpperCase(this.historyQuery.configIndicator)
      this.historyQuery.partItemNumber = this.fieldUpperCase(this.historyQuery.partItemNumber)

      const list = await getOpHistories(this.historyQuery)
      this.historyData = list.items
      this.total = list.total
      this.listLoading = false
    },
    sortChange(val) {
      this.historyQuery.sortprop = val.prop
      this.historyQuery.sort = val.order
      this.handleFilter()
    },
    // Export
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>

<style scoped>
/* search condition color 1 */
.search-condition-1>>> input {
  background : #e1faf0;
}
/* search condition color 2 */
.search-condition-2>>> input {
  background : #f8fae1;
}
/* search condition color 3 */
.search-condition-3>>> input {
  background : #fdf6f7;
}
</style>
