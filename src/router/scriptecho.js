export const scriptechoRoutes = [
  {
    path: '/pages/HelloWorld',
    name: 'HelloWorld',
    component: () => import('/src/views/scriptecho/HelloWorld.vue'),
    meta: {
      title: 'HelloWorld',
      ignoreAuth: true,
    },
  },
];
