<template>
	<view ref="videoView" class="videoView">
	</view>
</template>

<script>
	// HBuilderX内置浏览器暂不支持WASM，请使用chrome运行
	export default {
		data() {
			return {
				urls: [
					"http://flv.bdplay.nodemedia.cn/live/xxm_a.flv",
					"http://flv.bdplay.nodemedia.cn/live/xxm_b.flv",
					"http://flv.bdplay.nodemedia.cn/live/xxm_c.flv"
				]
			}
		},

		onReady() {
			// uni-app 会劫持canvas标签并替换为uni-canvas，无法赋予canvas标签id
			// 这里创建canvas元素，插入到view中
			let cv = document.createElement("canvas");
			cv.id = "video"
			cv.style.cssText = "width: 100%;height: 100%;"
			this.$refs.videoView.$el.appendChild(cv);
			// 创建NodePlayer实例，本demo使用试用开发包，10分钟断开，重新进入页面继续测试
			// 正式使用需购买商用授权，访问 https://www.nodemedia.cn/获取详情
			this.np = new NodePlayer();
			this.np.setView(cv.id);
			this.np.setBufferTime(500);
			this.np.setScaleMode(2);
			this.np.start(this.$data.urls[this.Random(0, 2)]);
		},
		onUnload() {
			// canvas 是由createElement每次创建，调用这个方法完全释放，避免16次之后WebGL出现警告
			this.np.release(true);
		},
		methods: {
			Random: function(min, max) {
				return Math.round(Math.random() * (max - min)) + min;
			},
		}
	}
</script>

<style>
	.videoView {
		width: 100%;
		height: 100vh;
	}
</style>
