import request from '@/utils/request'

export function getPrintingSystems() {
  return request({
    url: '/system/mesSystems/PRINTING',
    method: 'get'
  })
}

export function getExecutableSystems() {
  return request({
    url: '/system/mesSystems/EXECUTABLE',
    method: 'get'
  })
}

export function createSystems(data) {
  return request({
    url: '/system/mesSystems',
    method: 'post',
    data
  })
}

export function updateSystems(data) {
  return request({
    url: '/system/mesSystems',
    method: 'put',
    data
  })
}

export function deleteSystems(id) {
  return request({
    url: '/system/mesSystems/' + id,
    method: 'delete'
  })
}

export function getPrintingProgramSystems(id) {
  return request({
    url: '/system/printingProgramSystems/' + id,
    method: 'get'
  })
}

export function callURLProc(proc, data) {
  return request({
    url: '/system/callURLProc/' + proc,
    method: 'post',
    data
  })
}

export function callFileProc(proc, data) {
  return request({
    url: '/system/callFileProc/' + proc,
    method: 'post',
    data
  })
}

export function getPrintingPrograms(params) {
  return request({
    url: '/system/mesPrintingPrograms',
    method: 'get',
    params
  })
}

export function getPrintingGroupPrograms() {
  return request({
    url: '/system/mesPrintingPrograms/group',
    method: 'get'
  })
}

export function getPrintingLabelList(type) {
  return request({
    url: '/system/mesPrintingPrograms/list/' + type,
    method: 'get'
  })
}

export function getPrintingJobPrograms(id) {
  return request({
    url: '/system/mesPrintingPrograms/job/' + id,
    method: 'get'
  })
}

export function getPrintingOperationPrograms(usedoperation, id) {
  return request({
    url: '/system/mesPrintingPrograms/' + usedoperation + '/' + id,
    method: 'get'
  })
}

export function createPrintingPrograms(data) {
  return request({
    url: '/system/mesPrintingPrograms',
    method: 'post',
    data
  })
}

export function updatePrintingPrograms(data) {
  return request({
    url: '/system/mesPrintingPrograms',
    method: 'put',
    data
  })
}

export function deletePrintingPrograms(id) {
  return request({
    url: '/system/mesPrintingPrograms/' + id,
    method: 'delete'
  })
}

export function writeLogData(data) {
  return request({
    url: '/system/writeLog',
    method: 'post',
    data
  })
}

export function readLogData(selectDate) {
  return request({
    url: '/system/readLog/' + selectDate,
    method: 'get'
  })
}
