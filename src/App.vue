<template>
	<navBarVue></navBarVue>
	<router-view></router-view>
</template>
<script setup lang="ts">
import navBarVue from "./components/navBar.vue";
</script>

<style lang="less">
* {
	padding: 0%;
	margin: 0%;
	box-sizing: border-box;
}
li {
	list-style: none;
}
body {
	background: url("./assets/wallhaven-3zgr9d.png") 100%;
	#app {
		height: 100vh;
		display: flex;
		flex-direction: row;
		overflow: hidden;
	}
}
</style>
