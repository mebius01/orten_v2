export default {
  logo: {
    alt:
      "Ортен - розничный и оптовый интернет-магазин. Копировальная техника и расходные материалы",
    title:
      "Ортен - розничный и оптовый интернет-магазин. Копировальная техника и расходные материалы ★ Компьютеры и комплектующие ★ Полиграфическое оборудование и расходные материалы ★ Оперативная полиграфия ★ Диагностика и ремонт копировальной техники и компьютеров ★  Ортен более 20 лет на рынке копировальной техники и сервисного обслуживания",
  },
  schedule: {
    data: [
      { class: "fas fa-door-open", text: "График работы", link: false },
      { class: "fas fa-clock", text: "Пн-Пт: 9:00 - 18:00", link: false },
      { class: "fas fa-utensils", text: "Пн-Пт: 12:00 - 12:30", link: false },
      { class: "fas fa-clock", text: "Сб-Вс: Выходной", link: false },
    ],
  },
  main_category: {
    data: [
      {
        text: "Ricoh",
        class: "",
        title:
          "Принтеры, МФУ, Дупликаторы японской компании Ricoh. Тонера, фотобарабаны, ресурсные детали",
        href: "/ru/category/ricoh",
      },
      {
        text: "Konica Minolta",
        class: "",
        title:
          "Konica Minolta - японский холдинг, один из ведущих мировых производителей. МФУ, принтеры, инженерные печатные системы. Расходные материалы, дополнительное оборудование, ресурсные детали",
        href: "/ru/category/konica-minolta",
      },
      {
        text: "Kyocera",
        class: "",
        title: "Принтеры, МФУ, расходные материалы Kyocera",
        href: "/ru/category/kyocera",
      },
      {
        text: "Сервисный Центр",
        class: "",
        title:
          "Ремонт Принтеров, МФУ, компьютеров, заправка и реставрация картриджей. Все возможные и невозможные ремонты",
        href: "/ru/category/servisnyj-centr",
      },
      {
        text: "Все для Принтеров и МФУ",
        class: "",
        title:
          "Тонера, фотобарабаны, вали, ролики, картриджи мировых брендов Toshiba, Erus, Static Control, Vision, Xerox, HP, Samsung",
        href: "/ru/category/licenzionnye-rashodnye-materialy",
      },
      {
        text: "Типография",
        class: "",
        title:
          "Полиграфические услуги в Николаеве. Визитки, календари, флаера.. Тиражирование на ризографе",
        href: "/ru/polygraphy",
      },
      {
        text: "Доставка и оплата",
        class: "",
        title: "",
        href: "/ru/delivery_payment",
      },
    ],
  },
  menu: {
    data: [
      { text: "Дом", link: { class: "", href: "/ru/" } },
      { text: "Категории", link: { class: "", href: "/ru/category" } },
      { text: "Товары", link: { class: "", href: "/ru/product" } },
      { text: "Сервис", link: { class: "", href: "/ru/service" } },
      { text: "Полиграфия", link: { class: "", href: "/ru/polygraphy" } },
      {
        text: "Доставка и оплата",
        link: { class: "", href: "/ru/delivery_payment" },
      },
      { text: "Кто мы", link: { class: "", href: "/ru/about" } },
      { text: "Контакты", link: { class: "", href: "/ru/contact" } },
    ],
  },
  contact: {
    general: {
      schedule: "График",
      output: "Сб-Вс: Выходной",
      address: "Адрес",
      sales: "Продажи",
      service: "Сервис",
      print: "Полиграфия",
    },
    data: [
      {
        class: "fa fa-home",
        text: "г. Николаев пр. Мира, 5",
        link: {
          class: "",
          href:
            "https://www.google.com/maps/place/%D0%9E%D1%80%D1%82%D1%8D%D0%BD,+%D0%9E%D0%9E%D0%9E/@46.952503,32.040273,15z/data=!4m2!3m1!1s0x0:0x4784e49173525ad2?ved=2ahUKEwiLnpXuiPLfAhXNqIsKHWxSBAYQ_BIwCnoECAUQCA",
        },
      },
      {
        class: "fas fa-envelope",
        text: "orten_office@ukr.net",
        link: { class: "", href: "mailto:orten_office@ukr.net" },
      },
      {
        class: "fas fa-phone",
        text: "(0512) 58-32-60",
        link: { class: "", href: "tel:+380512583260" },
      },
      {
        class: "fas fa-mobile",
        text: "(050) 318-40-64",
        link: { class: "", href: "tel:+380503184064" },
      },
    ],
  },
  pay: {
    data: [
      {
        h: "ОПЛАТА",
        p:
          "Компания “Ортэн” работает как с юридическими, так и с частными лицами. Потому оплата услуг компании может осуществляться несколькими вариантами на выбор:",
        li: [
          "Наличный расчет (ФОП Сіряков С.В.);",
          "Безналичный расчет;",
          "Гарантированный платеж.",
        ],
      },
      {
        p:
          "Также вы можете оплатить заказ наложенным платежом либо внести предоплату. После оформления заказа с вами свяжется менеджер и предоставит реквизиты для оплаты. К товару прилагается стандартный пакет сопроводительных документов, которые удовлетворят требования и юридических лиц, и частных.",
      },
    ],
  },
  delivery: {
    data: [
      {
        h: "САМОВЫВОЗ",
        p:
          "Менеджер компании “Ортэн” согласует с вами все нюансы, обговорит удобные для вас дату и время, соберет, подготовит, упакует заказанный вами товар. При сложностях или различного рода форс-мажорах вы будете уведомлены заранее.",
      },
      {
        p:
          "Бесплатная доставка. Компания “Ортэн” доставит товар бесплатно по Николаеву при заказе от 5 000 гривен.",
      },
      {
        h: "ДОСТАВКА ПЕРЕВОЗЧИКОМ",
        p:
          "Для нас крайне удобно использовать перевозчика 'Новая Почта'. Это связано, прежде всего, с оперативность отправки малогабаритных и маловесных грузов. В день поступления оплаты будет осуществлена отправка. Конечно, если вам удобно принимать посылки от других перевозчиков, для нас это не есть проблема. Наш менеджер свяжется с вами, уточнит все необходимые данные (условия оплаты, доставки, сроки и даты). После оплаты товар собирают, упаковывают и передают на отделение перевозчика. Оплата услуг доставки осуществляется за счет покупателя и не входит в стоимость товара.",
      },
    ],
  },
  about: {
    title: `Ортен более 20 лет рынке копировальной техники и сервисного обслуживания`,
    description: `Richo, Duplo, Konica Minolta, ColorWay - Купить в Николаеве, интернет-магазин Ортен ★ Ортен более 20 лет на рынке копировальной техники и сервисного обслуживания`,
    data: [
      {
        p:
          "ООО “Ортэн” продает и ремонтирует копировальную технику. Предприятие было основано в 1996 году. Начинали с электронных печатных машинок OPTIMA. Теперь работаем с копировально-множительной техникой ведущих зарубежных производителей.",
      },
      {
        h: "Что предлагаем:",
        li: [
          "Копировально-множительную технику;",
          "Принтеры;",
          "Цифровые дубликаторы;",
          "Полноцветные и монохромные многофункциональные устройства (МФУ).",
          "Ремонт компьютеров, принтеров, МФУ;",
          "Заправку, реставрацию картриджей для лазерных принтеров.",
        ],
      },
      {
        h: "200+ клиентов в 2020 году.",
        p:
          "Опыт работы профильных сотрудников с копировально-множительным оборудованием от 15 лет. В 2020 году максимальная цена работ, выполненных по одному договору, составила 2,148 млн. грн (комплексное обслуживание техники на предприятии). Минимального порога стоимости обслуживания техники нет. Соответствуем требованиям брендов. Этот опыт применяем при работе с оборудованием и расходниками других фирм: Konica Minolta, Canon, HP, Samsung, Xerox, Brother, Hanp, Static Control, Katun, ColorWay и др. С нами вы всегда уверены в качестве работ.",
      },
      {
        h: "Наши клиенты:",
        li: [
          "ГП НПКГ “Зоря”-”Машпроект” (с 2007) — один из мировых лидеров производства газовых турбин. Сфера сотрудничества: обслуживание и ремонт копировально-множительной техники формата А3 и инженерных систем формата А0.",
          "Николаевкоммундорпроект (с 2009) — проектно-изыскательный институт. Сфера сотрудничества: обслуживание и ремонт копировально-множительной техники формата А3 и А0.",
          "“Николаевагропроект” (с 2011) — проектно-изыскательский институт. Обслуживание и ремонт копировально-множительной техники формата А3 и А0.",
          "“Смарт-Меритайм Групп” (Черноморский судостроительный завод) (с 2011). Сфера сотрудничества: обслуживание и ремонт копировально-множительной техники формата А3 и А0.",
        ],
      },
      {
        h: "Наши гарантии",
        p:
          "Сотрудники ООО “Ортэн” регулярно обучаются у производителей техники. Являемся сертифицированными представителями таких компаний:",
        li: ["Ricoh;", "Gestetner;", "Develop;", "Kyocera;"],
      },
      {
        h: "Почему мы:",
        li: [
          "Не хочется хвастаться, но мы реально потрясные.",
          "Удобная работа с бюджетными организациями.",
          "Отсрочка платежей.",
          "Выполнения условий контракта даже в МИНУС для себя.",
          "Мы работаем для вас! Всегда!",
          "Приемлемые и конкурентные цены, а в некоторых категориях ниже рыночных.",
          "Для постоянных клиентов, удобная система скидок.",
        ],
      },
    ],
  },
  product: {
    no_product:
      "В данный момент этот товар отсутствует, но Вы можете получить детальную информацию о возможности поставки по телефону или email.",
    no_product_list: "Нет в наличии",
    vendor_code: "Артикул",
    vendor: "Производитель",
    type_product: "Тип товара",
    action: "Акция до",
    price: "Цена",
    manufacturer: "Производитель",
    type_service: "Тип сервиса",
    description: "Краткое описание",
    short_description: "Краткое описание",
    specification: "Характеристика",
    service: "Сервис",
  },
  dom: {
    polygraphy: "Полиграфия",
    about: "О нас",
    delivery_payment: "Доставка и оплата",
    categories: "Категории",
    actions: "Новинки и акции",
    contacts: "Контакты",
    categories_list: "Список Категорий",
    products: "Товары",
    filter: "Фильтры",
    cart_title: "Корзина товаров", //! start
    name: "Имя",
    phone: "Телефон",
    email: "EMail",
    note: "Дополнения, Отделение Новой Почты...",
    thank: "Спасибо за Ваш заказ", //! end
    total_cost: "Общая стоимость",
    search: "Поиск...",
    min: "Цена от",
    max: "Цена до",
    format: "Формат А0-А8", //! start
    export: {
      pickup: "Самовывоз",
      np: "Новой Почтой",
    },
    payment: {
      cash: "Наличные",
      no_cash: "Безналичный расчет",
    },
    color: {
      name: "Монохромный/Цветной",
      bw: "Монохромный",
      color: "Цветной",
    },
    btn: {
      send: "Показать",
      reset: "Сбросить",
      send_cart: "Заказать",
    },
    available: "Наличие",
  },
  notification: {
    errorPhone: "Пожалуйста добавьте свой телефон",
    errorName: "Пожалуйста добавьте свое имя",
    success: "",
  },
};
