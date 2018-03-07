//所有产品快照（包括已经删除的，这里都要存一份）

const state = {
	product : {
		coupons : [
			{
				id : 1,
				pid : 1,
				title : "380型礼券",
				price : 380,
				spec : "精选母蟹4只(0.20)，精选公蟹4只(0.30)，秘制蟹料一份(200g)，精美礼盒一个",
				imglink : require('@/assets/product/coupons/380.jpg')
			},
			{
				id : 2,
				pid : 2,
				title : "600型礼券",
				price : 600,
				spec : "优等母蟹4只(0.26-0.30)，精选公蟹4只(0.36-0.40)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/coupons/600.jpg')
			},
			{
				id : 3,
				pid : 3,
				title : "1000型礼券",
				price : 1000,
				spec : "优等母蟹6只(0.26-0.30)，优等公蟹6只(0.36-0.40)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/coupons/1000.jpg')
			},
			{
				id : 4,
				pid : 4,
				title : "2000型礼券",
				price : 2000,
				spec : "特等母蟹8只(0.28-0.32)，特等公蟹8只(0.38-0.42)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/coupons/2000.jpg')
			},
			{
				id : 5,
				pid : 5,
				title : "3000型礼券",
				price : 3000,
				spec : "极品母蟹7只(0.33-0.38)，极品公蟹7只(0.43-0.48)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/coupons/3000.jpg')
			},
			{
				id : 6,
				pid : 6,
				title : "5000型礼券",
				price : 5000,
				spec : "至尊母蟹8只(0.38-0.45)，至尊公蟹8只(0.55-0.60)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/coupons/5000.jpg')
			}
		],
		packages : [
			{
				id : 7,
				pid : 1,
				title : "380型礼盒",
				price : 380,
				spec : "精选母蟹4只(0.20)，精选公蟹4只(0.30)，秘制蟹料一份(200g)，精美礼盒一个",
				imglink : require('@/assets/product/packages/package.jpg')
			},
			{
				id : 8,
				pid : 2,
				title : "600型礼盒",
				price : 600,
				spec : "优等母蟹4只(0.26-0.30)，精选公蟹4只(0.36-0.40)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/packages/package.jpg')
			},
			{
				id : 9,
				pid : 3,
				title : "1000型礼盒",
				price : 1000,
				spec : "优等母蟹6只(0.26-0.30)，优等公蟹6只(0.36-0.40)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/packages/package.jpg')
			},
			{
				id : 10,
				pid : 4,
				title : "2000型礼盒",
				price : 2000,
				spec : "特等母蟹8只(0.28-0.32)，特等公蟹8只(0.38-0.42)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/packages/package.jpg')
			},
			{
				id : 11,
				pid : 5,
				title : "3000型礼盒",
				price : 3000,
				spec : "极品母蟹7只(0.33-0.38)，极品公蟹7只(0.43-0.48)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/packages/package.jpg')
			},
			{
				id : 12,
				pid : 6,
				title : "5000型礼盒",
				price : 5000,
				spec : "至尊母蟹8只(0.38-0.45)，至尊公蟹8只(0.55-0.60)，秘制蟹酒一瓶(360g)，秘制蟹料一盒(200g)",
				imglink : require('@/assets/product/packages/package.jpg')
			}
		],
		single : [
			{
				id : 13,
				pid : 1,
				title : "精选公蟹",
				price : "58元/只",
				spec : "150g±5%",
				imglink : require('@/assets/product/single/am.jpg')
			},
			{
				id : 14,
				pid : 2,
				title : "优等公蟹",
				price : "98元/只",
				spec : "175g±5%",
				imglink : require('@/assets/product/single/am.jpg')
			},
			{
				id : 15,
				pid : 3,
				title : "特等公蟹",
				price : "138元/只",
				spec : "190g±5%",
				imglink : require('@/assets/product/single/am.jpg')
			},
			{
				id : 16,
				pid : 4,
				title : "极品公蟹",
				price : "198元/只",
				spec : "210g±5%",
				imglink : require('@/assets/product/single/am.jpg')
			},
			{
				id : 17,
				pid : 5,
				title : "至尊公蟹",
				price : "388元/只",
				spec : "240g±5%",
				imglink : require('@/assets/product/single/am.jpg')
			},
			{
				id : 18,
				pid : 6,
				title : "蟹王",
				price : "558元/只",
				spec : "275g±5%",
				imglink : require('@/assets/product/single/am.jpg')
			},
			{
				id : 19,
				pid : 7,
				title : "精选母蟹",
				price : "38元/只",
				spec : "100g±5%",
				imglink : require('@/assets/product/single/af.jpg')
			},
			{
				id : 20,
				pid : 8,
				title : "优等母蟹",
				price : "78元/只",
				spec : "125g±5%",
				imglink : require('@/assets/product/single/af.jpg')
			},
			{
				id : 21,
				pid : 9,
				title : "特等母蟹",
				price : "108元/只",
				spec : "140g±5%",
				imglink : require('@/assets/product/single/af.jpg')
			},
			{
				id : 22,
				pid : 10,
				title : "极品母蟹",
				price : "168元/只",
				spec : "160g±5%",
				imglink : require('@/assets/product/single/af.jpg')
			},
			{
				id : 23,
				pid : 11,
				title : "至尊母蟹",
				price : "268元/只",
				spec : "175g±5%",
				imglink : require('@/assets/product/single/af.jpg')
			},
			{
				id : 24,
				pid : 12,
				title : "蟹后",
				price : "418元/只",
				spec : "210g±5%",
				imglink : require('@/assets/product/single/af.jpg')
			},
			{
				id : 25,
				pid : 13,
				title : "秘制蟹料",
				price : "28元/份",
				spec : "200克",
				imglink : require('@/assets/product/single/seasoning.jpg')
			},
			{
				id : 26,
				pid : 14,
				title : "秘制蟹酒",
				price : "128元/瓶",
				spec : "360克",
				imglink : require('@/assets/product/single/wine.jpg')
			},
			{
				id : 27,
				pid : 15,
				title : "蟹八件",
				price : "380元/套",
				spec : "镀24k金",
				imglink : require('@/assets/product/single/tool8.jpg')
			},
			{
				id : 28,
				pid : 16,
				title : "蟹二件",
				price : "98元/套",
				spec : "镀24k金",
				imglink : require('@/assets/product/single/tool2.jpg')
			},
			{
				id : 29,
				pid : 17,
				title : "精品包装",
				price : "108元/套",
				spec : "金丝镶边",
				imglink : require('@/assets/product/single/box.jpg')
			}
		]
	}
}

export default {
	state
}