import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

  const routes = [

    {
      path: '/home',
      name: 'home',
      component: () => import('../views/client/home'),
      meta: {
        title: '首页',// 标题设置
        keepAlive:true

      }

    },

    {
      path: '/',
      name: 'home',
      component: () => import('../views/client/home'),
      meta: {
        title: '首页',// 标题设置


      }

    },

    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('../views/client/dynamic'),
      meta: {
        title: '动态', // 标题设置

      }
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/client/about'),
      meta: {
        title: '关于我',   // 标题设置

      }
    },

    {
      path: '/journal',
      name: 'journal',
      component: () => import('../views/client/journal'),
      meta: {
        title: '日志文章',   // 标题设置

      }
    },

    {
      path: '/friendship',
      name: 'friendship',
      component: () => import('../views/client/friendship'),
      meta: {
        title: '友情链接',   // 标题设置

      }
    },




    //每一篇文章的路由

    {
      path: '/article1',
      name: 'article1',
      component: () => import('../views/article/article5'),
      meta: {
        title: '易用性测试'   // 标题设置
      }
    },

    {
      path: '/article2',
      name: 'article2',
      component: () => import('../views/article/article2'),
      meta: {
        title: '黑盒测试'   // 标题设置
      }
    },
    {
      path: '/article3',
      name: 'article3',
      component: () => import('../views/article/article3'),
      meta: {
        title: 'linux常用命令'   // 标题设置
      }
    },

    {
      path: '/article4',
      name: 'article4',
      component: () => import('../views/article/article1'),
      meta: {
        title: 'app测试常见场景'   // 标题设置
      }
    },

    {
      path: '/article5',
      name: 'article5',
      component: () => import('../views/article/article4'),
      meta: {
        title: 'nginx命令集'   // 标题设置
      }
    },
    {
      path: '/article6',
      name: 'article6',
      component: () => import('../views/article/article6'),
      meta: {
        title: '转账测试详解'   // 标题设置
      }
    },
    {
      path: '/article7',
      name: 'article7',
      component: () => import('../views/article/article7'),
      meta: {
        title: 'linux常用命令2'   // 标题设置
      }
    },
    {
      path: '/article8',
      name: 'article8',
      component: () => import('../views/article/article8'),
      meta: {
        title: 'ui自动化po设计'   // 标题设置
      }
    },
    {
      path: '/article9',
      name: 'article9',
      component: () => import('../views/article/article9'),
      meta: {
        title: 'jmeter存储变量函数'   // 标题设置
      }
    },

    {
      path: '/article10',
      name: 'article10',
      component: () => import('../views/article/article10'),
      meta: {
        title: 'jmeter常用函数（一）'   // 标题设置
      }
    },

    {
      path: '/article11',
      name: 'article11',
      component: () => import('../views/article/article11'),
      meta: {
        title: 'oracle常用函数的介绍（一）'   // 标题设置
      }
    },
    {
      path: '/article12',
      name: 'article12',
      component: () => import('../views/article/article12'),
      meta: {
        title: 'jmeter常用组件介绍（一）'   // 标题设置
      }
    },
    {
      path: '/article13',
      name: 'article13',
      component: () => import('../views/article/article13'),
      meta: {
        title: 'jmeter常用组件介绍（二）'   // 标题设置
      }
    },
    {
      path: '/article14',
      name: 'article14',
      component: () => import('../views/article/article14'),
      meta: {
        title: 'py json读写'   // 标题设置
      }
    },
    {
      path: '/article15',
      name: 'article15',
      component: () => import('../views/article/article15'),
      meta: {
        title: 'py yml读写'   // 标题设置
      }
    },
    {
      path: '/article16',
      name: 'article16',
      component: () => import('../views/article/article16'),
      meta: {
        title: 'allure 装饰器介绍'   // 标题设置
      }
    }

  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  });

export default router
