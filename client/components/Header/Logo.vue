<template>
<div class="logo">
	<nuxt-link class="logo__link" :to="`/${this.$i18n.locale}`">
	
		<img
			class="logo__img"
			src="/logo.png"
			:alt="$t('logo.alt')"
			:title="$t('logo.title')"
		/>
	</nuxt-link>
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