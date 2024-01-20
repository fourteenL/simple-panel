<template>
	<section class="home">
		<resource-module :logo="logo" :user="user" :system="arr"></resource-module>
	</section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import resourceModule from "../components/resourceModule.vue";

const logo = ref("../assets/debian-logo-1024x576.png");
const user = ref("debian");
const arr = reactive([
	{
		name: "OS",
		value: "Debian",
	},
	{
		name: "Arch",
		value: "amd64",
	},
	{
		name: "Up Time",
		value: "12h",
	},
]);
</script>

<style scoped lang="less">
.home {
	padding-top: 2rem;
	// flex: 1;
	// background: #bdc3c7;
}
</style>
