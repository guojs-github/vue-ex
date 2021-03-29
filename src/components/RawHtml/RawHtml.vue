<template>
	<!--动态加载HTML-->
	<div class='-content raw-html'>
		<div class='-title'>
			动态加载HTML
		</div>

		<div class='-row' v-once>
			HTML内容：{{ rawHtml }}
		</div>
		<div class='-row'>
			HTML效果：<span v-html='rawHtml'/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RawHtml', 
	
	components: {
	},
	
	data() {
		return {
			rawHtml: '<span style="color: red;">这段文字应该是红色的</span>'
		};
	}
};
</script>

<style scoped src='./RawHtml.less' lang='less'/>
<style scoped>
</style>
