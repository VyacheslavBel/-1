// ============================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ============================================
let currentSlideIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// ============================================
// ДАННЫЕ ДЛЯ УСЛУГ
// ============================================
const serviceData = {
  individual: {
    category: "КОНСУЛЬТАЦИИ (ТЕРАПИЯ)",
    title: "Индивидуальные консультации",
    description:
      "Индивидуальная терапия — это ваше личное пространство, где вы можете говорить о том, о чем молчали годами. Здесь нет осуждения, есть только бережное сопровождение и профессиональная поддержка на пути к гармонии с собой.",
    list: [
      "🎯 60 минут глубокой личной работы",
      "💻 Онлайн или офлайн в центре Москвы",
      "💬 Поддержка и обратная связь между встречами",
      "📝 Домашние задания для закрепления результата",
    ],
    price: "5 000 ₽",
    oldPrice: "7 500 ₽",
    priceNote: "Доступна рассрочка на 2-4 месяца",
  },
  couple: {
    category: "КОНСУЛЬТАЦИИ (ТЕРАПИЯ)",
    title: "Семейные / Парные консультации",
    description:
      "Отношения — это живой организм, который требует внимания и заботы. В безопасной атмосфере мы исследуем ваши паттерны общения, научимся слышать друг друга и вернём ту самую искру.",
    list: [
      "💑 90 минут совместной работы с парой",
      "🗣️ Улучшение коммуникации и эмпатии",
      "🔥 Восстановление сексуальной близости",
      "🤝 Бережное решение конфликтов без обид",
    ],
    price: "7 000 ₽",
    oldPrice: "10 000 ₽",
    priceNote: "Длительность сессии 90 минут",
  },
  "male-orgasm": {
    category: "МАСТЕР-КЛАССЫ",
    title: "Мастер-класс «Мужской оргазм в твоих руках»",
    description:
      "Для женщин, которые хотят лучше понимать мужскую физиологию и дарить партнёру незабываемые ощущения. Разберём анатомию удовольствия и разрушим мифы, которые мешают наслаждению.",
    list: [
      "👨 3 часа интенсивной практической теории",
      "📖 Анатомия мужского удовольствия",
      "💬 Разбор частых ошибок и страхов",
      "🎁 Бонус: гайд по эрогенным зонам",
    ],
    price: "8 000 ₽",
    oldPrice: "12 000 ₽",
    priceNote: "Доступна рассрочка на 2 месяца",
  },
  "female-orgasm": {
    category: "МАСТЕР-КЛАССЫ",
    title: "Мастер-класс «Пробуждение женского оргазма»",
    description:
      "Женское удовольствие многогранно, и путь к нему может быть невероятно красивым. Мы мягко снимем телесные и психологические блоки, научимся слышать свои желания и разрешим себе наслаждаться без стыда и вины.",
    list: [
      "👩 3 часа раскрепощения и практики",
      "💃 Телесно-ориентированные упражнения",
      "🧠 Психологические практики для снятия блоков",
      "🎁 Бонус: чек-лист самонаблюдения",
    ],
    price: "8 000 ₽",
    oldPrice: "12 000 ₽",
    priceNote: "Доступна рассрочка на 2 месяца",
  },
  "bachelorette-1": {
    category: "ГРУППОВЫЕ ИГРЫ И ФОРМАТЫ",
    title: "Девичник «Без трусиков»",
    description:
      "Пространство для честных разговоров, снятия табу и тотального расслабления в кругу близких по духу женщин. Фуршет, игры, откровенные диалоги и много женской энергии.",
    list: [
      "👯 Закрытая встреча для девушек до 10 человек",
      "🎲 Игры на раскрепощение и доверие",
      "🍷 Включено: фуршет и приятные бонусы",
      "💬 Честные разговоры в безопасном кругу",
    ],
    price: "3 000 ₽",
    oldPrice: "5 000 ₽",
    priceNote: "Цена зависит от количества участниц",
  },
  "bachelorette-2": {
    category: "ГРУППОВЫЕ ИГРЫ И ФОРМАТЫ",
    title: "Девичник «Выходим замуж»",
    description:
      "Осознанный подход к браку начинается с честного разговора о страхах и ожиданиях. Этот девичник-интенсив поможет вам и вашим подругам подготовиться к новому этапу легко и осознанно.",
    list: [
      "💍 4 часа психологического интенсива",
      "🗣️ Разбор страхов и ожиданий от брака",
      "💞 Укрепление доверия и близости в паре",
      "📝 Рабочая тетрадь для подготовки к браку",
    ],
    price: "3 500 ₽",
    oldPrice: "6 000 ₽",
    priceNote: "Включены раздаточные материалы",
  },
  "game-g": {
    category: "ГРУППОВЫЕ ИГРЫ И ФОРМАТЫ",
    title: "Трансформационная игра «Точка G»",
    description:
      "Игра, которая меняет отношение к себе и своей сексуальности. В безопасном кругу вы исследуете свои желания, снимете внутренние запреты и откроете новые ресурсы. Никакой пошлости — только глубокая психологическая работа.",
    list: [
      "🎲 3 часа игры в камерной группе",
      "🃏 Карточки с глубокими вопросами",
      "💬 Живое общение и обратная связь",
      "🎁 Бонус: подборка практик для дома",
    ],
    price: "2 500 ₽",
    oldPrice: "4 000 ₽",
    priceNote: "Включены материалы для игры",
  },
  event: {
    category: "EVENT & MEDIA",
    title: "Event-организация",
    description:
      "Полная организация тематического психологического мероприятия, лекции или закрытого клубного дня. От идеи до реализации — мы создадим событие, которое запомнится гостям.",
    list: [
      "🏛️ Мероприятие под ключ для вас или вашей компании",
      "👥 Подбор спикеров и ведущих",
      "🎨 Разработка уникальной концепции",
      "📸 Фото/видео сопровождение",
    ],
    price: "индивидуально",
    oldPrice: "",
    priceNote: "Стоимость обсуждается на консультации",
  },
  film: {
    category: "EVENT & MEDIA",
    title: "Биографический фильм",
    description:
      "Премиум-услуга для тех, кто хочет осмыслить свой путь, сохранить историю жизни для близких и создать настоящее наследие. Профессиональная съёмка и монтаж.",
    list: [
      "🎬 Создание терапевтичного документального фильма",
      "📝 Глубокое интервью и работа с архивом",
      "✨ Профессиональная съёмочная группа",
      "💎 Премьера для семьи и друзей",
    ],
    price: "по запросу",
    oldPrice: "",
    priceNote: "Премиум-услуга",
  },
};

