module.exports = {

  title: 'MES-U',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  op_sol: 'ST',
  op_trace: 'TRC',
  op_eol: 'COM',
  op_packing: 'PK',
  op_inspection: 'IN',
  not_delete_operation: ['ST', 'TS'],

  // not_delete_operation: ['EOL', 'SOL'],

  historyTableDefault: {
    sortprop: 'timestampStr',
    sort: 'descending'
  },

  version: '1.0.0'

}
