import homeVue from "../../modules/home/router";

export default [
    {
        path: '/:catchAll(.*)',
        component: () => import('../../modules/pages/404.vue'),
        meta: { name: 'Not Found', title: "404 No Encontrado" },
    },
    ...homeVue
];