// ============================================
// ДАННЫЕ ДЛЯ ГАЛЕРЕИ ДИПЛОМОВ
// ============================================
const diplomasData = [
  {
    src: "assets/images/diploma-1.jpg",
    caption:
      'Диплом государственного образца по специальности "Клиническая психология"',
  },
  {
    src: "assets/images/diploma-2.jpg",
    caption: 'Сертификат о повышении квалификации "Интегративная секс-терапия"',
  },
  {
    src: "assets/images/diploma-3.jpg",
    caption: 'Удостоверение "Психоанализ сексуальности и парные отношения"',
  },
  {
    src: "assets/images/diploma-4.jpg",
    caption:
      'Сертификат "Телесно-ориентированная терапия в работе с интимностью"',
  },
  {
    src: "assets/images/diploma-5.jpg",
    caption: 'Диплом профессиональной переподготовки "Семейная психология"',
  },
];

// ============================================
// ДАННЫЕ ДЛЯ АФФИРМАЦИЙ
// ============================================
const affirmations = [
  "Моё тело заслуживает нежности и принятия",
  "Я принимаю свою сексуальность без стыда и вины",
  "Каждый день я чувствую себя более свободной и уверенной",
  "Мои желания имеют значение, и я имею право их выражать",
  "Я открываюсь близости с радостью и доверием",
  "Моя женская энергия наполняет меня силой и гармонией",
  "Я отпускаю страхи и разрешаю себе быть счастливой",
  "Моё тело — это храм, который я люблю и уважаю",
  "Я достойна удовольствия и радости в полной мере",
  "Каждое утро я просыпаюсь с любовью к себе",
];

