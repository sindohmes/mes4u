const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  size: state => state.app.size,
  userid: state => state.user.userid,
  username: state => state.user.username,
  name: state => state.user.name,
  email: state => state.user.email,
  site: state => state.user.site,
  role: state => state.user.role,
  lang: state => state.user.lang
}
export default getters
