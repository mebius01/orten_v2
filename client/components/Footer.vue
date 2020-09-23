<template>
  <div>
    <footer class="footer">
      <div class="map">
        <img src="/map.png" alt="" />
      </div>
      <ul class="hd_1">
        <li><a href="{% url 'shop:product_list' %}">Что мы продаем</a></li>
        <li><a href="{% url 'shop:category' %}">Категории</a></li>
        <li>
          <a href="{% url 'shop:child_category' 'servisnyj-centr' %}"
            >Сервисный центр</a
          >
        </li>
        <li><a href="{% url 'shop:polygraphy' %}">Полиграфия</a></li>
      </ul>
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
    </footer>
    <div class="copyright">
      <p class="copyright__item" style="color: #e74c3c;">
        orten.in.ua <span style="color: white;">© 2020</span>
      </p>
      <a
        style="text-decoration: none; color: #e74c3c;"
        href="mailto:8th.port@gmail.com"
        class="copyright__link"
      >
        <span style="color: #3498db;">created 😄</span>
        <span style="color: white;">:</span>
        <span style="color: #e74c3c;"></span> 8-th Port</a
      >
    </div>
    <button id="scrollA" title="Go to top">
      <i class="fas fa-chevron-up"></i>
    </button>
    <button id="scrollB" title="Go to down">
      <i class="fas fa-chevron-down"></i>
    </button>
  </div>
</template>