// ============================================
// ПОЛУЧАЕМ ЭЛЕМЕНТЫ DOM
// ============================================
// Модальные окна
const bookingModal = document.getElementById("bookingModal");
const videoModal = document.getElementById("videoModal");
const serviceModal = document.getElementById("serviceModal");
const diplomasModal = document.getElementById("diplomasModal");
const lightboxModal = document.getElementById("lightboxModal");
const paymentModal = document.getElementById("paymentModal");

// Элементы премиум модалки
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalList = document.getElementById("modalList");
const modalPrice = document.getElementById("modalPrice");
const modalOldPrice = document.getElementById("modalOldPrice");
const modalPriceNote = document.getElementById("modalPriceNote");

// ============================================
// ФУНКЦИИ ДЛЯ ТЕМЫ (СВЕТЛАЯ/ТЕМНАЯ)
// ============================================
const themeToggle = document.getElementById("themeToggle");

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    if (themeToggle)
      themeToggle.querySelector(".theme-toggle__icon").textContent = "🌙";
  } else {
    document.body.setAttribute("data-theme", "light");
    if (themeToggle)
      themeToggle.querySelector(".theme-toggle__icon").textContent = "☀️";
  }
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    if (themeToggle)
      themeToggle.querySelector(".theme-toggle__icon").textContent = "🌙";
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    if (themeToggle)
      themeToggle.querySelector(".theme-toggle__icon").textContent = "☀️";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}
initTheme();

// ============================================
// ФУНКЦИИ ДЛЯ МОДАЛЬНЫХ ОКОН
// ============================================
function openModal(modal) {
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modal) {
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function closeAllModals() {
  closeModal(bookingModal);
  closeModal(videoModal);
  closeModal(serviceModal);
  closeModal(diplomasModal);
  closeModal(lightboxModal);
  closeModal(paymentModal);
}

// ============================================
// ПРЕМИУМ МОДАЛКА УСЛУГ
// ============================================
function openPremiumModal(serviceId) {
  const service = serviceData[serviceId];
  if (!service || !serviceModal) return;

  if (modalCategory) modalCategory.textContent = service.category;
  if (modalTitle) modalTitle.textContent = service.title;
  if (modalDescription) modalDescription.textContent = service.description;
  if (modalPrice) modalPrice.textContent = service.price;
  if (modalOldPrice) {
    if (service.oldPrice) {
      modalOldPrice.textContent = service.oldPrice;
      modalOldPrice.style.display = "inline";
    } else {
      modalOldPrice.style.display = "none";
    }
  }
  if (modalPriceNote) modalPriceNote.textContent = service.priceNote;

  if (modalList && service.list) {
    modalList.innerHTML = "";
    service.list.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = item;
      modalList.appendChild(li);
    });
  }

  openModal(serviceModal);
}

function closePremiumModal() {
  closeModal(serviceModal);
}

// ============================================
// МОДАЛКА ЗАПИСИ
// ============================================
function openBookingModal() {
  openModal(bookingModal);
}

function closeBookingModal() {
  closeModal(bookingModal);
}

// ============================================
// МОДАЛКА ВИДЕО
// ============================================
function openVideoModal() {
  openModal(videoModal);
}

function closeVideoModal() {
  closeModal(videoModal);
}

// ============================================
// ГАЛЕРЕЯ ДИПЛОМОВ
// ============================================
function renderCarousel() {
  const slidesContainer = document.getElementById("carouselSlides");
  const captionEl = document.getElementById("carouselCaption");
  const dotsContainer = document.getElementById("carouselDots");

  if (!slidesContainer) return;

  slidesContainer.innerHTML = "";
  if (dotsContainer) dotsContainer.innerHTML = "";

  diplomasData.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "diplomas-modal__slide";
    slide.innerHTML = `<img src="${item.src}" alt="Диплом или сертификат ${index + 1}" data-index="${index}">`;
    slidesContainer.appendChild(slide);
  });

  if (dotsContainer) {
    diplomasData.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "diplomas-modal__dot";
      if (index === currentSlideIndex) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  updateCarouselPosition();
  if (captionEl && diplomasData[currentSlideIndex]) {
    captionEl.textContent = diplomasData[currentSlideIndex].caption;
  }
}

