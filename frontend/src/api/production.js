import request from '@/utils/request'

export function getJobDispatchesV(query) {
  return request({
    url: '/production/jobDispatchesV',
    method: 'get',
    params: query
  })
}

export function getJobSerialNumbers(id) {
  return request({
    url: '/production/jobSerialNumbers',
    method: 'get',
    params: { id }
  })
}

export function getJobDispatchOperations(query) {
  return request({
    url: '/production/jobDispatchOperations',
    method: 'get',
    params: query
  })
}

export function updateJobDispatches(data, id) {
  return request({
    url: '/production/jobDispatches/' + id,
    method: 'put',
    data
  })
}

export function updateOperations(data) {
  return request({
    url: '/production/jobDispatchOperations',
    method: 'put',
    data
  })
}

export function deleteOperations(id) {
  return request({
    url: '/production/jobDispatchOperations/' + id,
    method: 'delete'
  })
}

export function createJobDispatch(data) {
  return request({
    url: '/production/createJobDispatch/',
    method: 'post',
    data
  })
}

export function createJobSerialNumbers(data) {
  return request({
    url: '/production/createJobSerialNumbers/',
    method: 'post',
    data
  })
}

export function cancelJobSerialNumbers(data) {
  return request({
    url: '/production/cancelJobSerialNumbers/',
    method: 'post',
    data
  })
}

export function createJobDpOperations(data) {
  return request({
    url: '/production/createJobDpOperations/',
    method: 'post',
    data
  })
}
