<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>External System Management</strong>
        </aside>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24">
            <div class="mixin-components-container">
              <el-row id="printinglist">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <strong>
                      <i class="el-icon-full-screen" />
                      <span>Printing System</span>
                      <el-button id="addprintingbtn" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate('PRINTING')">
                        Add
                      </el-button>
                      <Exportexcel id="exportprinting" :data="printinglist" />
                    </strong>
                  </div>
                  <div>
                    <el-table
                      v-loading="listLoading"
                      :data="printinglist"
                      border
                      fit
                      highlight-current-row
                      style="width: 100%;"
                    >
                      <el-table-column label="ID" min-width="50">
                        <template slot-scope="{row}">
                          <span>{{ row.id }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Name" min-width="90">
                        <template slot-scope="{row}">
                          <span>{{ row.name }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Description" align="center" min-width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.description }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Call Type" min-width="120">
                        <template slot-scope="{row}">
                          <span>{{ row.calltype }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Call Proc" min-width="220">
                        <template slot-scope="{row}">
                          <span>{{ row.callproc }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Call Value" align="center" min-width="300">
                        <template slot-scope="{row}">
                          <span>{{ row.callvalue.substring(0,40) }}<span v-if="row.callvalue.length>40">..</span></span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Default" align="center" min-width="90">
                        <template slot-scope="{row}">
                          <span>{{ row.defaultflag }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Actions" align="center" min-width="200" class-name="small-padding fixed-width">
                        <template slot-scope="{row,$index}">
                          <el-button type="primary" size="mini" @click="handleUpdate(row)">
                            Edit
                          </el-button>
                          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
                            Delete
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-row>
              <el-row id="executablelist">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <strong>
                      <i class="el-icon-full-screen" />
                      <span>Executable System</span>
                      <el-button id="addexecutablebtn" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate('EXECUTABLE')">
                        Add
                      </el-button>
                      <Exportexcel id="exportexecutable" :data="executablelist" />
                    </strong>
                  </div>
                  <div>
                    <el-table
                      v-loading="listLoading"
                      :data="executablelist"
                      border
                      fit
                      highlight-current-row
                      style="width: 100%;"
                    >
                      <el-table-column label="ID" min-width="50">
                        <template slot-scope="{row}">
                          <span>{{ row.id }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Name" min-width="90">
                        <template slot-scope="{row}">
                          <span>{{ row.name }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Description" align="center" min-width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.description }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Call Type" min-width="120">
                        <template slot-scope="{row}">
                          <span>{{ row.calltype }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Call Value" align="center" min-width="300">
                        <template slot-scope="{row}">
                          <span>{{ row.callvalue.substring(0,40) }}<span v-if="row.callvalue.length>40">..</span></span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Actions" align="center" min-width="230" class-name="small-padding fixed-width">
                        <template slot-scope="{row,$index}">
                          <el-button type="primary" size="mini" @click="handleUpdate(row)">
                            Edit
                          </el-button>
                          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
                            Delete
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
        <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="150px" style="width: 500px; margin-left:50px;">
          <el-form-item label="Type" prop="type">
            <el-select ref="inputtype" v-model="temp.type" class="filter-item" placeholder="Please select">
              <el-option v-for="item in typeMap" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item label="Name" prop="name">
            <el-input v-model="temp.name" />
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input v-model="temp.description" />
          </el-form-item>
          <el-form-item label="Call Type" prop="calltype">
            {{ callTypeMap[0] }}
          </el-form-item>
          <el-form-item label="Call Procedure" prop="callproc">
            <el-input v-model="temp.callproc" />
          </el-form-item>
          <el-form-item label="Call Value" prop="callvalue">
            <el-input v-model="temp.callvalue" />
          </el-form-item>
          <el-form-item v-if="temp.type==='PRINTING'" label="Default" prop="defaultflag">
            <el-switch v-model="temp.defaultflag" active-text="Yes" inactive-text="No" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">
            Cancel
          </el-button>
          <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
            Confirm
          </el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPrintingSystems, getExecutableSystems, createSystems, updateSystems, deleteSystems } from '@/api/system'
import Exportexcel from '@/components/Exportexcel'

export default {
  name: 'SystemProgram',
  components: { Exportexcel },
  data() {
    return {
      listLoading: false,
      printinglist: null,
      executablelist: null,
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogStatus: '',
      dialogFormVisible: false,
      temp: {
        type: '',
        name: '',
        description: '',
        calltype: '',
        callproc: '',
        callvalue: '',
        defaultflag: false,
        createdby: undefined,
        lastupdatedby: undefined
      },
      callTypeMap: ['URL'], // If you want to add a type, please consider to make a procedure or function.
      typeMap: ['PRINTING', 'EXECUTABLE'],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        name: [{ required: true, message: 'name is required', trigger: 'change' }]
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
      this.printinglist = await getPrintingSystems()
      this.executablelist = await getExecutableSystems()
      this.listLoading = false
    },
    resetTemp(type) {
      this.temp = {
        type: type,
        name: '',
        description: '',
        calltype: 'URL',
        callproc: '',
        callvalue: '',
        defaultflag: false,
        createdby: undefined,
        lastupdatedby: undefined
      }
    },
    handleCreate(type) {
      this.resetTemp(type)
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      // this.$refs.inputtype.disabled = false
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.defaultflag = row.defaultflag === 'Y'
      this.dialogStatus = 'update'
      this.dialogFormVisible = true

      // Readonly Event Add Needed
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    async createData() {
      this.$refs.dataForm.validate(async(valid) => {
        if (valid) {
          this.temp.createdby = this.userid
          this.temp.defaultflag = this.temp.defaultflag ? 'Y' : 'N'
          await createSystems(this.temp)
          this.dialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Created Successfully',
            type: 'success',
            duration: 2000
          })
          this.getList()
        }
      })
    },
    async updateData() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          this.temp.createdby = this.userid
          this.temp.lastupdatedby = this.userid
          this.temp.defaultflag = this.temp.defaultflag ? 'Y' : 'N'
          await updateSystems(this.temp)
          this.dialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Update Successfully',
            type: 'success',
            duration: 2000
          })
          this.getList()
        }
      })
    },
    async handleDelete(row, index) {
      const type = row.type

      this.$confirm('Do you delete a system?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        await deleteSystems(row.id)
        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })

        if (type === 'PRINTING') {
          this.printinglist.splice(index, 1)
        } else if (type === 'EXECUTABLE') {
          this.executablelist.splice(index, 1)
        }
      }).catch()
    }

  }
}
</script>
