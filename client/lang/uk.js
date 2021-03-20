export default {
  logo: {
    alt: "Ортен - роздрібний і оптовий інтернет-магазин. Копіювальна техніка та витратні матеріали",
    title:
      "Ортен - роздрібний і оптовий інтернет-магазин. Копіювальна техніка та витратні матеріали ★ Комп'ютери та комплектуючі ★ Поліграфічне обладнання і витратні матеріали ★ Оперативна поліграфія ★ Діагностика та ремонт копіювальної техніки і комп'ютерів ★ Ортен більше 20 років на ринку копіювальної техніки і сервісного обслуговування",
  },
  schedule: {
    data: [
      { class: "fas fa-door-open", text: "Графік роботи", link: false },
      { class: "fas fa-clock", text: "Пн-Пт: 9:00 - 18:00", link: false },
      { class: "fas fa-utensils", text: "Пн-Пт: 12:00 - 12:30", link: false },
      { class: "fas fa-clock", text: "Сб-Нд: Вихідний", link: false },
    ],
  },
  main_category: {
    data: [
      {
        text: "Ricoh",
        class: "",
        title:
          "Принтери, БФП, Дуплікатори японської компанії Ricoh. Тонер, фотобарабани, ресурсні деталі",
        href: "/category/ricoh",
      },
      {
        text: "Konica Minolta",
        class: "",
        title:
          "Konica Minolta — японський холдінг, один з провідних світових виробників. БФП, принтери, інженерні друкувальні системи. Витратні матеріали, додаткове оборудованіе, ресурсні деталі",
        href: "/category/konica-minolta",
      },
      {
        text: "Kyocera",
        class: "",
        title: "Принтери, БФП, витратні матеріали Kyocera",
        href: "/category/kyocera",
      },
      {
        text: "Сервісний Центр",
        class: "",
        title:
          "Ремонт принтерів, БФП, комп'ютерів, заправка і реставрація картриджів. Всі можливі і неможливі ремонти",
        href: "/category/servisnyj-centr",
      },
      {
        text: "Все для принтерів і МФУ",
        class: "",
        title:
          "Тонер, фотобарабани, вали, ролики, картриджі світових брендів Toshiba, Erus, Static Control, Vision, Xerox, HP, Samsung",
        href: "/category/licenzionnye-rashodnye-materialy",
      },
      {
        text: "Друкарня",
        class: "",
        title:
          "Поліграфічні послуги в Миколаєві. Візиткі, календарі, флаера. Тиражування на різографі",
        href: "/polygraphy",
      },
      {
        text: "Доставка і оплата",
        class: "",
        title: "",
        href: "/delivery_payment",
      },
    ],
  },
  menu: {
    data: [
      { text: "Дім", link: { class: "", href: "/" } },
      { text: "Категорії", link: { class: "", href: "/category" } },
      { text: "Товари", link: { class: "", href: "/product" } },
      { text: "Сервіс", link: { class: "", href: "/service" } },
      { text: "Поліграфія", link: { class: "", href: "/polygraphy" } },
      {
        text: "Доставка та оплата",
        link: { class: "", href: "/delivery_payment" },
      },
      { text: "Хто ми", link: { class: "", href: "/about" } },
      { text: "Контакти", link: { class: "", href: "/contact" } },
    ],
  },
  contact: {
    general: {
      schedule: "Графік",
      output: "Сб-Нд: Вихідний",
      address: "Адреса",
      sales: "Продажі",
      service: "Сервіс",
      print: "Поліграфія",
    },
    data: [
      {
        class: "fa fa-home",
        text: "м. Миколаїв пр. Миру, 5",
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
        text: "(0512) 56-65-39",
        link: { class: "", href: "tel:+380512566539" },
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
          "Компанія “Ортен” працює як з юридичними, так і з приватними особами. Тому оплата послуг компанії може здійснюватися кількома варіантами на вибір:",
        li: [
          "Готівковий розрахунок (ФОП Сіряков С.В.);",
          "Безготівковий розрахунок;",
          "Гарантований платіж.",
        ],
      },
      {
        p:
          "Також ви можете оплатити замовлення післяплатою або внести передплату. Після оформлення замовлення з вами зв'яжеться менеджер і надасть реквізити для оплати. До товару додається стандартний пакет супровідних документів, які задовольняють вимоги і юридичних осіб, і приватних.",
      },
    ],
  },
  delivery: {
    data: [
      {
        h: "САМОВИВІЗ",
        p:
          'Менеджер компанії "Ортен" погодить з вами всі нюанси, обговорить зручні для вас дату і час, збере, підготує, упакує замовлений вами товар. При складнощах або різного роду форс-мажорах ми повідомимо вам заздалегідь.',
      },
      {
        p:
          "Безкоштовна доставка. Компанія “Ортен” здійснює доставку товару безкоштовно по Миколаєву при замовленні від 5 000 гривень.",
      },
      {
        h: "ДОСТАВКА ПЕРЕВІЗНИКОМ",
        p:
          'Для нас вкрай зручно використовувати перевізника "Нова Пошта". Це пов`язано, перш за все, з оперативністю відправки вантажів невеликої ваги та невеликих розмірів. У день надходження оплати буде здійснена відправка. Звичайно, якщо вам зручно приймати посилки від інших перевізників, для нас це не є проблема. Наш менеджер зв`яжеться з вами, уточнить всі необхідні дані (умови оплати, доставки, терміни і дати). Після оплати товар збирають, пакують і передають на відділення перевізника. Оплата послуг доставки здійснюється за рахунок покупця і не входить у вартість товару.',
      },
    ],
  },
  about: {
    title: `Ортен більше 20 років ринку копіювальної техніки і сервісного обслуговування`,
    description: `Richo, Duplo, Konica Minolta, ColorWay - Купити в Миколаєві, інтернет-магазин Ортен ★ Ортен більше 20 років на ринку копіювальної техніки і сервісного обслуговування`,
    data: [
      {
        p:
          "ТОВ “Ортен” продає і ремонтує копіювальну техніку. Підприємство було засноване в 1996 році. Починали з електронних друкарських машинок OPTIMA. Тепер працюємо з копіювально-розмножувальною технікою провідних зарубіжних виробників.",
      },
      {
        h: "Що пропонуємо:",
        li: [
          "Копіювально-розмножувальну техніку;",
          "Принтери;",
          "Цифрові дублікатори;",
          "Повнокольорові і монохромні багатофункціональні пристрої (БФП);",
          "Ремонт комп'ютерів, принтерів, БФП;",
          "Заправку, реставрацію картриджів для лазерних принтерів.",
        ],
      },
      {
        h: "200+ клієнтів в 2020 році.",
        p:
          "Досвід роботи профільних співробітників з копіювально-розмножувальним обладнанням від 15 років.У 2020 році максимальна ціна робіт, виконаних за одним договором, склала 2,148 млн грн. (комплексне обслуговування техніки на підприємстві). Мінімального порогу вартості обслуговування техніки немає. Відповідаємо вимогам брендів. Цей досвід застосовуємо при роботі з обладнанням і витратними матеріалами інших фірм: Konica Minolta, Canon, HP, Samsung, Xerox, Brother, Hanp, Static Control, Katun, ColorWay та ін. З нами ви завжди впевнені в якості робіт.",
      },
      {
        h: "Наші клієнти:",
        li: [
          "ДП НВКГ “Зоря” - “Машпроект” (з 2007) - один зі світових лідерів виробництва газових турбін. Сфера співробітництва: обслуговування та ремонт копіювально-розмножувальної техніки формату А3 і інженерних систем формату А0.",
          "Миколаївкомундорпроект (з 2009) - проектно-вишукувальний інститут. Сфера співробітництва: обслуговування та ремонт копіювально-розмножувальної техніки формату А3 і А0.",
          "“Миколаївагропроект” (з 2011) - проектно-вишукувальний інститут. Обслуговування та ремонт копіювально-розмножувальної техніки формату А3 і А0.",
          "“Смарт-Мерітайм Груп” (Чорноморський суднобудівний завод) (з 2011). Сфера співробітництва: обслуговування та ремонт копіювально-розмножувальної техніки формату А3 і А0.",
        ],
      },
      {
        h: "Наші гарантії",
        p:
          "Співробітники ТОВ “Ортен” регулярно навчаються у виробників техніки. Є сертифікованими представниками таких компаній:",
        li: ["Ricoh;", "Gestetner;", "Develop;", "Kyocera;"],
      },
      {
        h: "Чому ми:",
        li: [
          "Не хочеться хвалитися, але ми реально вражаючі.",
          "Зручна робота з бюджетними організаціями.",
          "Відстрочка платежів.",
          "Виконання умов контракту навіть в МІНУС для себе.",
          "Ми працюємо для вас! Завжди!",
          "Прийнятні і конкурентні ціни, а в деяких категоріях нижче ринкових.",
          "Для постійних клієнтів зручна система знижок.",
        ],
      },
    ],
  },
  product: {
    no_product:
      "В даний момент цей товар відсутній, але Ви можете отримати детальну інформацію про можливість поставки по телефону або email.",
    no_product_list: "Немає в наявності",
    vendor_code: "Артикул",
    vendor: "Виробник",
    type_product: "Тип товару",
    action: "Акція до",
    price: "Ціна",
    manufacturer: "Виробник",
    type_service: "Тип сервісу",
    description: "Короткий опис",
    short_description: "Короткий опис",
    specification: "Характеристика",
    service: "Сервіс",
  },
  dom: {
    categories: "Категорії",
    actions: "Новинки та акції",
    contacts: "Контакти",
    categories_list: "Список Категорій",
    products: "Товари",
    filter: "Фільтри",
    cart_title: "Корзина товаров", //! start
    name: "Ім'я",
    phone: "Телефон",
    email: "EMail",
    note: "Доповнення, Відділення Нової Пошти...",
    thank: "Дякуємо за ваше замовлення!", //! end
    total_cost: "Загальна вартість",
    search: "Пошук",
    min: "Ціна від",
    max: "Ціна до",
    format: "Формат А0-А8", //! start
    export: {
      pickup: "Самовивіз",
      np: "Новою Поштою",
    },
    payment: {
      cash: "Готівка",
      no_cash: "Безготівковий розрахунок",
    },
    color: {
      name: "Монохромний/Кольоровий",
      bw: "Монохромний",
      color: "Кольоровий",
    },
    btn: {
      send: "Показати",
      reset: "Скинути",
      send_cart: "Оформити замовлення",
    },
    available: "Наявність",
  },
};
