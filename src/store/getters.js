const getters = {
  sidebar: state => state.app.sidebar,
  // size: state => state.app.size,
  // device: state => state.app.device,
  // visitedViews: state => state.tagsView.visitedViews,
  // cachedViews: state => state.tagsView.cachedViews,
  // token: state => state.user.token,
  avatar: state => state.user.avatar,
  info: state => state.user.info,
  aliyunOss: state => state.user.aliyunOss,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_menu: state => state.permission.permissionMenu,
  errorLogs: state => state.errorLog.logs
}
export default getters
