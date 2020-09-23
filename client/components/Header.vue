<template>
  <header class="header">
    <div class="header-row">
      <div class="logo">
        <a class="logo__link" href="/">
          <img
            class="logo__img"
            src="/logo.png"
            alt="Ортен - розничный и оптовый интернет-магазин печатной и компьютерной техники в Николаеве"
            title="Копировальная техника и расходные материалы ★ Компьютеры и комплектующие ★ Полиграфическое оборудование и расходные материалы ★ Оперативная полиграфия ★ Диагностика и ремонт копировальной техники и компьютеров"
          />
        </a>
      </div>
      <div class="contact">
        <ul class="hd_2">
          <li><i class="fas fa-door-open"></i>Мы открыты</li>
          <li><i class="fas fa-clock"></i>Пн-Пт: 9:00 - 18:00</li>
          <li><i class="fas fa-utensils"></i>Пн-Пт: 12:00 - 12:30</li>
          <li><i class="fas fa-clock"></i>Сб: 9:00 - 14:00</li>
        </ul>
        <ul class="hd_3">
          <li>
            <a
              class="cool-link text-muted"
              href="https://www.google.com/maps/place/%D0%9E%D1%80%D1%82%D1%8D%D0%BD,+%D0%9E%D0%9E%D0%9E/@46.952503,32.040273,15z/data=!4m2!3m1!1s0x0:0x4784e49173525ad2?ved=2ahUKEwiLnpXuiPLfAhXNqIsKHWxSBAYQ_BIwCnoECAUQCA"
              target="_blank"
            >
              <i class="fa fa-home"></i>г. Николаев пр. Мира, 5</a
            >
          </li>
          <li>
            <a class="cool-link text-muted" href="mailto:orten_office@ukr.net"
              ><i class="fas fa-envelope"></i>orten_office@ukr.net</a
            >
          </li>
          <li><i class="fas fa-phone text-muted"></i>(0512) 56-65-39</li>
          <li><i class="fas fa-mobile text-muted"></i>(050) 318-40-64</li>
        </ul>
      </div>
    </div>
    <div class="two_header">
      <div class="ad">
        У зв'язку з посиленням карантинних мір
        <br />
        У суботу офіс тимчасово не працює.
      </div>
    </div>
    <ul class="main_categories">
      <li class="cool_link">
        <a
          title="Принтеры, МФУ, Дупликаторы японской компании Ricoh. Тонера, фотобарабаны, рессурсные детали"
          href="#"
          >Ricoh</a
        >
      </li>
      <li class="cool_link">
        <a
          title="Konica Minolta - японский холдинг, один из ведущих мировых производителей. МФУ, принтеры, инженерные печатные системы. Расходные материалы, дополнительное оборудование, рессурсные детали"
          href="#"
          >Konica Minolta</a
        >
      </li>
      <li class="cool_link">
        <a
          title="Цифровые дупликаторы, чернила и мастер-пленки от японской компании Duplo и других"
          href="#"
        ></a>
      </li>
      <li class="cool_link">
        <a
          title="ColorWay, лицензионные расходные материалы для лазерной и струйной печати, фотобумага, СНПЧ и КПК"
          href="#"
          >ColorWay</a
        >
      </li>
      <li class="cool_link">
        <a
          title="Ремонт Принтеров, МФУ, компьютеров, заправка и реставрация картриджей. Все возможные и невозможные ремонты"
          href="#"
          >Сервисный Центр</a
        >
      </li>
      <li class="cool_link">
        <a
          title="Тонера, фотобарабаны, вали, ролики, картриджи мировых брендов Toshiba, Erus, Static Control, Vision, Xerox, HP, Samsung"
          href="#"
          >Все для Принтеров и МФУ</a
        >
      </li>
      <li class="cool_link">
        <a
          title="Полиграфические услуги в Николаеве. Визитки, календари, флаера.. Тиражирование на ризографе"
          href="#"
          >Полиграфия</a
        >
      </li>
    </ul>
    <nav class="nav">
      <div class="toggle">
        <i class="fa fa-bars menu"></i>
      </div>
      <ul class="menu">
        <li><a href="">Дом</a></li>
        <li><a href="">Категории</a></li>
        <li><a href="">Товары</a></li>
        <li><a href="">Сервис</a></li>
        <li><a href="">Полиграфия</a></li>
        <li><a href="">Доставка и оплата</a></li>
        <li><a href="">Кто мы</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
      <div class="control">
        <!-- Language -->
        <div class="langdown"></div>
        <div class="control_search">
          <!-- SEO Оптимизация -->

          <form role="search">
            <input type="text" placeholder="Search..." name="search" />
          </form>
        </div>
        <div class="control_cart">
          <a href="" title="Пока, что Ваша корзина пуста">
            <i class="fa fa-shopping-cart"></i>
            <span>0</span>
          </a>
        </div>
      </div>
    </nav>
    <ul class="breadcrumbs">
      <li>
        <a href="/"><i class="fas fa-home"></i></a>
      </li>
    </ul>
  </header>
</template>
