<template>
	<section class="nav-bar">
		<el-icon class="nav-title" @click="menuCollapse"><Expand /></el-icon>
		<el-menu class="nav-menu" :collapse="isCollapse" default-active="1" @open="handleOpen" @close="handleClose">
			<el-menu-item index="1">
				<el-icon><HomeFilled /></el-icon>
				<span>主页</span>
			</el-menu-item>
			<el-menu-item index="2">
				<el-icon><icon-menu /></el-icon>
				<span>监控</span>
			</el-menu-item>
			<el-menu-item index="3">
				<el-icon><setting /></el-icon>
				<span>设置</span>
			</el-menu-item>
		</el-menu>
	</section>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { Menu as IconMenu, HomeFilled, Setting, Expand } from "@element-plus/icons-vue";

let isCollapse: Ref<boolean> = ref(false);

const menuCollapse = () => {
	isCollapse.value = !isCollapse.value;
};

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>

<style scoped lang="less">
.nav-bar {
	// height: 100%;
	padding-right: 1rem;
}
.nav-title {
	width: 100%;
	display: flex;
	font-size: 3rem;
	svg {
		justify-content: center;
		align-items: center;
	}
	&:hover {
		color: #3498db;
	}
}

.nav-menu {
	height: 100%;
	background: none;
	border-right: none;

	i {
		font-size: 1.5rem;
	}

	li:hover {
		background: rgba(255, 255, 255, 0.35);
		backdrop-filter: blur(1px);
		border-radius: 10px;
	}
}
// .el-menu-vertical:not(.el-menu--collapse) {
// 	width: 200px;
// 	min-height: 400px;
// }
</style>
