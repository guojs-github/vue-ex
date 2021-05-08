<!--Child4App-->
<template>
	<teleport to='#app'>
		<div class='child4app'>
			显示在APP节点下
		</div>
	</teleport>
</template>

<script>
export default {
	name: 'Child4App'
};
</script>

<style scoped>
.child4app {
	color: red;
}
</style>