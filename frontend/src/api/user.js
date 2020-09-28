import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/signin',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/auth/register',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/auth/update',
    method: 'post',
    data
  })
}

export function getUsers(params) {
  return request({
    url: '/auth/users',
    method: 'get',
    params
  })
}

export function getRoles() {
  return request({
    url: '/auth/roles',
    method: 'get'
  })
}
