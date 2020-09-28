module.exports = {
  procedure_parameters: {
    p_rexpert_run: [
      'getter:token',
      'getter:lang',
      'MES',
      'spring:db'
    ],
    P_INSERT_ZPLCODE_FOR_EACH: [
      'getter:mfgid'
    ]
    // (:P_ITEM_NUMBER, :P_SERIAL_NUMBER, :P_MFG_SITE_ID, :P_OUTPUT_ZPL, :P_RESULT, :P_MESSAGE);
  },

  match_parameters: {
    label: [
      { job: 'item', label: 'p_item_number' },
      { job: 'min_sn', label: 'p_from_sn' },
      { job: 'max_sn', label: 'p_to_sn' },
      { job: 'id', label: 'p_job_number' }
    ],
    EOL: [
      { info: 'item', label: 'p_item_number' },
      { info: 'serial', label: 'p_from_sn' },
      { info: 'serial', label: 'p_to_sn' }
    ],
    PACKING: [
      { info: 'packingNumber', label: 'p_packing_number' }
    ]
  },

  const_parameters: {
    p_count: 1
  }

}

