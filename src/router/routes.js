import DefaultLayout from '@layouts/DefaultLayout.vue';
import DashboradLayout from '@layouts/single/DashboradLayout';

const rootRoutes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    children: [
      {
        path: 'index',
        alias: ['/', '/home', '/index.html'],
        component: () =>
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          import(/* webpackChunkName: "about" */ '@views/About.vue'),
        meta: {
          auth: true,
          roles: ['admin', 'user'],
        },
      },
    ],
  },
];

const dashborad = [
  {
    path: '/dashborad',
    name: 'Dashborad',
    component: DashboradLayout,
    children: [
      {
        path: 'index',
        alias: ['/dashborad'],
        component: () =>
          import(
            /* webpackChunkName: "dashborad" */ '@views/dashborad/Index.vue'
          ),
        meta: {
          auth: true,
          roles: ['admin', 'user'],
        },
      },
      {
        path: 'intro',
        component: () =>
          import(
            /* webpackChunkName: "dashintro" */ '@views/dashborad/AnalysisIntro.vue'
          ),
        meta: {
          auth: true,
          roles: ['admin', 'user'],
        },
      },
    ],
  },
];

export default [...rootRoutes, ...dashborad];
