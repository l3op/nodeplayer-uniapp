<template>
	<view ref="videoView" class="videoView">
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onReady() {
			// uni-app 会劫持canvas标签并替换为uni-canvas，无法赋予canvas标签id
			// 这里创建canvas元素，插入到view中
			let cv = document.createElement("canvas");
			cv.id = "video"
			cv.style.cssText="width: 100%;height: 100%;"
			this.$refs.videoView.$el.appendChild(cv);
			this.np = new NodePlayer();
			this.np.setView(cv.id);
			this.np.setBufferTime(500);
			this.np.setScaleMode(2);
			this.np.start("http://192.168.0.2:8000/live/bbb.flv");
		},
		onUnload() {
			// canvas 是由createElement每次创建，调用这个方法完全释放，避免16次之后WebGL出现警告
			this.np.release(true);
		},
		methods: {

		}
	}
</script>

<style>
	.videoView{
		width: 100%;
		height: 100vh;
	}
</style>
