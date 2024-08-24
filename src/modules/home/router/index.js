export default [
    {
		path:'',
		name: 'home',
		meta: { layout: 'default', title: 'Home' },
		component: () => import('../pages/index.vue'),
	},
    {
		path:'/catalogo',
		name: 'catalogo',
		meta: { layout: 'default', title: 'Catalogo' },
		component: () => import('../pages/catalogo.vue'),
	},
];