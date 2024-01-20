<template>
	<section class="resource">
		<section class="resource-introduce">
			<div class="system-logo">
				<img :src="logo" />
			</div>
			<span class="system-name" :style="styleObj">{{ user }}</span>
			<ul class="system-info" ref="systemRef">
				<li v-for="item in system" :key="item.name">
					<p :style="{ width: maxWidth + 'px' }">{{ item.name }}</p>
					<p>{{ item.value }}</p>
				</li>
			</ul>
		</section>
		<section class="resource-show" v-if="isShow">
			<h1>hello</h1>
		</section>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
const systemRef: Ref<HTMLElement | null> = ref(null);
let maxWidth: Ref<number | null | undefined> = ref(null);
let styleObj: IStyleObject | undefined = {};

interface ISystemItem {
	name: string;
	value: string;
}

interface IStyleObject {
	[key: string]: string | number;
}

let props = defineProps({
	logo: {
		type: String,
		default: "",
	},
	isShow: {
		type: Boolean,
		default: false,
	},
	user: {
		type: String,
		default: "",
	},
	system: {
		type: Array as () => ISystemItem[],
		default: [],
	},
});

const showInfo = () => {
	if (!props.isShow) {
		styleObj = {
			padding: "2rem 4rem",
			"font-size": "2rem",
		};
	}
};
showInfo();

const getElMaxWidth = (): number | undefined => {
	if (systemRef.value) {
		const els: NodeListOf<ChildNode> = systemRef.value.childNodes;
		let arr: Array<number> = [];

		els.forEach((element) => {
			const paragraph: ChildNode = element.childNodes[0];
			if (paragraph) {
				arr.push((<HTMLElement>paragraph).offsetWidth);
			}
		});
		return Math.max(...arr);
	}
};

onMounted(() => {
	maxWidth.value = getElMaxWidth();
});
</script>

<style scoped lang="less">
.resource {
	width: auto;
	padding-left: 1.2rem;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	border-radius: 10px;
	display: flex;
}
.resource-introduce {
	display: flex;
	flex-direction: column;
	.system-logo {
		padding-top: 0;
		margin-top: -10px;
		width: 80px;
		height: 80px;
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(4px);
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
		}
	}
	.system-name {
		padding: 0.8rem 0;
		font-size: 1.7rem;
		font-weight: bold;
	}
	.system-info {
		padding-bottom: 1.2rem;
		li {
			display: flex;
			p:nth-child(1) {
				font-weight: bold;
			}
			p:nth-child(2) {
				padding-left: 2rem;
				flex: 1;
			}
		}
	}
}
.resource-show {
	flex: 1;
}
</style>
