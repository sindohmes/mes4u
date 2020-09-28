<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Printing Data Management</strong>
        </aside>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24">
            <div class="mixin-components-container">
              <el-row id="list">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <div style="margin-bottom: 20px">
                      <strong>
                        <i class="el-icon-full-screen" />
                        <span>Printing Data</span>
                      </strong>
                    </div>
                    <el-row>
                      <el-col :xs="24" :sm="24" :md="24">
                        <Searchselect
                          id="searchlabel"
                          v-model="listQuery.name"
                          name="printinglabel"
                          @change="selectLabelContent"
                        />
                        <el-input id="searchname" v-model="listQuery.file" placeholder="File" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
                        <Btn id="searchbtn" name="search" @click="handleFilter" />
                        <Btn id="createbtn" name="create" @click="handleProgramCreate" />
                        <Exportexcel id="exportlist" :data="programlist" />
                      </el-col>
                    </el-row>
                  </div>
                  <div>
                    <el-table
                      v-loading="listLoading"
                      :data="programlist"
                      border
                      fit
                      highlight-current-row
                      style="width: 100%;"
                    >
                      <el-table-column label="ID" width="50" fixed>
                        <template slot-scope="{row}">
                          <span>{{ row.id }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="System" align="center" width="80" fixed>
                        <template slot-scope="{row}">
                          <span>{{ row.system }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Type" width="70" fixed>
                        <template slot-scope="{row}">
                          <span>{{ row.type }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Name" width="150" fixed>
                        <template slot-scope="{row}">
                          <span>{{ row.name }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="File" width="120">
                        <template slot-scope="{row}">
                          <span>{{ row.file }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Description" align="center" width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.description }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Used Op." align="center" width="100">
                        <template slot-scope="{row}">
                          <span>{{ row.usedoperation }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Parameters" align="left" width="300">
                        <template slot-scope="{row}">
                          <span>{{ row.parameters }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Labels" align="left" width="300">
                        <template slot-scope="{row}">
                          <span>{{ row.labels }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Attributes" align="left" width="300">
                        <template slot-scope="{row}">
                          <span>{{ row.attributes }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Order Flag" align="center" width="70">
                        <template slot-scope="{row}">
                          <span>{{ row.orderflag }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Serial Flag" align="center" width="70">
                        <template slot-scope="{row}">
                          <span>{{ row.serialflag }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Actions" align="center" width="250" class-name="small-padding fixed-width" fixed="right">
                        <template slot-scope="{row,$index}">
                          <Btn name="edit" @click="handleProgramUpdate(row)" />
                          <Btn name="delete" @click="handleProgramDelete(row,$index)" />
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
      <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form ref="programForm" :rules="programRules" :model="programObject" label-position="left" label-width="150px" style="margin-left:50px;">
          <el-form-item label="System" prop="systemid">
            <Searchselect
              v-model="programObject.systemid"
              name="printingsystem"
            />
          </el-form-item>
          <el-form-item label="Type" prop="type">
            <Searchselect
              v-model="programObject.type"
              name="printingtype"
            />
          </el-form-item>
          <el-form-item label="Name" prop="name">
            <el-input v-model="programObject.name" @keyup.enter.native="confirmData()" />
          </el-form-item>
          <el-form-item label="File" prop="file">
            <el-input v-model="programObject.file" @keyup.enter.native="confirmData()" />
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input v-model="programObject.description" @keyup.enter.native="confirmData()" />
          </el-form-item>
          <el-form-item label="Used Operation" prop="usedoperation">
            <el-input v-model="programObject.usedoperation" @keyup.enter.native="confirmData()" />
          </el-form-item>
          <el-form-item label="Parameters" prop="parameters">
            <el-input v-model="programObject.parameters" type="textarea" />
          </el-form-item>
          <el-form-item label="Labels" prop="labels">
            <el-input v-model="programObject.labels" type="textarea" />
          </el-form-item>
          <el-form-item label="Attributes" prop="attributes">
            <el-input v-model="programObject.attributes" type="textarea" />
          </el-form-item>
          <el-form-item label="Contents" prop="contents">
            <el-input v-model="programObject.contents" type="textarea" rows="10" />
          </el-form-item>
          <el-form-item label="QR Code" prop="qrcode">
            <el-input v-model="programObject.qrcode" @keyup.enter.native="confirmData()" />
          </el-form-item>
          <el-form-item label="Order Flag" prop="orderflag">
            <Searchselect
              v-model="programObject.orderflag"
              name="yn"
            />
          </el-form-item>
          <el-form-item label="Serial Flag" prop="serialflag">
            <Searchselect
              v-model="programObject.serialflag"
              name="yn"
            />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <Btn name="confirm" @click="confirmData()" />
          <Btn name="cancel" @click="dialogFormVisible = false" />
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>
<script>
import { mapGetters } from 'vuex'
import {
  getPrintingPrograms,
  createPrintingPrograms,
  updatePrintingPrograms,
  deletePrintingPrograms,
  getPrintingSystems
} from '@/api/system'

import Searchselect from '@/components/Searchselect'
import Exportexcel from '@/components/Exportexcel'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Btn from '@/components/Btn'

export default {
  name: 'SystemPrint',
  components: { Searchselect, Exportexcel, Btn, Pagination },
  data() {
    return {
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20,
        sort: 'ascending',
        sortprop: 'name',
        file: '',
        name: ''
      },
      title: '',
      dialogType: '',
      dialogStatus: '',
      dialogFormVisible: false,
      systemOptions: null,
      programOptions: null,
      programlist: null,
      programForm: null,
      programObject: {
        systemid: null,
        type: '',
        name: '',
        file: '',
        oldname: '',
        description: '',
        usedoperation: '',
        parameters: '',
        labels: '',
        attributes: '',
        orderflag: '',
        serialflag: '',
        qrcode: '',
        contents: '',
        createdby: undefined,
        lastupdatedby: undefined
      },
      programRules: {
        system: [{ required: true, message: 'system is required', trigger: 'change' }],
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        name: [{ required: true, message: 'name is required', trigger: 'change' }]
      },
      total: 0
    }
  },
  computed: {
    ...mapGetters([
      'userid'
    ])
  },
  mounted() {
    this.handleFilter()
  },
  methods: {
    async getList() {
      this.listLoading = true

      const res = await getPrintingPrograms(this.listQuery)
      this.programOptions = res.items.content
      this.systemOptions = await getPrintingSystems()

      // Pagination Logic Add needed(Spring Boot)
      this.programlist = res.items.content.map(v => {
        const system = this.systemOptions.find(el => {
          return el.id === v.systemid
        })
        this.$set(v, 'system', system.name)

        return v
      })
      this.total = res.total
      this.listLoading = false
    },
    selectLabelContent() {

    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetValue() {
      this.programObject = {
        systemid: null,
        type: '',
        name: '',
        file: '',
        oldname: '',
        description: '',
        usedoperation: '',
        parameters: '',
        labels: '',
        attributes: '',
        orderflag: '',
        serialflag: '',
        qrcode: '',
        contents: '',
        createdby: undefined,
        lastupdatedby: undefined
      }
    },
    handleProgramCreate() {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.resetValue()

      this.$nextTick(() => {
        this.$refs['programForm'].clearValidate()
      })
    },
    handleProgramUpdate(row) {
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.resetValue()
      this.programObject = Object.assign({}, row) // copy obj
      this.programObject.oldname = row.name

      this.$nextTick(() => {
        this.$refs['programForm'].clearValidate()
      })
    },
    async handleProgramDelete(row, index) {
      this.$confirm('Do you delete a printing information?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        await deletePrintingPrograms(row.id)
        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })

        this.programlist.splice(index, 1)
      }).catch()
    },
    async confirmData() {
      this.$refs.programForm.validate(async(valid) => {
        if (valid) {
          this.dialogFormVisible = false
          this.programObject.name = this.fieldUpperCase(this.programObject.name)

          if (this.dialogStatus === 'create') {
            this.programObject.createdby = this.userid
            this.programObject.lastupdatedby = this.userid
            await createPrintingPrograms(this.programObject)

            this.$notify({
              title: 'Success',
              message: 'Create Successfully',
              type: 'success',
              duration: 2000
            })
            this.getList()
          } else if (this.dialogStatus === 'update') {
            this.programObject.lastupdatedby = this.userid
            await updatePrintingPrograms(this.programObject)

            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
            this.getList()
          }
        }
      })
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>