function updateCarouselPosition() {
  const slidesContainer = document.getElementById("carouselSlides");
  if (slidesContainer) {
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  const dots = document.querySelectorAll(".diplomas-modal__dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlideIndex);
  });

  const captionEl = document.getElementById("carouselCaption");
  if (captionEl && diplomasData[currentSlideIndex]) {
    captionEl.textContent = diplomasData[currentSlideIndex].caption;
  }
}

function goToSlide(index) {
  if (index < 0) index = 0;
  if (index >= diplomasData.length) index = diplomasData.length - 1;
  currentSlideIndex = index;
  updateCarouselPosition();
}

function nextSlide() {
  if (currentSlideIndex < diplomasData.length - 1) {
    currentSlideIndex++;
    updateCarouselPosition();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateCarouselPosition();
  }
}

function openDiplomasModal() {
  currentSlideIndex = 0;
  renderCarousel();
  openModal(diplomasModal);
}

function closeDiplomasModal() {
  closeModal(diplomasModal);
}

// ============================================
// LIGHTBOX (ZOOM)
// ============================================
function openLightbox(imageSrc) {
  const lightboxImage = document.getElementById("lightboxImage");
  if (lightboxImage && lightboxModal) {
    lightboxImage.src = imageSrc;
    openModal(lightboxModal);
  }
}

function closeLightbox() {
  closeModal(lightboxModal);
}

// ============================================
// ПЛАТЕЖНАЯ СИСТЕМА
// ============================================
let currentProduct = null;

function openPaymentModal(productId, productName, productPrice) {
  currentProduct = { id: productId, name: productName, price: productPrice };
  const paymentProductName = document.getElementById("paymentProductName");
  const paymentAmount = document.getElementById("paymentAmount");

  if (paymentProductName) paymentProductName.textContent = productName;
  if (paymentAmount) paymentAmount.textContent = productPrice;

  openModal(paymentModal);
}

// ============================================
// ОБРАБОТЧИКИ СОБЫТИЙ
// ============================================

// Кнопки записи
document.querySelectorAll(".booking-open-btn").forEach((btn) => {
  btn.addEventListener("click", openBookingModal);
});

// Кнопка видео

document.querySelectorAll(".service-detail-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const serviceId = btn.getAttribute("data-service");
    if (serviceId && serviceData[serviceId]) {
      openPremiumModal(serviceId);
    }
  });
});

// Клик по карточке услуги
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("service-detail-btn")) return;
    const serviceId = card.getAttribute("data-service");
    if (serviceId && serviceData[serviceId]) {
      openPremiumModal(serviceId);
    }
  });
});

// Закрытие премиум модалки
const premiumModalClose = document.getElementById("premiumModalCloseBtn");
const premiumModalOverlay = document.querySelector(".premium-modal__overlay");
const premiumBookingBtn = document.getElementById("premiumBookingBtn");

if (premiumModalClose)
  premiumModalClose.addEventListener("click", closePremiumModal);
if (premiumModalOverlay)
  premiumModalOverlay.addEventListener("click", closePremiumModal);
if (premiumBookingBtn) {
  premiumBookingBtn.addEventListener("click", () => {
    closePremiumModal();
    setTimeout(openBookingModal, 300);
  });
}

// Дипломы
document
  .querySelector(".diplomas-open-btn")
  ?.addEventListener("click", openDiplomasModal);

// Закрытие галереи дипломов
const diplomasCloseBtn = document.getElementById("diplomasModalCloseBtn");
const diplomasOverlay = document.querySelector(".diplomas-modal__overlay");

if (diplomasCloseBtn)
  diplomasCloseBtn.addEventListener("click", closeDiplomasModal);
if (diplomasOverlay)
  diplomasOverlay.addEventListener("click", closeDiplomasModal);

// Навигация в галерее
const prevBtn = document.getElementById("carouselPrevBtn");
const nextBtn = document.getElementById("carouselNextBtn");

if (prevBtn) prevBtn.addEventListener("click", prevSlide);
if (nextBtn) nextBtn.addEventListener("click", nextSlide);

// Клик по изображению для увеличения
document.addEventListener("click", (e) => {
  const slideImg = e.target.closest(".diplomas-modal__slide img");
  if (slideImg && diplomasModal?.classList.contains("active")) {
    openLightbox(slideImg.src);
  }
});

