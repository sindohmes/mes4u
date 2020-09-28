<template>
  <el-button size="small" class="filter-item" :type="btntype" :icon="btnicon" :name="name" :value="value" :plain="plain" @click="handleButton">
    {{ label }}
  </el-button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    label: function() {
      if (this.value) {
        return this.value.charAt(0).toUpperCase() + this.value.slice(1)
      } else {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1)
      }
    },
    btnicon: function() {
      if (this.icon) {
        return this.icon
      } else {
        if (this.name === 'search') { return 'el-icon-search' } else if (this.name === 'cancel') { return 'el-icon-close' } else if (this.name === 'create') { return 'el-icon-document-add' } else if (this.name === 'edit') { return 'el-icon-edit' } else if (this.name === 'confirm') { return 'el-icon-check' } else if (this.name === 'delete') { return 'el-icon-delete' } else if (this.name === 'close') { return 'el-icon-circle-close' } else { return '' }
      }
    },
    plain: function() {
      if (this.name === 'search') { return false } else if (this.name === 'cancel') { return false } else if (this.name === 'create') { return false } else if (this.name === 'edit') { return true } else if (this.name === 'confirm') { return false } else if (this.name === 'delete') { return false } else if (this.name === 'close') { return true } else { return true }
    },
    btntype: function() {
      if (this.name === 'search') { return 'primary' } else if (this.name === 'cancel') { return 'warning' } else if (this.name === 'create') { return 'info' } else if (this.name === 'edit') { return 'success' } else if (this.name === 'confirm') { return 'success' } else if (this.name === 'delete') { return 'danger' } else if (this.name === 'close') { return null } else { return 'primary' }
    }
  },
  methods: {
    handleButton(event) {
      this.$emit('click', event)
    }
  }
}
</script>
