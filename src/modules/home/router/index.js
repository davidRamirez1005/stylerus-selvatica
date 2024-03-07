export default [
    {
		path:'',
		name: 'home',
		meta: { layout: 'default', title: 'Home' },
		component: () => import('../pages/index.vue'),
	},
];