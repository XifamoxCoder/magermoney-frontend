<script setup lang="ts">
import { useTheme } from '@/modules/settings';

const { theme } = useTheme();
</script>

<template>
	<van-config-provider tag="main" :class="$style['app-main']" :theme="theme">
		<slot />
	</van-config-provider>
</template>

<style module lang="scss">
@import './styles/AppMain.module';
</style>
