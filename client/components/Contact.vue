<template>
	<div class="flat_block">
		<p class="space-between">
			<span><i class="fas fa-clock"></i>{{ $t('contact.general.schedule') }}:</span>
			<span>
				Пн-Пт: 9:00-18:00
				<br>
				{{ $t('contact.general.output') }}
				</span>
		</p>
		<div class="bord"></div>
		<p class="space-between">
			<span><i class="fa fa-home"></i>{{ $t('contact.general.address') }}:</span>
			<a class="link_style" :href="$t('contact.data[0].link.href')">{{ $t('contact.data[0].text') }}</a>
		</p>
		<div class="bord"></div>
		<p class="space-between">
			<span><i class="fas fa-phone"></i>{{ $t('contact.general.sales') }}:</span>
			<span>
				(0512) 58-32-60
				<br>
				(050) 318-40-64
			</span>
		</p>
		<p class="space-between">
			<span><i class="fas fa-envelope"></i>Email:</span>
			<a class="link_style" href="mailto:orten_office@ukr.net">orten_office@ukr.net</a>
		</p>
		<div class="bord"></div>
		<p class="space-between">
			<span><i class="fas fa-phone"></i>{{ $t('contact.general.service') }}:</span>
			<span>(0512) 58-32-60</span>
		</p>
		<p class="space-between">
			<span><i class="fas fa-envelope"></i>Email:</span>
			<a class="link_style" href="mailto:orten_office@ukr.net">orten_office@ukr.net</a>
		</p>
		<div class="bord"></div>
		<p class="space-between">
			<span><i class="fas fa-phone"></i>{{ $t('contact.general.print') }}:</span>
			<sapn>(0512) 56-64-98</sapn>
		</p>
		<p class="space-between">
			<span><i class="fas fa-envelope"></i>Email:</span>
			<a class="link_style" href="mailto:orten_poligraf@ukr.net">orten_poligraf@ukr.net</a>
		</p>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';
.space-between {
	padding: 10px 5px;
	align-items: center;
	span {
		i {
			margin-right: 5px;
		}
	}
}
.bord {
	border-bottom: 1px solid $green_color;
}
.flat_block {
	min-width: 60vw;
}

</style>