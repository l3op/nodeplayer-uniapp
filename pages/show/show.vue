<template>
	<view>
		<view ref="cameraView" class="cameraView">
		</view>
		<button class="startPublishBtn" v-bind:type="btnType" v-on:click="startPublish">{{btnText}}</button>
	</view>

</template>

<script>
	import nmRTC from "../../lib/nmrtc.js";
	const startText = "开始直播";
	const stopText = "结束直播"
	const startType = "primary";
	const stopType = "warn";
	export default {
		data() {
			return {
				isStart: false,
				btnText: startText,
				btnType: startType,
			}
		},
		onReady() {
			let vd = document.createElement("video");
			vd.id = "camera";
			vd.style.cssText = "width: 100%;height: 100%;"
			vd.setAttribute("autoplay", "");
			vd.setAttribute("muted", "");
			this.$refs.cameraView.$el.appendChild(vd);
			this.publiser = new nmRTC.Publisher({
				id: "camera",
				stun: [{
					urls: "stun:stun.nodemedia.cn:3478"
				}],
				stunMaxTime: 1000,
				video: {
					width: 360,
					height: 640,
					bitrate: 1000 * 1000,
					keyInterval: 2,
				},
				audio: {
					bitrate: 64 * 1000
				}
			});
			this.publiser.on("start", () => {
				console.log("nmRTC Publisher on start");
				this.isStart = true;
				this.btnText = stopText;
				this.btnType = stopType;
			});
			this.publiser.on("stop", () => {
				console.log("nmRTC Publisher on stop");
				this.isStart = false;
				this.btnText = startText;
				this.btnType = startType;
			});
			this.publiser.on("error", (error) => {
				console.log("nmRTC Publisher on error", error);
			});
		},
		methods: {
			startPublish: function() {
				if (this.isStart) {
					this.publiser.stop();
				} else {
					//NMSv3服务器，并正确配置域名证书
					//具体查看 https://www.nodemedia.cn/doc/web/#/5?page_id=48
					//目前手机WebRTC标准不统一，可用性较低(2020-09)，择情使用
					this.publiser.start("ws://192.168.0.2:8000/live/stream.rtc");
				}
			}
		}
	}
</script>

<style>
	.cameraView {
		position: absolute;
		width: 100%;
		height: 100vh;
	}

	.startPublishBtn {
		position: absolute;
		bottom: 16rpx;
		left: 16rpx;
		right: 16rpx;
	}
</style>
