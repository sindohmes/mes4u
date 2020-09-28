<template>
  <div class="components-container">
    <!-- header title -->
    <aside>
      <strong>Packing</strong>
    </aside>
    <div class="mixin-components-container">
      <el-card class="box-card" style="margin-bottom:10px;">
        <el-form ref="packing" :model="packing" label-width="180px" class="form-container">
          <el-row>
            <div class="postInfo-container">
              <el-row style="margin-top: 10px;">
                <el-col :span="24">
                  <el-form-item id="packingnumber" label="Packing Number">
                    <el-col :span="10">
                      <el-input v-model="packing.packingNumber" placeholder="Please enter packing number" @keyup.enter.native="onFind" />
                    </el-col>
                    <el-col :span="10">
                      <Btn id="searchbtn" name="search" @click="onFind" />
                      <Btn id="cancelbtn" name="cancel" @click="cancelForm" />
                      <Btn id="packbtn" name="pack" icon="el-icon-box" @click="packForm" />
                      <Btn id="printbtn" name="print" icon="el-icon-printer" @click="printing" />
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item id="barcode" label="Scan Content Barcode">
                    <el-col :span="14">
                      <el-input ref="barcode" v-model="barcode" placeholder="Please enter the barcode" @keyup.enter.native="insertForm" />
                    </el-col>
                    <el-col id="count" :span="8" style="margin-left: 10px;">
                      <el-col :span="12">
                        <el-input v-model="target_count" placeholder="Target" />
                      </el-col>
                      <el-col :span="12">
                        <el-input v-model="count" placeholder="Count" />
                      </el-col>
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item id="result" label="Result">
                    <el-col :span="20">
                      <Resultbox v-model="result" placeholder="Result" :data="resultdata" />
                    </el-col>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-row>
        </el-form>
      </el-card>

      <el-card id="packinglist" class="box-card" style="margin-bottom:10px;">
        <el-row>
          <el-table
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            style="width: 100%;"
            @sort-change="sortChange"
          >
            <el-table-column label="PACKING ID" prop="id" align="center" width="130">
              <template slot-scope="{row}">
                <span>{{ row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column label="PACKING NUMBER" width="200">
              <template slot-scope="{row}">
                <span>{{ row.packingNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column label="CONTENT NUMBER" align="center">
              <template slot-scope="{row}">
                <span>{{ row.contentNumber }}</span>
              </template>
            </el-table-column>
            <el-table-column label="ITEM NUMBER" align="center" min-width="130">
              <template slot-scope="{row}">
                <span>{{ row.item }}</span>
              </template>
            </el-table-column>
            <el-table-column label="PACKING TYPE" align="center" width="130" class-name="small-padding fixed-width">
              <template slot-scope="{row}">
                <span>{{ row.type }}</span>
              </template>
            </el-table-column>
            <el-table-column label="STATUS">
              <template slot-scope="{row}">
                <span>{{ row.status }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import defaultSettings from '@/settings'
import Resultbox from '@/components/Resultbox'
import { getItems } from '@/api/mdm'
import { getPacking, insertPacking, printPacking, cancelPacking } from '@/api/operation'
import { getPrintingOperationPrograms } from '@/api/system'
import { printLabel, settingValues } from '@/utils/print'
import Btn from '@/components/Btn'

const { op_packing } = defaultSettings

export default {
  name: 'OperationPacking',
  components: { Resultbox, Btn },
  data() {
    return {
      packing: {
        id: '',
        packingNumber: '',
        contentNumber: '',
        item: '',
        type: '',
        status: '',
        targetCount: ''
      },
      barcode: '',
      target_count: '',
      count: '',
      result: '',
      resultdata: '',
      list: null,
      listLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'site',
      'userid',
      'lang'
    ])
  },
  mounted() {
    this.$refs.barcode.focus()
  },
  methods: {
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    onFind() {
      this.findForm()
    },
    async findForm() {
      if (this.packing.packingNumber) {
        this.listLoading = true
        const res = await getPacking(this.packing.packingNumber)
        if (res.length > 0) {
          this.packing = Object.assign({}, res[0])
          this.count = res.length
        } else {
          this.target_count = ''
          this.count = ''
        }

        this.list = res
        this.listLoading = false
      }
      this.$refs.barcode.focus()
    },
    async insertForm() {
      const params = {
        'scan_data': this.fieldUpperCase(this.barcode),
        'site': this.site,
        'packing_number_in': this.packing.packingNumber,
        'userlang': this.lang,
        'user_id': this.userid,
        'operation': op_packing
      }
      const res = await insertPacking(params)
      this.target_count = res.p_target_count
      this.count = res.p_count
      this.resultdata = res.p_result

      if (this.resultdata === 'OK') {
        this.packing.packingNumber = res.p_packing_number
        this.result = '[' + res.p_result + '] ' + this.barcode
      } else {
        this.result = '[' + res.p_result + '] ' + res.p_message
      }

      this.findForm()
      if (this.target_count === this.count) {
        this.$notify({
          title: 'Packing success',
          message: 'Packing Successfully',
          type: 'success',
          duration: 2000
        })

        await this.printing()
        this.packing.packingNumber = ''
      }

      this.barcode = null
    },
    async cancelForm() {
      this.$confirm('This will permanently be canceled. Continue?', 'Warning', {
        confirmButtonText: 'Continue',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.canceling()
      }).catch(() => {

      })
    },
    async canceling() {
      if (this.packing.packingNumber) {
        const params = {
          'packing_number': this.packing.packingNumber,
          'user_id': this.userid,
          'userlang': this.lang
        }
        const res = await cancelPacking(params)

        this.resultdata = res.p_result
        this.result = '[' + res.p_result + '] ' + res.p_message
        await this.findForm()
        this.packing.packingNumber = ''
        this.target_count = ''
        this.count = ''
      }
    },
    async packForm() {
      const params = {
        'packing_id': this.packing.id,
        'user_id': this.userid,
        'userlang': this.lang
      }
      const res = await printPacking(params)
      if (res.p_result === 'OK') {
        await this.findForm()
        this.$notify({
          title: 'Packing success',
          message: 'Packing Successfully',
          type: 'success',
          duration: 2000
        })
        this.$refs.barcode.focus()
      } else {
        this.$notify({
          title: 'Packing fail',
          message: res.p_message,
          type: 'warning',
          duration: 2000
        })
      }
    },
    async printing() {
      // Set Printing Parameters
      const itemparams = {
        itemNumber: this.packing.item,
        site: this.site
      }
      const itemlist = await getItems(itemparams)
      const itemid = itemlist[0].item_id

      // Set Printing Values
      try {
        const labelContent = await getPrintingOperationPrograms(op_packing, itemid)
        const labelValues = await settingValues(labelContent, op_packing, this.packing)

        // Print Implementation
        printLabel(labelContent, labelValues)
      } catch (e) {
        this.$notify({
          title: 'Printing fail',
          message: 'No Printing Information',
          type: 'warning',
          duration: 2000
        })
      }
    },
    fieldUpperCase(val) {
      return val ? val.toUpperCase().trim() : null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
