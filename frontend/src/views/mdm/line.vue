<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Production Line Management</strong>
        </aside>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24">
            <div class="mixin-components-container">
              <el-row>
                <el-card class="box-card">
                  <div slot="header" class="filter-container clearfix">
                    <el-row>
                      <el-col :xs="24" :sm="24" :md="24">
                        <Searchselect id="site" v-model="listQuery.site" name="site" placeholder="Site" />
                        <el-input id="linename" v-model="listQuery.name" placeholder="Name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
                        <el-input id="linealias" v-model="listQuery.alias" placeholder="Alias" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
                        <Btn id="searchbtn" name="search" @click="handleFilter" />
                        <Btn id="createbtn" name="create" @click="handleCreate" />
                        <Exportexcel id="exportexcel" :data="list" />
                      </el-col>
                    </el-row>
                  </div>
                  <div>
                    <el-table
                      id="linelist"
                      v-loading="listLoading"
                      :data="list"
                      border
                      fit
                      highlight-current-row
                      style="width: 100%;"
                      @sort-change="sortChange"
                    >
                      <el-table-column label="Site">
                        <template slot-scope="{row}">
                          <span>{{ row.siteName }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80">
                        <template slot-scope="{row}">
                          <span>{{ row.id }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Name" prop="name" sortable="custom">
                        <template slot-scope="{row}">
                          <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Alias" align="center">
                        <template slot-scope="{row}">
                          <span>{{ row.alias }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Desc" align="center" min-width="300">
                        <template slot-scope="{row}">
                          <span>{{ row.description }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Date" align="center">
                        <template slot-scope="{row}">
                          <span>{{ row.creationdateformat }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
                        <template slot-scope="{row}">
                          <Btn name="edit" @click="handleUpdate(row)" />
                        </template>
                      </el-table-column>
                    </el-table>
                    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
                  </div>
                </el-card>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
        <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
          <el-form-item label="Site" prop="site">
            <span v-if="dialogStatus==='create'"><Searchselect v-model="temp.site" name="site" placeholder="Site" /></span>
            <span v-else>{{ temp.site }}</span>
          </el-form-item>
          <el-form-item label="ID" prop="id">
            <span v-if="dialogStatus==='create'"><el-input-number v-model="temp.id" /></span>
            <span v-else>{{ temp.id }}</span>
          </el-form-item>
          <el-form-item label="Name" prop="name">
            <span v-if="dialogStatus==='create'"><el-input v-model="temp.name" /></span>
            <span v-else>{{ temp.name }}</span>
          </el-form-item>
          <el-form-item label="Alias" prop="alias">
            <el-input v-model="temp.alias" />
          </el-form-item>
          <el-form-item label="Desc" prop="description">
            <el-input v-model="temp.description" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <Btn name="confirm" @click="dialogStatus==='create'?createData():updateData()" />
          <Btn name="cancel" @click="dialogFormVisible = false" />
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import { getLines, createLine, updateLine } from '@/api/mdm'
import waves from '@/directive/waves' // waves directive
import { mapGetters } from 'vuex'
import moment from 'moment'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Searchselect from '@/components/Searchselect'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'

export default {
  name: 'ProductionLines',
  components: { Pagination, Searchselect, Exportexcel, Btn },
  directives: { waves },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        sort: 'ascending',
        sortprop: 'name',
        site: undefined,
        name: undefined,
        alias: undefined
      },
      siteOptions: null,
      temp: {
        site: null,
        id: null,
        name: '',
        alias: '',
        description: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      rules: {
        site: [{ required: true, message: 'site is required', trigger: 'change' }],
        name: [{ required: true, message: 'name is required', trigger: 'change' }],
        id: [{ required: true, message: 'id is required', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters([
      'userid'
    ])
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      this.listQuery.name = this.fieldUpperCase(this.listQuery.name)

      const res = await getLines(this.listQuery)
      this.list = res.items.content
      this.total = res.total
      this.listLoading = false

      this.list.map(v => {
        this.$set(v, 'creationdateformat', this.to_date(v.creation_date))
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    to_date(value) {
      if (value) {
        return moment(String(value)).format('YYYY-MM-DD')
      }
    },
    sortChange(data) {
      const { prop, order } = data
      this.listQuery.sortprop = prop
      this.listQuery.sort = order
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        site: this.listQuery.site,
        id: null,
        name: '',
        alias: '',
        description: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.createdby = this.userid
          this.temp.lastupdatedby = this.userid
          this.temp.name = this.fieldUpperCase(this.temp.name)
          createLine(this.temp).then(() => {
            this.getList()
            this.dialogFormVisible = false
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
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      // Readonly Event Add Needed
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.last_updated_by = this.userid
          updateLine(this.temp).then(() => {
            this.getList()
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
