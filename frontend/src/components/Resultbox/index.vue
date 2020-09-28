<template>
  <div>
    <el-input
      type="textarea"
      :class="scanData"
      :data="data"
      :rows="2"
      :placeholder="placeholder"
      style="font-size:3rem;"
      readonly
      :value="value"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: 'Resultbox',
  props: {
    placeholder: {
      type: String,
      default: null
    },
    data: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      scanData: {
        'scan-result': true,
        'scan-success-1': false,
        'scan-success-2': false,
        'scan-error': false
      }
    }
  },
  watch: {
    value(value) {
      this.changeClass(this.data)
    }
  },
  methods: {
    changeClass(val) {
      if (val === 'OK') {
        if (this.scanData['scan-success-1'] === true) {
          this.scanData = {
            'scan-result': false,
            'scan-success-1': false,
            'scan-success-2': true,
            'scan-error': false
          }
        } else {
          this.scanData = {
            'scan-result': false,
            'scan-success-1': true,
            'scan-success-2': false,
            'scan-error': false
          }
        }
      } else {
        this.scanData = {
          'scan-result': false,
          'scan-success-1': false,
          'scan-success-2': false,
          'scan-error': true
        }
      }
    },
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
<style scoped>
/* scan result default */
.scan-result>>> textarea {
  background : #eff3ee;
  font-weight: bold;
}

/* scan success 1 */
.scan-success-1>>> textarea {
  background : #67C23A;
  font-weight: bold;
}

/* scan success 2 */
.scan-success-2>>> textarea {
  background : #a7e08b;
  font-weight: bold;
}
/* scan error */
.scan-error>>> textarea {
  background : #F56C6C;
  font-weight: bold;
}

</style>
