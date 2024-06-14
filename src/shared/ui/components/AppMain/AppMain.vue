<template>
	<van-config-provider tag="main" :class="$style['app-main']">
		<slot />
	</van-config-provider>
</template>

<style module lang="scss">
@import './styles/AppMain.module';
</style>
