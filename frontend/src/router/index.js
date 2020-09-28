import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'MES', icon: 'dashboard' },
        hidden: true
      },
      {
        path: 'userinfo',
        name: 'userinfo',
        component: () => import('@/views/userinfo/index'),
        hidden: true
      }
    ]
  },

  {
    path: '/mdm/',
    component: Layout,
    name: 'mdm',
    meta: { title: 'Master Data', icon: 'diamond' },
    children: [
      {
        path: 'line',
        name: 'ProductionLines',
        component: () => import('@/views/mdm/line'),
        meta: { title: 'Production Lines', icon: 'manufacturing' }
      },
      {
        path: 'item',
        name: 'ItemMaster',
        component: () => import('@/views/mdm/item'),
        meta: { title: 'Items', icon: 'item' }
      },
      {
        path: 'routing',
        name: 'RoutingMaster',
        component: () => import('@/views/mdm/routing'),
        meta: { title: 'Routings', icon: 'routing' }
      },
      {
        path: 'operation',
        name: 'OperationControl',
        component: () => import('@/views/mdm/operation'),
        meta: { title: 'Operations', icon: 'operation' },
        props: true
      },
      {
        path: 'serial',
        name: 'SerialRules',
        component: () => import('@/views/mdm/serial'),
        meta: { title: 'Serial Number Rules', icon: 'serial' }
      },
      {
        path: 'defect',
        name: 'DefectCodes',
        component: () => import('@/views/mdm/defect'),
        meta: { title: 'Defect/Repair Codes', icon: 'defect' }
      }
    ]
  },

  {
    path: '/production/',
    component: Layout,
    name: 'production',
    meta: { title: 'Production', icon: 'productionjob' },
    children: [
      {
        path: 'wo',
        name: 'JobDispatches',
        component: () => import('@/views/production/wo'),
        meta: { title: 'Dispatch Jobs', icon: 'dispatch' }
      },
      {
        path: 'print',
        name: 'LabelPrint',
        component: () => import('@/views/production/print'),
        meta: { title: 'Printout', icon: 'printing' }
      }
    ]
  },

  {
    path: '/operation/',
    component: Layout,
    name: 'operation',
    meta: { title: 'Operation', icon: 'production' },
    children: [
      {
        path: 'sol',
        name: 'OperationSol',
        component: () => import('@/views/operation/sol'),
        meta: { title: 'Start', icon: 'start' }
      },
      {
        path: 'partscan',
        name: 'OperationPartscan',
        component: () => import('@/views/operation/partscan'),
        meta: { title: 'Input parts', icon: 'input' }
      },
      {
        path: 'eol',
        name: 'OperationEol',
        component: () => import('@/views/operation/eol'),
        meta: { title: 'Completion', icon: 'complete' }
      },
      {
        path: 'inspection',
        name: 'OperationInspection',
        component: () => import('@/views/operation/inspection'),
        meta: { title: 'Inspection', icon: 'inspection' }
      },
      {
        path: 'operationrepair',
        name: 'OperationRepair',
        component: () => import('@/views/operation/operationrepair'),
        meta: { title: 'Repair', icon: 'repair' }
      },
      {
        path: 'program',
        name: 'OperationProgram',
        component: () => import('@/views/operation/program'),
        meta: { title: 'Executable System', icon: 'execution' }
      },
      {
        path: 'packing',
        name: 'OperationPacking',
        component: () => import('@/views/operation/packing'),
        meta: { title: 'Packing', icon: 'packing' }
      }
    ]
  },

  {
    path: '/monitoring/',
    component: Layout,
    name: 'monitoring',
    meta: { title: 'Monitoring', icon: 'monitor' },
    children: [
      {
        path: 'operation',
        name: 'AssemblyHistory',
        component: () => import('@/views/monitoring/operation'),
        meta: { title: 'Assembly History', icon: 'history' }
      },
      {
        path: 'report',
        name: 'monitoringreport',
        component: () => import('@/views/monitoring/report'),
        meta: { title: 'Print Reports', icon: 'report' }
      }
    ]
  },

  {
    path: '/system/',
    component: Layout,
    name: 'system',
    meta: { title: 'Admin', icon: 'setting' },
    children: [
      {
        path: 'program',
        name: 'SystemProgram',
        component: () => import('@/views/system/program'),
        meta: { title: 'External System', icon: 'link' }
      },
      {
        path: 'print',
        name: 'SystemPrint',
        component: () => import('@/views/system/print'),
        meta: { title: 'Printing Info', icon: 'printing2' }
      },
      {
        path: 'log',
        name: 'SystemLog',
        component: () => import('@/views/system/log'),
        meta: { title: 'Log', icon: 'log' }
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/system/register'),
        meta: { title: 'Register User', icon: 'user' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
