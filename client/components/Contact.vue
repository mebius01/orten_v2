<template>
			<!-- <div class="card-grid"> -->
	<div class="flat_block">
		<h3 class="card_header">Контакты</h3>
		<hr>
		<p class="space-between">
			<span><i class="fas fa-clock"></i>График:</span>
			<span>
				Пн-Пт: 9:00 - 18:00
				<br>
				Сб: 9:00 - 14:00
				<br>
				Вс: Выходной
				</span>
		</p>
		<p class="space-between">
			<span><i class="fa fa-home"></i>Адрес:</span>
			<span>г. Николаев пр. Мира, 5</span>
		</p>
		<p class="space-between">
			<span><i class="fas fa-phone"></i>Продажи:</span>
			<span>
				(0512) 56-65-39
				<br>
				(0512) 58-32-60
				<br>
				(050) 318-40-64
			</span>
		</p>
		<p class="space-between">
			<span><i class="fas fa-envelope"></i>Мылко:</span>
			<a class="link_style" href="mailto:orten_office@ukr.net">orten_office@ukr.net</a>
		</p>
		<p class="space-between">
			<span><i class="fas fa-phone"></i>Сервис:</span>
			<span>(0512) 56-65-51</span>
		</p>
		<p class="space-between">
			<span><i class="fas fa-phone"></i>Полиграфия:</span>
			<sapn>
				(0512) 56-64-98
				<br>
				(094) 943-57-50
			</sapn>
		</p>
		<p class="space-between">
			<sapn><i class="fas fa-envelope"></i>Мылко:</sapn>
			<a class="link_style" href="mailto:orten_poligraf@ukr.net">orten_poligraf@ukr.net</a>
		</p>
	</div>
			<!-- </div> -->
</template>

<style lang="scss" scoped>
  $text-color: #2E4053;
  $green-color: #85C987;
  $global_blue: #428bca;
  $color_red: #fc6251;

.padding-12 {
  padding: 12px 24px;
}
.padding-5 {
  padding: 0;
  padding: 12px 24px;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
</style>