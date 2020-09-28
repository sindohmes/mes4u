<template>
  <el-row>
    <el-col>
      <div class="components-container">
        <aside>
          <strong>Log Management</strong>
        </aside>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24">
            <div class="mixin-components-container">
              <el-row>
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <el-form label-position="left" label-width="200">
                      <el-form-item id="date" label="Select a date" prop="selectDate">
                        <el-date-picker v-model="selectDate" type="date" placeholder="Please pick a date" />
                        <Btn id="searchbtn" name="search" @click="handleFilter" />
                      </el-form-item>
                    </el-form>
                  </div>
                  <div id="loglist">
                    <textarea ref="textarea" />
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
import { parseTime } from '@/utils'
import { readLogData } from '@/api/system'
import Btn from '@/components/Btn'
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
require('script-loader!jsonlint')
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'

const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

export default {
  name: 'SystemLog',
  components: { Btn },
  data() {
    return {
      selectDate: date.getTime(),
      selectDateStr: '',
      value: '',
      editor: false
    }
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'application/json',
      gutters: ['CodeMirror-lint-markers'],
      theme: 'rubyblue',
      lint: true
    })
  },
  methods: {
    async handleFilter() {
      this.selectDateStr = parseTime(this.selectDate).substring(0, 10).replace(/-/gi, '')
      this.value = await readLogData(this.selectDateStr)
      this.editor.setValue(this.value)
    }
  }
}
</script>
