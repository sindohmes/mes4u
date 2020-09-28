import { login, register, update } from '@/api/user'
import { setToken, removeToken, getUser, setUser, removeUser } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  const user = getUser()
  return {
    userid: user ? Number(user.id) : -1,
    username: user ? user.username : '',
    name: user ? user.name : '',
    email: user ? user.email : '',
    site: user ? Number(user.site) : -1,
    role: user ? user.role : '',
    lang: user ? user.lang : 'EN'
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_ID: (state, userid) => {
    state.userid = userid
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_SITE: (state, site) => {
    state.site = site
  },
  SET_ROLE: (state, resp) => {
    state.role = resp
  },
  SET_LANG: (state, resp) => {
    state.lang = resp
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        commit('SET_ID', response.id)
        commit('SET_USERNAME', response.username)
        commit('SET_NAME', response.name)
        commit('SET_EMAIL', response.email)
        commit('SET_SITE', response.site)
        commit('SET_ROLE', response.roles[0])
        commit('SET_LANG', response.lang)
        setToken(response.accessToken)
        setUser({
          id: response.id,
          username: response.username,
          name: response.name,
          email: response.email,
          site: response.site,
          role: response.roles[0],
          lang: response.lang
        })
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      try {
        removeToken() // must remove  token  first
        removeUser()
        resetRouter()
        commit('RESET_STATE')
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },

  // user register
  register({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      register(userInfo).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user update
  update({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      update(userInfo).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      removeUser()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

