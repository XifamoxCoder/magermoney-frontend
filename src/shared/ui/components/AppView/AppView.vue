<script setup lang="ts">
import { classNames } from '@/shared/utils';

import { useAppHeader } from '../AppHeader';
import { useAppNav } from '../AppNav/features';

const { header } = useAppHeader();
const { nav } = useAppNav();
</script>

<template>
	<div
		:class="
			classNames($style['app-view'], {
				[$style['app-view--hidden-header']]: header.isHidden,
				[$style['app-view--hidden-view']]: nav.isHidden
			})
		"
	>
		<slot />
	</div>
</template>

<style module lang="scss">
@import './styles/AppView.module';
</style>
