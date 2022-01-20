import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'setting',
  name: '权限管理',
  component: RouterView,
  meta: {
    title: '权限管理'
  },
  children: [
    {
      path: 'system_role/index',
      name: 'permission-role',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'system_admin/index',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        title: '管理员'
      }
    },
    {
      path: 'system_menus/index',
      name: 'permission-rule',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '规则管理'
      }
    }
  ]
}

export default routes
