/* eslint-disable no-undef */
<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Executable Systems</strong>
        </aside>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24">
            <div class="mixin-components-container">
              <el-row>
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <strong>※ Executable Programs are executed only windows system.</strong>
                  </div>
                  <div>
                    <el-form ref="form" label-position="left" label-width="150px" style="width: 500px; margin-left:50px;">
                      <el-row>
                        <el-col :sm="24" :md="12">
                          <el-form-item id="list" label="Executable Systems" prop="system">
                            <Searchselect v-model="system" name="executablesystem" @change="getObject" @systemList="getSystemList" />
                          </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                          <Btn id="executebtn" name="execute" icon="el-icon-s-platform" @click="executeProgram" />
                        </el-col>
                      </el-row>
                    </el-form>
                  </div>
                </el-card>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import Searchselect from '@/components/Searchselect' // secondary package based on el-pagination
import Btn from '@/components/Btn'

export default {
  name: 'OperationProgram',
  components: { Searchselect, Btn },
  data() {
    return {
      system: null,
      systemList: null,
      systemObject: null
    }
  },
  methods: {
    executeProgram() {
      try {
        const val = this.replaceAll(this.systemObject.callvalue)
        // eslint-disable-next-line no-undef
        var obj = new ActiveXObject('WScript.Shell')
        obj.Run(val)
      } catch (e) {
        if (e instanceof ReferenceError) {
          this.$notify({
            title: 'Warning',
            message: 'Your browser is not IE. If you want to execute the program, use IE.',
            type: 'warning',
            duration: 2000
          })
        } else {
          this.$notify({
            title: 'Warning',
            message: 'Not exist the file.',
            type: 'warning',
            duration: 2000
          })
        }
      }
    },
    replaceAll(val) {
      return val.split('\\').join('\\\\')
    },
    getObject(value) {
      this.systemObject = this.systemList.find(el => {
        return el.id === this.system
      })
    },
    getSystemList(value) {
      this.systemList = value
    }
  }
}
</script>
