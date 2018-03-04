import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../components/index')), 'index')
const coupons = r => require.ensure([], () => r(require('../components/product/coupon')), 'coupons')
const packages = r => require.ensure([], () => r(require('../components/product/package')), 'packages')
const single = r => require.ensure([], () => r(require('../components/product/single')), 'single')
const productDetail = r => require.ensure([], () => r(require('../components/product/detail')), 'productDetail')
const account = r => require.ensure([], () => r(require('../components/cart/account')), 'account')


Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index,
      children : [
      	{
      		path : "coupons",
      		name : "coupons",
      		component : coupons
      	},
      	{
      		path : "packages",
      		name : "packages",
      		component : packages
      	},
      	{
      		path : "single",
      		name : 'single',
      		component : single
      	},
      	{
  				path : "coupons/:id",
  				name : "couponsDetail",
  				component : productDetail
  			},
  			{
  				path : "packages/:id",
  				name : "packagesDetail",
  				component : productDetail
  			},
  			{
  				path : "account",
  				name : "account",
  				component : account
  			}
      ]
   },
  ]
})
