<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>User Management</strong>
        </aside>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24">
            <div class="mixin-components-container">
              <el-row>
                <el-card class="box-card">
                  <div slot="header" class="filter-container clearfix">
                    <el-row>
                      <el-col :xs="24" :sm="24" :md="24">
                        <Searchselect id="roles" v-model="listQuery.role" name="roles" placeholder="Roles" />
                        <el-input id="username" v-model="listQuery.name" placeholder="Name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
                        <el-input id="userorg" v-model="listQuery.organization" placeholder="Organization" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
                      <el-table-column label="Role" min-width="120">
                        <template slot-scope="{row}">
                          <span>{{ row.role_name }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Username" prop="username" sortable="custom" align="center" min-width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.username }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Name" prop="name" sortable="custom" min-width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.name }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="E-mail" align="center" min-width="250">
                        <template slot-scope="{row}">
                          <span>{{ row.email }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Organization" align="center" min-width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.organization }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Language" align="center" min-width="90">
                        <template slot-scope="{row}">
                          <span>{{ row.lang }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Registered Date" align="center" min-width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.registeredDate }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Disable Date" align="center" min-width="150">
                        <template slot-scope="{row}">
                          <span>{{ row.disableDate }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="Actions" align="center" width="130" class-name="small-padding fixed-width">
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
        <p style="margin-bottom: 20px">Username is required at least 4 characters, and Password is required at leat 6 characters.</p>
        <el-form ref="registerForm" :rules="registerRules" :model="temp" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
          <el-form-item label="Role" prop="role">
            <span v-if="dialogStatus==='create'"><Searchselect v-model="temp.selectedRole" name="roles" placeholder="Role" /></span>
            <span v-else>{{ temp.role_name }}</span>
          </el-form-item>
          <el-form-item label="Username" prop="username">
            <span v-if="dialogStatus==='create'"><el-input v-model="temp.username" /></span>
            <span v-else>{{ temp.username }}</span>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="temp.password" type="password" />
          </el-form-item>
          <el-form-item label="Confirm Password" prop="confirmpassword">
            <el-input v-model="temp.confirmpassword" type="password" />
          </el-form-item>
          <el-form-item label="First Name" prop="firstname">
            <span v-if="dialogStatus==='create'"><el-input v-model="temp.firstname" /></span>
            <span v-else>{{ temp.firstname }}</span>
          </el-form-item>
          <el-form-item label="Last Name" prop="lastname">
            <span v-if="dialogStatus==='create'"><el-input v-model="temp.lastname" /></span>
            <span v-else>{{ temp.lastname }}</span>
          </el-form-item>
          <el-form-item label="E-mail" prop="email">
            <el-input v-model="temp.email" />
          </el-form-item>
          <el-form-item label="Organization" prop="organization">
            <el-input v-model="temp.organization" />
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
import { validUsername, validEmail } from '@/utils/validate'
import { getUsers } from '@/api/user'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Searchselect from '@/components/Searchselect'
import Exportexcel from '@/components/Exportexcel'
import Btn from '@/components/Btn'

export default {
  name: 'Register',
  components: { Pagination, Searchselect, Exportexcel, Btn },
  directives: { waves },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter the correct email'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (this.dialogStatus === 'create') {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.temp.password) {
        callback(new Error('Passwords are not equal, please re-input the password.'))
      } else {
        if (this.dialogStatus === 'create') {
          if (value.length < 6) {
            callback(new Error('The password can not be less than 6 digits'))
          } else {
            callback()
          }
        } else {
          callback()
        }
      }
    }
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        sort: 'ascending',
        sortprop: 'name',
        role: undefined,
        name: undefined,
        organization: undefined
      },
      roleOptions: null,
      temp: {
        id: undefined,
        role: [],
        username: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: '',
        email: '',
        organization: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      registerRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirmpassword: [{ required: this.dialogStatus === 'create', trigger: 'blur', validator: validateConfirmPassword }],
        email: [{ required: this.dialogStatus === 'create', trigger: 'blur', validator: validateEmail }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true

      const res = await getUsers(this.listQuery)
      this.list = res.items.content
      this.total = res.total
      this.listLoading = false
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    sortChange(data) {
      const { prop, order } = data
      this.listQuery.sortprop = prop
      this.listQuery.sort = order
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        role: [this.listQuery.role],
        username: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: '',
        email: '',
        organization: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['registerForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.temp.role[0] = this.temp.selectedRole
          this.$store.dispatch('user/register', this.temp)
            .then((response) => {
              this.$notify({
                title: 'Success',
                message: response,
                type: 'success',
                duration: 2000
              })

              this.handleFilter()
              this.dialogFormVisible = false
            })
            .catch((response) => {
            })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true

      this.$nextTick(() => {
        this.$refs['registerForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/update', this.temp)
            .then((response) => {
              this.$notify({
                title: 'Success',
                message: response,
                type: 'success',
                duration: 2000
              })

              this.handleFilter()
              this.dialogFormVisible = false
            })
            .catch((response) => {
            })
        }
      })
    }
  }
}
</script>
