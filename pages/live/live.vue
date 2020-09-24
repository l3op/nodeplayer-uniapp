<!-- 直播 -->
<template>
	<view class="content">
		<view class="live_list">
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/00.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>13W人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>来聊聊天</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/01.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>10.2W人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>女神来了</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/02.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>1023W人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>看电影</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/03.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>4670W人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>来了老弟</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/04.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>23W人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>古典雅风</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/05.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>1003人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>有点无聊</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/06.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>203W人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>精选壁画</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/07.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>609W人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>游戏-方舟</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/08.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>12.7人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>教你炒辣椒</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/09.png" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>3500人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>追剧</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/10.jpg" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>220人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>在线P图</view>
						</view>
					</view>
				</view>
			</view>
			<view class="live_list_li">
				<view class="live_list_li_ve" @click="goToPage('/pages/live/liveview')">
					<image src="../../static/img/11.jpg" mode="aspectFill"></image>
					<view class="live_list_li_ve_title">
						<view class="live_list_li_ve_title_l">
							<view>321人</view>
						</view>
						<view class="live_list_li_ve_title_r">
							<view>宝宝</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			uni.setTabBarBadge({
				index: 3,
				text: '3'
			})
			uni.setTabBarBadge({
				index: 1,
				text: '6'
			})
		},
		methods: {
			goToPage(url) {
				if (!url) return;
				uni.navigateTo({
					url
				});
			}
		},
		onPageScroll: function(e) {
			// if(e.scrollTop>=10){
			// 	uni.hideTabBar({
			// 		animation:true
			// 	});
			// }else if(e.scrollTop<=10){
			// 	uni.showTabBar({
			// 		animation:true
			// 	});
			// }
		}

	}
</script>

<style>
	page {
		background: #212131;
	}

	.live_list {
		padding-left: 10upx;
		padding-right: 10upx;
		padding-top: 10upx;
	}

	.live_list .live_list_li {
		height: 300upx;
		width: 50%;
		border: 0px red solid;
		float: left;
		box-sizing: border-box;
		padding: 10upx;
	}

	.live_list .live_list_li .live_list_li_ve {
		width: 100%;
		height: 100%;
		border: 0upx green solid;
		border-radius: 20upx;
		overflow: hidden;
	}

	.live_list .live_list_li .live_list_li_ve image {
		width: 100%;
		height: 100%;
	}

	.live_list .live_list_li .live_list_li_ve .live_list_li_ve_title {
		position: relative;
		border: 0px red solid;
		width: 100%;
		height: 50upx;
		top: -65upx;
	}

	.live_list .live_list_li .live_list_li_ve .live_list_li_ve_title .live_list_li_ve_title_l,
	.live_list_li_ve_title_r {
		height: 100%;
		width: 50%;
		border: 0px yellow solid;
		float: left;
		box-sizing: border-box;
	}

	.live_list .live_list_li .live_list_li_ve .live_list_li_ve_title .live_list_li_ve_title_r,
	.live_list_li_ve_title_l {
		padding: 5upx;
	}

	.live_list .live_list_li .live_list_li_ve .live_list_li_ve_title .live_list_li_ve_title_r {
		padding-right: 13upx;
	}

	.live_list .live_list_li .live_list_li_ve .live_list_li_ve_title .live_list_li_ve_title_r view {
		color: #fff;
		font-size: 20upx;
		height: 100%;
		background: #FA6185;
		border-radius: 10upx;
		padding-left: 10upx;
		padding-right: 10upx;
		float: right;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.live_list .live_list_li .live_list_li_ve .live_list_li_ve_title .live_list_li_ve_title_l view {
		height: 100%;
		border: 0px red solid;
		color: #fff;
		font-size: 25upx;
		float: left;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 10upx;
	}
</style>
