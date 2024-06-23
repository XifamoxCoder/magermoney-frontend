<script setup lang="ts">
import { classNames } from '@/shared/utils';

import { useAppHeader } from './features';

interface AppHeaderProps {
	readonly title: string;
}

defineProps<AppHeaderProps>();

const { header } = useAppHeader();
</script>

<template>
	<van-nav-bar
		v-if="!header.isHidden"
		:title="header.title || title"
		:left-text="header.textLeft"
		:left-arrow="header.isLeftArrow"
		:right-text="header.textRight"
		fixed
		:class="classNames($style['app-header'], {})"
		:left-disabled="header.isLeftDisabled"
		:right-disabled="header.isRightDisabled"
		@click-left="header.onClickLeft"
		@click-right="header.onClickRight"
	>
		<template v-if="header.actions" #right></template>
	</van-nav-bar>
</template>

<style module lang="scss">
@import './styles/AppHeader.module';
</style>
