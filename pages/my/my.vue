<!-- 我的 -->
<template>
	<view id="main">
		<view class="my_main" style="background-image:url('../../static/img/05.png');" id="my_main">
			<view class="my_main_01">
				<view class="my_main_01_01">
					<image src="../../static/img/sz1.png"></image>
				</view>
				<view style="width:100%;height:100upx;border:0px yellow solid;"></view>
				<view class="my_main_01_02">
					<view class="my_main_01_02_01">
						<image src="../../static/img/10.jpg"></image>
						<image src="../../static/img/nv.png" class="icon"></image>
					</view>
					<view class="my_main_01_02_02">
						<view style="line-height:90upx;">我的天空</view>
						<view style="font-size:20upx;">ID:1008611</view>
					</view>
				</view>
				<view style="width:100%;height:20upx;border:0px yellow solid;"></view>
				<view class="my_main_01_03">
					<view class="my_main_01_03_01">
						一点也不圆润 盘它!
						<image src="../../static/img/update.png"></image>
					</view>
					<view class="my_main_01_03_02">
						<view>4030获赞</view>
						<view @click="follow">17关注</view>
						<view @click="fans">3700粉丝</view>
					</view>
				</view>
			</view>
		</view>
		<view class="my_main1">
			<view class="my_main_02">
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/zan.png"></image>
					</view>
					<view class="mm02">我赞过的</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04">0</view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/pinglun.png"></image>
					</view>
					<view class="mm02">我的评论</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04"></view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/tiez.png"></image>
					</view>
					<view class="mm02">我的帖子</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04">0</view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/sxj.png"></image>
					</view>
					<view class="mm02">我的跟拍</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04">0</view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/sc1.png"></image>
					</view>
					<view class="mm02">我的收藏</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04">0</view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/ls.png"></image>
					</view>
					<view class="mm02">浏览历史</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04">0</view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/xz.png"></image>
					</view>
					<view class="mm02">我的下载</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04">0</view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/xhw.png"></image>
					</view>
					<view class="mm02">小黑屋</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04"></view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/phone.png"></image>
					</view>
					<view class="mm02">视频壁纸</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04"></view>
				</view>
				<view class="my_main_02_01">
					<view class="mm01">
						<image src="../../static/img/zf.png"></image>
					</view>
					<view class="mm02">分享给好友</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04"></view>
				</view>
				<view class="my_main_02_01" style="border-bottom:none;"> 
					<view class="mm01">
						<image src="../../static/img/qi.png"></image>
					</view>
					<view class="mm02">帮助与反馈</view>
					<view class="mm03">
						<image src="../../static/img/jt.png"></image>
					</view>
					<view class="mm04"></view>
				</view>
			</view>
		</view>
		<!-- <view style="width:100%;height:30upx;border:0px red solid;background:#1F1F2A;"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			fans:function(){
				uni.navigateTo({
					url: '/pages/fans/fans',
					animationType: 'zoom-fade-out',
					animationDuration: 300
				});
			},
			follow:function(){
				uni.navigateTo({
					url: '/pages/follow/follow',
					animationType: 'zoom-fade-out',
					animationDuration: 300
				});
			}
		}
	}
</script>

<style>
	page{background:#242633;}
	.my_main{display: flex;border:0px red solid;padding:30upx;padding-bottom:10upx;padding-top:65upx;}
	.my_main1{display: flex;border:0px red solid;padding:30upx;padding-top:0;padding-bottom:0;}
	.my_main .my_main_01{
		width:100%;
		height:auto;
		border:0px green solid;
		color:#fff;
	}
	.my_main1 .my_main_02{
		width:100%;
		height:auto;
		border:0px green solid;
	}
	.my_main .my_main_01 .my_main_01_01,.my_main_01_02,.my_main_01_03{
		width:100%;
		border:0px blue solid;
	}
	.my_main .my_main_01 .my_main_01_01{height:60upx;}
	.my_main .my_main_01 .my_main_01_01 image{width:40upx;height:40upx;float: right;margin-right:20upx;}
	.my_main .my_main_01 .my_main_01_02{height:150upx;}
	.my_main .my_main_01 .my_main_01_03{height:100upx;}
	.my_main .my_main_01 .my_main_01_03 .my_main_01_03_01,.my_main_01_03_02,.my_main_01_03_03{
		width:100%;
		height:50%;
		border:0px red solid;
		font-size:30upx;
	}
	.my_main .my_main_01 .my_main_01_03 .my_main_01_03_01 image{width:30upx;height:30upx;margin-left:15upx;}
	.my_main .my_main_01 .my_main_01_03 .my_main_01_03_02 view{
		width:auto;
		height:100%;
		float: left;
		box-sizing: border-box;
		border:0px red solid;
		padding-right:20upx;
	}
	.my_main .my_main_01 .my_main_01_02 .my_main_01_02_01,.my_main_01_02_02{
		height:100%;
		border:0px red solid;
		float: left;
		box-sizing: border-box;
	}
	.my_main .my_main_01 .my_main_01_02 .my_main_01_02_01 image{width:150upx;height:150upx;border-radius:100%;}
	.my_main .my_main_01 .my_main_01_02 .my_main_01_02_01 .icon{width:40upx;height:40upx;position: absolute;left: 135upx;}
	.my_main .my_main_01 .my_main_01_02 .my_main_01_02_02{width:auto;padding-left:20upx;}
	.my_main .my_main_01 .my_main_01_02 .my_main_01_02_02 view{width:100%;height:50%;border:0px red solid;font-size: 30upx;}
	.gg{width:100%;height:140upx;padding-top:7upx;padding-bottom:7upx;background: #2E2E2E;}
	.gg image{width:100%;height:100%;}
	.my_main1 .my_main_02 .my_main_02_01{
		width:100%;
		height:90upx;
		border:0px #FF4081 solid;
		border-bottom: #1C1E2B 1upx solid;
	}
	.my_main1 .my_main_02 .my_main_02_01 .mm01,.mm02,.mm03,.mm04{
		height:100%;
		width: 90upx;
		border:0px red solid;
		float: left;
		box-sizing: border-box;
		color: #fff;
	}
	.my_main1 .my_main_02 .my_main_02_01 .mm01{padding:25upx;}
	.my_main1 .my_main_02 .my_main_02_01 .mm03{float: right;width:35upx;padding-top:25upx;padding-bottom:25upx;}
	.my_main1 .my_main_02 .my_main_02_01 .mm04{float: right;width:auto;line-height:90upx;font-size:25upx;text-align: right;color: #999999;}
	.my_main1 .my_main_02 .my_main_02_01 .mm02{width:auto;font-size: 30upx;letter-spacing:4upx;line-height:90upx;padding-left:10upx;padding-right:10upx;}
	.my_main1 .my_main_02 .my_main_02_01 .mm01 image{
		width:100%;
		height:100%;
	}
	.my_main1 .my_main_02 .my_main_02_01 .mm03 image{
		width:100%;
		height:100%;
	}
	
</style>