// Закрытие lightbox
const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
const lightboxOverlay = document.querySelector(".lightbox-modal__overlay");

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
if (lightboxOverlay) lightboxOverlay.addEventListener("click", closeLightbox);

// Клавиатурная навигация
document.addEventListener("keydown", (e) => {
  if (diplomasModal?.classList.contains("active")) {
    if (e.key === "ArrowLeft") {
      prevSlide();
      e.preventDefault();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
      e.preventDefault();
    }
    if (e.key === "Escape") closeDiplomasModal();
  }
  if (lightboxModal?.classList.contains("active") && e.key === "Escape") {
    closeLightbox();
  }
  if (e.key === "Escape") {
    if (serviceModal?.classList.contains("active")) closePremiumModal();
    if (bookingModal?.classList.contains("active")) closeBookingModal();
    if (videoModal?.classList.contains("active")) closeVideoModal();
    if (paymentModal?.classList.contains("active")) closeModal(paymentModal);
  }
});

// Свайпы для мобильных
const carouselViewport = document.querySelector(".diplomas-modal__viewport");
if (carouselViewport) {
  carouselViewport.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  carouselViewport.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  });
}

// Закрытие обычных модалок по крестику
document.querySelectorAll(".modal__close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeAllModals();
  });
});

// Закрытие по клику на фон
[bookingModal, videoModal].forEach((modal) => {
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  }
});

// Форма записи с чек-боксом
const bookingForm = document.getElementById("bookingForm");
const offerCheckbox = document.getElementById("offerCheckbox");
const submitBookingBtn = document.getElementById("submitBookingBtn");

if (offerCheckbox && submitBookingBtn) {
  offerCheckbox.addEventListener("change", () => {
    submitBookingBtn.disabled = !offerCheckbox.checked;
  });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Спасибо за заявку! Я свяжусь с вами в ближайшее время для согласования даты и времени консультации.",
    );
    closeBookingModal();
    bookingForm.reset();
    if (submitBookingBtn) submitBookingBtn.disabled = true;
  });
}

// Платежная форма
const paymentForm = document.getElementById("paymentForm");
const paymentOfferCheckbox = document.getElementById("paymentOfferCheckbox");
const submitPaymentBtn = document.getElementById("submitPaymentBtn");

if (paymentOfferCheckbox && submitPaymentBtn) {
  paymentOfferCheckbox.addEventListener("change", () => {
    submitPaymentBtn.disabled = !paymentOfferCheckbox.checked;
  });
}

if (paymentForm) {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("paymentEmail")?.value;
    const name = document.getElementById("paymentName")?.value;

    if (!email || !name) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    // Имитация отправки платежа
    alert(
      `Спасибо за покупку!\nЧек отправлен на ${email}\nСсылка на скачивание придет на почту в течение 5 минут.`,
    );
    closeModal(paymentModal);
    paymentForm.reset();
    if (submitPaymentBtn) submitPaymentBtn.disabled = true;
    currentProduct = null;
  });
}

// Кнопки покупки гайдов
document.querySelectorAll(".buy-now-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.getAttribute("data-product");
    let productName = "";
    let productPrice = "";

    const card = btn.closest(".ebook-card");
    const titleEl = card?.querySelector(".ebook-card__title");
    const priceNewEl = card?.querySelector(".price-new");

    if (titleEl) productName = titleEl.textContent;
    if (priceNewEl) productPrice = priceNewEl.textContent;

    openPaymentModal(productId, productName, productPrice);
  });
});

// Бесплатные гайды
document.querySelectorAll(".download-free-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.getAttribute("data-product");
    let productName = "";
    const card = btn.closest(".ebook-card");
    const titleEl = card?.querySelector(".ebook-card__title");
    if (titleEl) productName = titleEl.textContent;

    alert(
      `Скачивание "${productName}" начнется сейчас.\nСпасибо за интерес к моим материалам!`,
    );
    // Имитация скачивания
    window.location.href = "#";
  });
});

// Telegram кнопка
document.querySelector(".telegram-trigger")?.addEventListener("click", () => {
  window.open("https://t.me/ekaterina_polyakova", "_blank");
});

// ============================================
// АУДИО ПЛЕЕР
// ============================================
const audioPlayers = {};
const audioRelax = document.getElementById("audio-relax");

