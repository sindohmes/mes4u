import request from '@/utils/request'

export function getPartStatus(id) {
  return request({
    url: '/operation/partStatus',
    method: 'get',
    params: { id }
  })
}

export function checkAssyBarcode(barcode, lang) {
  return request({
    url: '/operation/assyBarcodeCheck',
    method: 'post',
    data: {
      'p_barcode': barcode,
      'p_lang': lang
    }
  })
}

export function getInspectionList(params) {
  return request({
    url: '/operation/getInLineList',
    method: 'get',
    params
  })
}

// Packing
export function getPacking(packing_number) {
  return request({
    url: '/operation/packing',
    method: 'get',
    params: { 'packing_number': packing_number }
  })
}

export function insertPacking(data) {
  return request({
    url: '/operation/packing',
    method: 'post',
    data
  })
}

export function printPacking(data) {
  return request({
    url: '/operation/packing',
    method: 'put',
    data
  })
}
export function cancelPacking(data) {
  return request({
    url: '/operation/packing',
    method: 'delete',
    data
  })
}

export function createInspectionOperation(data) {
  return request({
    url: '/operation/createInspectionOperation',
    method: 'post',
    data
  })
}

// SOL Scan Barcode
export function createSolAssyBarcode(data) {
  return request({
    url: '/operation/solScanBarcode',
    method: 'post',
    data
  })
}

// EOL Scan Barcode
export function createEolAssyBarcode(data) {
  return request({
    url: '/operation/eolScanBarcode',
    method: 'post',
    data
  })
}

export function getOpHistories(params) {
  return request({
    url: '/operation/jobDispatchOpHistoriesView',
    method: 'get',
    params
  })
}

export function getJobDispatchOperationList(params) {
  return request({
    url: '/operation/operationSettingList',
    method: 'get',
    params
  })
}

export function getUserOperation(params) {
  return request({
    url: '/operation/userOperation',
    method: 'get',
    params
  })
}

export function deleteUserOperation(userid) {
  return request({
    url: '/operation/userOperation/' + userid,
    method: 'delete'
  })
}

export function createUserOperation(data) {
  return request({
    url: '/operation/userOperation',
    method: 'post',
    data
  })
}

export function dispatchOpHisChk(data) {
  return request({
    url: '/operation/dispatchOpHisChk',
    method: 'post',
    data
  })
}

export function createTraceOpHistory(data) {
  return request({
    url: '/operation/createTraceOpHistory',
    method: 'post',
    data
  })
}

export function getOpFailed(params) {
  return request({
    url: '/operation/getOpFailed',
    method: 'get',
    params
  })
}

export function repairHistoryView(item, serial, inspection) {
  return request({
    url: '/operation/repairHistoryView',
    method: 'get',
    params: { 'item': item,
      'serial': serial,
      'inspection': inspection }
  })
}

export function checkBoxBarcode(barcode, lang) {
  return request({
    url: '/operation/boxBarcodeCheck',
    method: 'post',
    data: { 'p_barcode': barcode,
      'p_lang': lang }
  })
}

export function createRepairOperation(data) {
  return request({
    url: '/operation/createRepairOperation',
    method: 'post',
    data
  })
}

export function updateRepairOperation(data) {
  return request({
    url: '/operation/updateRepairOperation',
    method: 'post',
    data
  })
}

export function getDefectCodes(val) {
  return request({
    url: '/operation/defectcodelist',
    method: 'get',
    params: {
      'defect': val
    }
  })
}

export function getRepairCodes(val) {
  return request({
    url: '/operation/repaircodelist',
    method: 'get',
    params: {
      'repair': val
    }
  })
}
