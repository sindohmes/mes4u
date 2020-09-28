<template>
  <el-select
    :id="id"
    :value="value"
    :itemid="itemid"
    :labeltype="labeltype"
    :placeholder="placeholder"
    :name="name"
    :clearable="clearable"
    :class="classList"
    @input="updateValue"
    @change="handleChange"
  >
    <el-option v-for="item in listOptions" :key="item.id" :label="item.name" :value="item.id" />
  </el-select>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getOperationTypes,
  getProductFamily,
  getSites,
  getMfgLines
} from '@/api/mdm'

import {
  getPrintingSystems,
  getExecutableSystems,
  getPrintingGroupPrograms,
  getPrintingJobPrograms
} from '@/api/system'

import { getRoles } from '@/api/user'

const checkOptions = [
  'All', 'Yes', 'No'
]

const statusOptions = [
  'All',
  'NEW',
  'SN_CREATED',
  'OP_CREATED',
  'MANUFACTURING',
  'COMPLETED'
]

const packingOptions = [
  'BOX',
  'PALLET'
]

const ynOptions = [
  'Y', 'N'
]

const labelTypeOptions = [
  'LABEL', 'REPORT'
]

export default {
  name: 'Searchselect',
  props: {
    id: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    classes: {
      type: String,
      default: null
    },
    labeltype: {
      type: String,
      default: null
    },
    itemid: {
      type: Number,
      default: null
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      listOptions: null,
      checkOptions,
      statusOptions,
      packingOptions,
      labelTypeOptions,
      ynOptions,
      clearable: true,
      classList: 'filter-item ' + this.classes
    }
  },
  computed: {
    ...mapGetters([
      'lang',
      'site'
    ])
  },
  watch: {
    itemid(value) {
      this.loadOptions()
    }
  },
  created() {
    this.loadOptions()
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event)
    },
    updateValue(event) {
      this.$emit('input', event)
    },
    async loadOptions() {
      // Initialization
      this.listOptions = null
      this.clearable = true

      if (this.name === 'line') {
        const list = await getMfgLines(this.site)
        this.listOptions = list
        this.updateValue(this.listOptions[0].id)
        this.$emit('linelist', this.listOptions)
      } else if (this.name === 'site') {
        const list = await getSites()
        this.listOptions = list
        this.updateValue(this.listOptions[0].id)
      } else if (this.name === 'operation') {
        const list = await getOperationTypes(this.site)
        const temp = []

        list.forEach(e => {
          temp.push({ id: e.operation_type, name: e.operation_type })
        })
        this.listOptions = temp
      } else if (this.name === 'family') {
        const list = await getProductFamily(this.site)
        const temp = []

        list.forEach(e => {
          temp.push({ id: e.family, name: e.family })
        })
        this.listOptions = temp
      } else if (this.name === 'printinglabel') {
        const list = await getPrintingGroupPrograms()
        const temp = []

        list.forEach(e => {
          temp.push({ id: e, name: e })
        })
        this.listOptions = temp
      } else if (this.name === 'printingjoblabel') {
        if (this.itemid) {
          const list = await getPrintingJobPrograms(this.itemid)
          const temp = []

          try {
            list.forEach(e => {
              temp.push({
                id: e.id,
                file: e.file,
                name: e.name + ' - ' + e.description + '(' + e.file + ')',
                parameters: e.parameters,
                labels: e.labels,
                serialflag: e.serialflag
              })
            })
          } catch (e) {
            this.$notify({
              title: 'Warning',
              message: 'This item has no printing information.',
              type: 'warning',
              duration: 2000
            })
          }

          this.clearable = false
          this.listOptions = temp

          this.updateValue(list.length > 0 ? this.listOptions[0].id : null)
          this.$emit('labelList', this.listOptions)
        }
      } else if (this.name === 'printingsystem') {
        const list = await getPrintingSystems()
        this.listOptions = list
        this.clearable = false
      } else if (this.name === 'executablesystem') {
        const list = await getExecutableSystems()
        this.listOptions = list
        this.clearable = false
        this.$emit('systemList', this.listOptions)
      } else if (this.name === 'roles') {
        const list = await getRoles()
        this.listOptions = list
      } else {
        var options = []
        var sourceOptions = null
        var updateFlag = true

        if (this.name === 'check') {
          sourceOptions = this.checkOptions
          this.clearable = false
        } else if (this.name === 'jobstatus') {
          sourceOptions = this.statusOptions
          this.clearable = false
        } else if (this.name === 'printingtype') {
          sourceOptions = this.labelTypeOptions
          this.clearable = false
        } else if (this.name === 'packing') {
          sourceOptions = this.packingOptions
        } else if (this.name === 'yn') {
          sourceOptions = this.ynOptions
          this.clearable = false
          updateFlag = false
        }

        sourceOptions.forEach(e => {
          options.push({ id: e, name: e })
        })

        this.listOptions = options

        if (updateFlag) {
          this.updateValue(this.listOptions[0].id)
        }
      }
    }
  }

}
</script>
