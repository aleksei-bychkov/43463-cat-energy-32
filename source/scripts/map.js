// eslint-disable-next-line no-undef
ymaps.ready(init);
function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  // eslint-disable-next-line no-undef
  const myMap = new ymaps.Map('ymap', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [59.938631, 30.323037], // Санк-Петербург
    zoom: 16,
    controls: []
  });

  // eslint-disable-next-line no-undef
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Cat Energy'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../images/map-pin@2x.png',
    // Размеры метки.
    iconImageSize: [90, 80],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-45, -75]
  });

  myMap.geoObjects
    // eslint-disable-next-line no-undef
    .add(myPlacemark);
  //Сдвигаем центр карты для размера от 1440px
  const mq = window.matchMedia('(min-width: 1440px)');

  if (mq.matches) {
    myMap.setCenter([59.938703, 30.318006]);
  } else {
    myMap.setCenter([59.938631, 30.323037]);
  }
}
