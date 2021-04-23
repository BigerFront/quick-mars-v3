import DefaultLayout from '@layouts/DefaultLayout.vue';

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

export default [...rootRoutes];
