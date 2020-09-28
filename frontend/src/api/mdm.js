import request from '@/utils/request'

export function getSites() {
  return request({
    url: '/mdm/sites',
    method: 'get'
  })
}
export function getLines(query) {
  return request({
    url: '/mdm/lines',
    method: 'get',
    params: query
  })
}

export function getMfgLines(id) {
  return request({
    url: '/mdm/lines/' + id,
    method: 'get'
  })
}

export function createLine(data) {
  return request({
    url: '/mdm/lines',
    method: 'post',
    data
  })
}

export function updateLine(data) {
  return request({
    url: '/mdm/lines',
    method: 'put',
    data
  })
}

export function getOperationTypes(id) {
  return request({
    url: '/mdm/operationType',
    method: 'get',
    params: {
      'site': id
    }
  })
}

export function getOperations(params) {
  return request({
    url: '/mdm/operations',
    method: 'get',
    params
  })
}

export function getOperationParts(params) {
  return request({
    url: '/mdm/operationParts',
    method: 'get',
    params
  })
}

export function getItems(params) {
  return request({
    url: '/mdm/items',
    method: 'get',
    params
  })
}

export function getItem(item) {
  return request({
    url: '/mdm/item/' + item,
    method: 'get'
  })
}

export function getProductFamily(id) {
  return request({
    url: '/mdm/productFamily/' + id,
    method: 'get'
  })
}

export function getRouting(params) {
  return request({
    url: '/mdm/mtlRoutings',
    method: 'get',
    params
  })
}

export function createRouting(data) {
  return request({
    url: '/mdm/mtlRoutings',
    method: 'post',
    data
  })
}

export function updateRouting(data) {
  return request({
    url: '/mdm/mtlRoutings',
    method: 'put',
    data
  })
}

export function getRoutingDetails(id) {
  return request({
    url: '/mdm/mtlRoutingDetails',
    method: 'get',
    params: { id }
  })
}

export function createRoutingDetails(data) {
  return request({
    url: '/mdm/mtlRoutingDetails',
    method: 'post',
    data
  })
}

export function updateRoutingDetails(data) {
  return request({
    url: '/mdm/mtlRoutingDetails',
    method: 'put',
    data
  })
}

export function deleteRoutingDetails(data) {
  return request({
    url: '/mdm/mtlRoutingDetails',
    method: 'delete',
    data
  })
}

export function getItemList(params) {
  return request({
    url: '/mdm/itemView',
    method: 'get',
    params: params
  })
}

export function itemSelectList(params) {
  return request({
    url: '/mdm/itemSelectList',
    method: 'get',
    params: { name: params }
  })
}

export function createItem(data) {
  return request({
    url: '/mdm/createItem',
    method: 'post',
    data
  })
}

export function updateItem(data) {
  return request({
    url: '/mdm/updateItem/',
    method: 'post',
    data
  })
}

export function getItemPacking(id) {
  return request({
    url: '/mdm/itempackView',
    method: 'get',
    params: id
  })
}

export function createpackingItem(data) {
  return request({
    url: '/mdm/createpackingItem',
    method: 'post',
    data
  })
}

export function updatepackingItem(data) {
  return request({
    url: '/mdm/updatepackingItem',
    method: 'post',
    data
  })
}

export function deletepackingItem(data, id) {
  return request({
    url: '/mdm/deletepackingItem/' + id,
    method: 'post',
    data
  })
}

export function getItemLabel(params) {
  return request({
    url: '/mdm/itemlabelView',
    method: 'get',
    params
  })
}

export function createlabelItem(data) {
  return request({
    url: '/mdm/createlabelItem',
    method: 'post',
    data
  })
}

export function updatelabelItem(data) {
  return request({
    url: '/mdm/updatelabelItem',
    method: 'post',
    data
  })
}

export function deletelabelItem(data, id) {
  return request({
    url: '/mdm/deletelabelItem/' + id,
    method: 'post',
    data
  })
}

export function getItemSerialRules(params) {
  return request({
    url: '/mdm/itemSerialRules',
    method: 'get',
    params
  })
}

export function getItemSerialRuleItems(params) {
  return request({
    url: '/mdm/itemSerialRuleItems',
    method: 'get',
    params
  })
}

export function createSerialRules(data) {
  return request({
    url: '/mdm/serialRules/',
    method: 'post',
    data
  })
}

export function updateSerialRules(data) {
  return request({
    url: '/mdm/serialRules',
    method: 'put',
    data
  })
}

export function deleteSerialRules(id) {
  return request({
    url: '/mdm/serialRules/' + id,
    method: 'delete'
  })
}

export function getLastUpdatedByName(id) {
  return request({
    url: '/mdm/lastUpdatedByName/' + id,
    method: 'get'
  })
}

export function serialruleList(params) {
  return request({
    url: '/mdm/serialruleList',
    method: 'get',
    params
  })
}

export function copyfromPacking(data) {
  return request({
    url: '/mdm/copyfromPacking/',
    method: 'post',
    data
  })
}

export function copyfromLabel(data) {
  return request({
    url: '/mdm/copyfromLabel/',
    method: 'post',
    data
  })
}
export function insertOperation(data) {
  return request({
    url: '/mdm/operations',
    method: 'post',
    data
  })
}

export function modifyOperation(data) {
  return request({
    url: '/mdm/operations',
    method: 'put',
    data
  })
}

export function deleteOperation(id) {
  return request({
    url: '/mdm/operations',
    method: 'delete',
    data: { opid: id }
  })
}

export function insertOperationPart(data) {
  return request({
    url: '/mdm/operationParts',
    method: 'post',
    data
  })
}

export function modifyOperationPart(data) {
  return request({
    url: '/mdm/operationParts',
    method: 'put',
    data
  })
}

export function deleteOperationPart(data) {
  return request({
    url: '/mdm/operationParts',
    method: 'delete',
    data
  })
}

export function getRoutings(itemid) {
  return request({
    url: '/mdm/routings',
    method: 'get',
    params: { itemid: itemid }
  })
}

export function topLevelDefectCodes(level) {
  return request({
    url: '/mdm/topLevelDefectCodes',
    method: 'get',
    params: { level }
  })
}

export function topLevelRepairCodes(level) {
  return request({
    url: '/mdm/topLevelRepairCodes',
    method: 'get',
    params: { level }
  })
}

export function defectCodes(params) {
  return request({
    url: '/mdm/defectCodes',
    method: 'get',
    params
  })
}

export function repairCodes(params) {
  return request({
    url: '/mdm/repairCodes',
    method: 'get',
    params
  })
}

export function addDefectCode(data) {
  return request({
    url: '/mdm/defectCodes',
    method: 'post',
    data
  })
}

export function addRepairCode(data) {
  return request({
    url: '/mdm/repairCodes',
    method: 'post',
    data
  })
}

export function updateDefectCode(row) {
  return request({
    url: '/mdm/defectCodes',
    method: 'put',
    data: row
  })
}

export function updateRepairCode(row) {
  return request({
    url: '/mdm/repairCodes',
    method: 'put',
    data: row
  })
}

export function deleteDefectCode(id) {
  return request({
    url: '/mdm/defectCodes',
    method: 'delete',
    data: { defectCodeId: id }
  })
}

export function deleteRepairCode(id) {
  return request({
    url: '/mdm/repairCodes',
    method: 'delete',
    data: { repairCodeId: id }
  })
}
