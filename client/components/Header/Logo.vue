<template>
<div class="logo">
	<a class="logo__link" href="/">
		<img
			class="logo__img"
			src="/logo.png"
			:alt="$t('logo.alt')"
			:title="$t('logo.title')"
		/>
	</a>
</div>
</template>

<style lang="scss" scoped>
.logo {
	// margin-left: 10px;
	padding: 10px;
	.logo__img {
		width: 160px;
		height: auto;
	}
}
</style>