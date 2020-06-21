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