document.querySelectorAll(".audio-play-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const audioId = btn.getAttribute("data-audio");

    if (btn.classList.contains("locked")) {
      alert("Полная версия медитации доступна после оплаты. Стоимость: 490 ₽");
      return;
    }

    if (audioId === "relax" && audioRelax) {
      if (audioRelax.paused) {
        audioRelax.play();
        btn.textContent = "⏸ PAUSE";
        audioRelax.onended = () => {
          btn.textContent = "▶ PLAY";
        };
      } else {
        audioRelax.pause();
        btn.textContent = "▶ PLAY";
      }
    }
  });
});

// ============================================
// АФФИРМАЦИЯ ДНЯ (3D FLIP CARD)
// ============================================
// ============================================
// АФФИРМАЦИЯ ДНЯ (3D FLIP CARD) - ПОЛНОСТЬЮ ИСПРАВЛЕНО
// ============================================
const flipCard = document.getElementById("affirmationCard");
const getAffirmationBtn = document.getElementById("getAffirmationBtn");
const affirmationText = document.getElementById("affirmationText");

const affirmationsList = [
  "Моё тело заслуживает нежности и принятия",
  "Я принимаю свою сексуальность без стыда и вины",
  "Каждый день я чувствую себя более свободной и уверенной",
  "Мои желания имеют значение, и я имею право их выражать",
  "Я открываюсь близости с радостью и доверием",
  "Моя женская энергия наполняет меня силой и гармонией",
  "Я отпускаю страхи и разрешаю себе быть счастливой",
  "Моё тело — это храм, который я люблю и уважаю",
  "Я достойна удовольствия и радости в полной мере",
  "Каждое утро я просыпаюсь с любовью к себе",
];

function getRandomAffirmationText() {
  return affirmationsList[Math.floor(Math.random() * affirmationsList.length)];
}

if (getAffirmationBtn && flipCard && affirmationText) {
  // Обработчик кнопки
  getAffirmationBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const newAffirmation = getRandomAffirmationText();
    affirmationText.textContent = newAffirmation;
    flipCard.classList.add("flipped");
  });

  // Обработчик клика по карточке (возврат на лицевую сторону)
  flipCard.addEventListener("click", (e) => {
    if (
      !e.target.closest("#getAffirmationBtn") &&
      flipCard.classList.contains("flipped")
    ) {
      flipCard.classList.remove("flipped");
    }
  });

  console.log(
    "Аффирмация инициализирована. Доступно аффирмаций:",
    affirmationsList.length,
  );
} else {
  console.log("Элементы аффирмации не найдены");
}
// ============================================
// ТАБЫ В РАЗДЕЛЕ УСЛУГ
// ============================================
const tabs = document.querySelectorAll(".services__tab");
const panels = document.querySelectorAll(".services__panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    panels.forEach((panel) => {
      panel.classList.remove("active");
      if (panel.id === tabId) {
        panel.classList.add("active");
      }
    });
  });
});

// ============================================
// АНИМАЦИЯ ПРИ СКРОЛЛЕ (Intersection Observer)
// ============================================
const animateElements = document.querySelectorAll(
  ".advantage-card, .product-card, .process__step, .ebook-card, .approach__quote, .approach__photo",
);

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// ============================================
// ХЕДЕР ПРИ СКРОЛЛЕ
// ============================================
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// ============================================
// МОБИЛЬНОЕ МЕНЮ
// ============================================
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu__close");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if (mobileMenuClose && mobileMenu) {
  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
}

document.querySelectorAll(".mobile-menu__link").forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// ============================================
// ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href !== "#" && href !== "#0") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (mobileMenu) mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
});

// ============================================
// FALLBACK ДЛЯ ИЗОБРАЖЕНИЙ
// ============================================
function handleImageError(img) {
  img.src =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23E0E0E0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999999" font-family="Arial"%3EФото%3C/text%3E%3C/svg%3E';
}

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => handleImageError(img));
});

// ============================================
// INIT
// ============================================
console.log("Сайт Екатерины Поляковой загружен");
console.log("Доступно услуг:", Object.keys(serviceData).length);
console.log("Доступно дипломов:", diplomasData.length);
