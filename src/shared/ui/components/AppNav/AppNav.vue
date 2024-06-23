<script setup lang="ts">
import { Navigation } from '@/app/layouts/types';

import { useAppNav } from './features';

interface AppNavProps {
	readonly items: Navigation[];
}

defineProps<AppNavProps>();

const { nav } = useAppNav();
</script>

<template>
	<van-tabbar v-if="!nav.isHidden" route :class="$style['app-nav']">
		<template v-for="item in items" :key="item.title">
			<van-tabbar-item :to="item.path" :icon="item.icon">
				{{ item.title }}
			</van-tabbar-item>
		</template>
	</van-tabbar>
</template>

<style module lang="scss">
@import './styles//AppNav.module';
</style>
